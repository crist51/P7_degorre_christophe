import React, { useState, useEffect } from "react";
import axios from "axios";

// import Delete from "./Delete";

export default function UpdateUser() {

  let msg_update = "modification demandé"

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
    e.preventDefault();
    const user = {
      firstname: e.target["firstname"].value,
      lastname: e.target["lastname"].value,
      city: e.target["city"].value,
      user_imageUrl: e.target["user_imageUrl"].value,
      description: e.target["description"].value,
    };
    console.log("---- rajout pour API ----");
    console.log(user);

    axios.put(`http://localhost:3000/api/user/${id}`, user, config, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.getElementById("msg_update").innerHTML =
    msg_update = 'modification effectuer'
    console.log(msg_update);
    window.location.href = "http://localhost:3001";
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
            <div>
              <label htmlFor="firstname" className="Bloc_5">
                firstname
              </label>
              <div className="underline"></div>
              <input
                type="text"
                name="firstname"
                defaultValue={item.firstname}
              />

              <label htmlFor="lastname" className="Bloc_5">
                lastname
              </label>
              <div className="underline"></div>
              <input
                type="texte"
                name="lastname"
                defaultValue={item.lastname}
              />

              <label htmlFor="city" className="Bloc_5">
                votre ville
              </label>
              <div className="underline"></div>
              <input type="texte" name="city" defaultValue={item.city} />

              <label htmlFor="Media" className="Bloc_5">
                Choisir une image :
              </label>
              <div className="underline"></div>

              <input type="file" name="user_imageUrl" />

              <label
                htmlFor="decription"
                className="Bloc_5"
                defaultValue={item.decription}
              >
                un mot sur vous
              </label>
              <div className="underline"></div>

              <input
                type="texte"
                name="description"
                defaultValue={item.description}
              />
            </div>
            <p id="msg_update">{msg_update}</p>
            <button type="submit">modifier votre profil</button>
          </form>
        ))}
      </div>
      {/* <Delete /> */}
      <div>
        <button type="submit" onClick={() => onDelete(data.id)}>
          supprimer votre compte
        </button>
      </div>
    </>
  );
}
