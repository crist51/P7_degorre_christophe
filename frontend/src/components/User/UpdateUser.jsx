import React, { useState, useEffect } from "react";
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

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const affectation = document.getElementById("affectation").value;
    const description = document.getElementById("description").value;
    const poste = document.getElementById("poste").value;

    let user =
    {
      firstname: firstname,
      lastname: lastname,
      affectation: affectation,
      description: description,
      poste: poste,
    }

    const inputFile = document.getElementById("user_imageUrl").files
    console.log(inputFile);

    if (inputFile.length == 1) {
      console.log("j'enrejistre avec file");
      const user_imageUrl = document.getElementById("user_imageUrl").files[0].name;
      const file = document.getElementById("user_imageUrl").files[0];

      //j'ajoute dans l'objet valeur user_imageUrl
      user.user_imageUrl = user_imageUrl;

      console.log("---- envoie pour API ----");
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

      const sup = document.getElementById("sup").innerHTML;
      console.log(sup);
      user.user_imageUrl = sup;

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
      <div className="Bloc_1Contener">
        {data.map((item) => (
          <form className="Bloc_6" onSubmit={update} key={item.userId}>
            <label htmlFor="firstname" className="Bloc_5">
              Votre nom
            </label>
            <p id="sup">{item.user_imageUrl}</p>
            <div className="underline"></div>
            <input
              type="text"
              name="firstname"
              id="firstname"
              defaultValue={item.firstname}
            />

            <label htmlFor="lastname" className="Bloc_5">
              Votre prenom
            </label>
            <div className="underline"></div>
            <input
              type="texte"
              name="lastname"
              defaultValue={item.lastname}
              id="lastname"
            />

            <label htmlFor="affectation" className="Bloc_5">
              votre ville
            </label>
            <div className="underline"></div>
            <input
              type="texte"
              id="affectation"
              name="affectation"
              placeholder="Paris"
              defaultValue={item.affectation || "pas renseigné"}
            />

            <label htmlFor="decription" className="Bloc_5">
              un mot sur vous
            </label>
            <div className="underline"></div>

            <input
              type="texte"
              name="description"
              defaultValue={item.description || "pas renseigné"}
              id="description"
              placeholder="Il faut croire en ces rêves"
            />

            <label htmlFor="poste">Poste de travaille:</label>
            <div className="underline"></div>

            <select name="poste" id="poste" defaultValue={item.poste}>
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
            <input type="file" id="user_imageUrl" name="user_imageUrl" placeholder="fichier"
            />

            <h1>il jeozjfz</h1>

            <p id="imageUrl">{item.user_imageUrl}</p>

            <div className="button_row">
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