import axios from "axios";
//import React, { useState } from "react";
// import { Link } from "react-router-dom";

let error = " Error message du backend email & password ";

function SignIn() {
  const setDataAPI = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const password = document.getElementById("password").value;

    const SignIn = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
    };
    
    console.log("---- envoie des donnée ----");
    console.log(SignIn);

    console.log("---- envoie pour API ----");

    axios.post(
      `http://localhost:3000/api/authentification/signin`,
      {
        // SignIn,

        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
        {/* onSubmit={alert("gelge" )} */}
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Votre mot de passe"
            />
          </label>

          <label htmlFor="nom">
            <input
              type="text"
              name="nom"
              id="firstname"
              placeholder="Votre nom"
            />
          </label>

          <label htmlFor="prenom">
            <input
              type="text"
              name="prenom"
              id="lastname"
              placeholder="Votre prenom"
            />
          </label>
        </div>
        <div>
          <p className="error" id="emailErrorMsg">
            {error}
          </p>
        </div>
        {/* <Link to="/"> */}
        {/* </Link> */}
        <button type="submit">
          {/* onClick={setDataAPI} */}
          C'est partie
        </button>
      </form>
    </div>
  );
}

export default SignIn;
