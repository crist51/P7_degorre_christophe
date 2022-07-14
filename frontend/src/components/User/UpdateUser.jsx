import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function UpdateUser() {
  let msg_update = "modification demandé";

  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  const validToken = userConnect[0].token;

  const [data, setData] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + validToken,
    },
  };

  const affectation = useRef(null);
  const description = useRef(null);
  const poste = useRef(null);
  const user_imageUrl = useRef(null);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/api/user/${id}`,
        config
      );
      setData(result.data.results);
    };
    fetchData();
  }, []);

  const update = (ab) => {
    ab.preventDefault();

    const user = {
      affectation: affectation.current.value,
      description: description.current.value,
      poste: poste.current.value,
    }

    const inputFile = user_imageUrl.current.files
    // console.log(inputFile);

    if (inputFile.length == 1) {
      // console.log("j'enrejistre avec file");

      console.log("ref");
      // console.log(inputFile[0].name);
      // console.log(inputFile[0]);
      const user_imageUrl = inputFile[0].name
      const file = inputFile[0]

      //j'ajoute dans l'objet valeur user_imageUrl
      user.user_imageUrl = user_imageUrl;

      // console.log("---- envoie pour API ----");
      console.log(user);
      console.log(file);

      let data = new FormData()
      data.append('user', JSON.stringify(user))
      data.append('file', file)


      axios.put(`http://localhost:3000/api/user/${id}`,
        data,
        config,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "type": "formData"
          },
        }
      );
      console.log("image modifié");


    } else {
      console.log("j'enregistre sans file");

      console.log(user);

      axios.put(`http://localhost:3000/api/user/${id}`, user, config, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("update modifié");
      document.getElementById("msg_update").innerHTML = msg_update = "modification effectuer avec succes";
    }
  };



  return (
    <>
      <div className="Bloc_1Contener, bloc_2">
        {data.map((item) => (
          <form className="Bloc_6" onSubmit={update} key={item.userId}>
            <div>

              <label htmlFor="affectation" className="Bloc_5">
                Votre lieu d'affectation
              </label>
              <div className="underline"></div>
              <input
                type="texte"
                id="affectation"
                name="affectation"
                placeholder="Paris"
                maxLength="50"
                pattern="[a-zA-Z]{2,50}"
                title="Lettre majuscule et miniscule seulement autorsé"
                ref={affectation}
                defaultValue={item.affectation || "pas renseigné"}
              />

              <label htmlFor="decription" className="Bloc_5">
                Un mot sur vous
              </label>
              <div className="underline"></div>

              <input
                type="texte"
                name="description"
                defaultValue={item.description}
                id="description"
                ref={description} maxLength="250"
                title="Lettre majuscule et miniscule seulement autorsé"
                placeholder="Un pour tous et tous pour un"
              />

              <label htmlFor="poste">Poste de travaille:</label>
              <div className="underline"></div>

              <select ref={poste} name="poste" id="poste" defaultValue={item.poste}>
                <option value="non renseigné">-- non renseigné --</option>
                <option value="Employé">Employé</option>
                <option value="administration">administration</option>
                <option value="Chef d'équipe">Chef d'équipe</option>
                <option value="Direction">Direction</option>
              </select>

              <label htmlFor="user_imageUrl" className="Bloc_5">
                Choisir une image:
              </label>
              <div className="underline"></div>
              <input ref={user_imageUrl} type="file" id="user_imageUrl" name="user_imageUrl" placeholder="fichier"
              />
              {/* <p id="imageUrl">{item.user_imageUrl}</p> */}

              <div className="button_row">
                <button type="submit">
                  Sauvegarder les changement
                </button>
                <p id="msg_update">{msg_update}</p>
              </div>
            </div>
          </form>

        ))}
      </div>

    </>
  )
}