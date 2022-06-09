import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateUser() {
  // const [fistname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [ID, setID] = useState (null);
  // const sendDataToAPI  = () =>{
  //     console.log('test')
  //     console.log(fistname + lastname )
  //     axios.put (`http://localhost:3000/api/user/${29}`,{
  //         fistname,
  //         lastname
  //     })
  // }
  // useEffect (() => {
  //     setFirstname (localStorage.getItem('firstname'));
  //     setLastname (localStorage.getItem('lastname'));
  //     setID(localStorage.getItem('ID'))

  // },[])
  console.log("je suis là");

  const setDataAPI = (e) => {
      e.preventDefault()
    const user = 
      {
        firstname: e.target["firstname"].value,
        lastname: e.target["lastname"].value,
        city: e.target["city"].value,
        user_imageURL: e.target["user_imageURL"].value,


      };
    console.log("---- rajout pour API ----");
    console.log(user);

    axios.put (`http://localhost:3000/api/user/${36}`,
        user,
    {
        headers: {
          "Content-Type": "application/json",
        },
    }
    )
  };

  return (
    <div>
      <form onSubmit={setDataAPI}>
        <div>
          <label htmlFor="firstname" className="Bloc_5">
            firstname
            <input type="text" name="firstname" />
          </label>
          {/* onChange={(e) => setFirstname}  */}
          <label htmlFor="lastname" className="Bloc_5">
            lastname
            <input name="lastname" />
          </label>
          <label htmlFor="city" className="Bloc_5">
            votre ville
            <input name="city" />
          </label>
          <label htmlFor="Media" className="Bloc_5" id="user_imageURL ">Choisir une image :
        <input type="file" name="user_imageURL"/></label>
        </div>
        <button type="submit">modifier votre profil</button>
      </form>
    </div>
  );
}
