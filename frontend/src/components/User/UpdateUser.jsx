import React, { useState, useEffect } from "react";
import axios from "axios";

// import Delete from "./Delete";

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
      // console.log(result.data.results);
    };
    fetchData();
  }, []);

  const setDataAPI = (e) => {
    //e.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const affectation = document.getElementById("affectation").value;
    //const user_imageUrl = document.getElementById("user_imageUrl").value;
    const description = document.getElementById("description").value;
    const poste = document.getElementById("poste").value;

    const user = {
      firstname: firstname,
      lastname: lastname,
      affectation: affectation,
      user_imageUrl: "icon.png1655753820253.png",
      description: description,
      poste: poste,
    };
    console.log("---- rajout pour API ----");
    console.log(user);

    axios.put(`http://localhost:3000/api/user/${id}`, user, config, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.getElementById("msg_update").innerHTML = msg_update =
      "modification effectuer";
    //window.location.href = "http://localhost:3001";
  };

  const onDelete = (e) => {
    axios.delete(`http://localhost:3000/api/user/${id}`, config).then(() => {
      console.log("compte supprimer");
      window.location.href = "http://localhost:3001/acceuil/";
    });
  };

  return (
    <>
      <div className="Bloc_1Contener">
        {data.map((item) => (
          <form className="Bloc_6" onSubmit={setDataAPI} key={item.userId}>
            {/* <form className="Bloc_6" key={item.userId}> */}
            <div>
              <label htmlFor="firstname" className="Bloc_5">
                Votre nom
              </label>
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
                defaultValue={item.affectation}
              />

              <label htmlFor="Media" className="Bloc_5">
                Choisir une image  (non implemnté):
              </label>
              <div className="underline"></div>

              <input type="file" id="user_imageUrl" name="user_imageUrl" />

              <label htmlFor="decription" className="Bloc_5">
                un mot sur vous
              </label>
              <div className="underline"></div>

              <input
                type="texte"
                name="description"
                defaultValue={item.description}
                id="description"
                placeholder="Il faut croire en ces rêves"
              />

              <label htmlFor="poste">Poste de travaille:</label>

              <select name="poste" id="poste" defaultValue={item.poste}>
                <option value="non renseigné">-- non renseigné --</option>
                <option value="Employé">Employé</option>
                <option value="administration">administration</option>
                <option value="Chef d'équipe">Chef d'équipe</option>
                <option value="Direction">Direction</option>
              </select>
            </div>
            {/* <button type="submit">modifier votre profil</button> */}
            <div className="button_row">
              <button type="submit" onClick={() => setDataAPI()}>
                Sauvegarder les maudification
              </button>
              <p id="msg_update">{msg_update}</p>
              <button type="submit" onClick={() => onDelete(data.id)}>
                supprimer votre compte
              </button>
            </div>
          </form>
        ))}
      </div>
      {/* <Delete /> */}
      <div></div>
    </>
  );
}
