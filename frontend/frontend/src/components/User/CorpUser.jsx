import React, { useState, useEffect } from "react";
import axios from "axios";

import Delete from "./Delete";

export default function UpdateUser() {
  const [data, setData] = useState([]);

  const id = 37;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/user/${id}`);
      //setData(result.data);
      setData(result.data.results);
      console.log(result.data.results);
      // console.log(result.data.results[0].firstname);
      // const firstname = result.data.results[0].firstname
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
    const id = 37

    axios.put(`http://localhost:3000/api/user/${id}`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <div>
        {data.map((item) => (
          <form onSubmit={setDataAPI} key={item.userId}>
            <div>
              <label htmlFor="firstname" className="Bloc_5">
                firstname
                <input
                  type="text"
                  name="firstname"
                  defaultValue={item.firstname}
                />
              </label>
              <label htmlFor="lastname" className="Bloc_5">
                lastname
                <input name="lastname" defaultValue={item.lastname} />
              </label>
              <label htmlFor="city" className="Bloc_5">
                votre ville
                <input name="city" defaultValue={item.city} />
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
                <textarea
                  type="texte"
                  name="description"
                  id="description"
                ></textarea>
              </label>
            </div>
            <button type="submit">modifier votre profil</button>
            supprimer
          </form>
        ))}
        <Delete />
      </div>
    </>
  );
}
