import React, { useState, useEffect } from "react";
import axios from "axios";

// import Delete from "./Delete";



export default function UpdateUser() {
  const [data, setData] = useState([]);

    // ---------- on recupere id du user ---------- //
    let userConnect = JSON.parse(localStorage.getItem("key"));
    const id = userConnect[0].userId;
   console.log(userConnect);
  


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/user/${id}`);
      setData(result.data.results);
      console.log(result.data.results);

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

    axios.put(`http://localhost:3000/api/user/${id}`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onDelete = (e) => {
    axios.delete(`http://localhost:3000/api/user/${id}`)
    .then (() => {
      console.log("compte supprimer");
      window.location.href = "http://localhost:3001/acceuil/"
    })
  }

  return (
    <>
      <div>
        {data.map((item) => (
          <form onSubmit={setDataAPI} key={item.userId}>
            <div>
              <label htmlFor="firstname" className="Bloc_5">
                firstname
                <input type="text" name="firstname" defaultValue={item.firstname} />
              </label>
              <label htmlFor="lastname" className="Bloc_5">
                lastname
                <input type="texte" name="lastname" defaultValue={item.lastname} />
              </label>
              <label htmlFor="city" className="Bloc_5">
                votre ville
                <input type="texte" name="city" defaultValue={item.city} />
              </label>
              <label htmlFor="Media" className="Bloc_5">
                Choisir une image :
                <input type="file" name="user_imageUrl" />
              </label>
              <label
                htmlFor="decription"
                className="Bloc_5"
                defaultValue={item.decription}
              >
                un mot sur vous
                <input type="texte" name="description" defaultValue={item.description} />
              </label>
            </div>
            <button type="submit">modifier votre profil</button>
          </form>
        ))}
      </div>
      {/* <Delete /> */}
      <div>
        <button type="submit" onClick={() => onDelete(data.id)}>supprimer</button>
      </div>
    </>
  );
}
