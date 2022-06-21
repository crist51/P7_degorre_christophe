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

  const updateuser = (ab) => {
    ab.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const affectation = document.getElementById("affectation").value;
    const description = document.getElementById("description").value;
    const poste = document.getElementById("poste").value;
    const user_imageUrl =
      document.getElementById("user_imageUrl").files[0].name;
    const file = document.getElementById("user_imageUrl").files[0];

    const user = {
      firstname: firstname,
      lastname: lastname,
      affectation: affectation,
      description: description,
      poste: poste,
      user_imageUrl: user_imageUrl,
    };

    console.log("---- envoie pour API ----");
    console.log(user);
    console.log(file);

    let data = new FormData();
    data.append("user", JSON.stringify(user));
    data.append("file", file);

    console.log("----------data----------");
    console.log(data);

    axios.put(
      `http://localhost:3000/api/user/${id}`,
      data,
      config,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          type: "formData",
        },
      },
      console.log("enfin")
    );
    //-------------------

    // axios.put(`http://localhost:3000/api/user/${id}`, user, config, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    document.getElementById("msg_update").innerHTML = msg_update =
      "modification effectuer";
    console.log("modif effectuer");
    //window.location.href = "http://localhost:3001";
  };

  const onDelete = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:3000/api/user/${id}`, config).then(() => {
      console.log("compte supprimer");
      //window.location.href = "http://localhost:3001/acceuil/";
    });
  };

  return (
    <>
      <div className="Bloc_1Contener">
        {data.map((item) => (
          <form className="Bloc_6" onSubmit={updateuser} key={item.userId}>
            {/* <form className="Bloc_6" key={item.userId}> */}
            <div>
              <label htmlFor="firstname" className="Bloc_5">
                firstname
              </label>
              <div className="underline"></div>
              <input
                type="text"
                name="firstname"
                id="firstname"
                defaultValue={item.firstname}
                required
              />

              <label htmlFor="lastname" className="Bloc_5">
                lastname
              </label>
              <div className="underline"></div>
              <input
                type="texte"
                name="lastname"
                defaultValue={item.lastname}
                id="lastname"
                required
              />

              <label htmlFor="affectation" className="Bloc_5">
                votre ville d'affectation
              </label>
              <div className="underline"></div>
              <input
                type="texte"
                id="affectation"
                name="affectation"
                defaultValue={item.affectation || "non renseigne"}
              />

              <label htmlFor="Media" className="Bloc_5">
                Choisir une image :
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
                defaultValue={item.description || "non renseigné"}
                id="description"
              />

              <label htmlFor="poste">Poste de travaille:</label>

              <select
                name="poste"
                id="poste"
                defaultValue={item.poste || "non renseigné"}
              >
                <option value="non renseigné">-- non renseigné --</option>
                <option value="Employé">Employé</option>
                <option value="administration">administration</option>
                <option value="Chef d'équipe">Chef d'équipe</option>
                <option value="Direction">Direction</option>
              </select>
            </div>
            {/* <button type="submit">modifier votre profil</button> */}
            <div className="button_row">
              <button type="submit">update</button>
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
