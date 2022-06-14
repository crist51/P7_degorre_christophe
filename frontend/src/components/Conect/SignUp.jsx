import axios from "axios";
//import React, { useState } from "react";
// import { Link } from "react-router-dom";

let error = " Champ vide ";

let userConnect = JSON.parse(localStorage.getItem("auth"));
userConnect = [];

function SignIn() {
  const setDataAPI = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const password = document.getElementById("password").value;

    const SignUp = [
      {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password,
        id: undefined,
      },
    ];

    console.log("---- envoie des donnée ----");
    console.log(SignUp);

    axios
      .post(
        `http://localhost:3000/api/authentification/signUp`,
        {
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
      )
      .then((res) => {
        console.log("---- res ----");
        console.log(res);
        console.log("---- res.dada ----");
        console.log(res.data);
        console.log("je suis inscrit");
        // mehose pour enregistre dans le local storage //
        userConnect.push(res.data);
         localStorage.setItem(
           "auth",
          JSON.stringify(userConnect)
        )
        (window.location.href = "http://localhost:3001");
        // -------------------------------------------- //
      })
      .catch((err) => {
        console.log(err.response.data.error);
        document.getElementById("emailErrorMsg").innerHTML =
          err.response.data.error;
      }); // Ici, le cas d'erreur
  };

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre email"
              required
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Votre mot de passe"
              minLength={4}
              required
            />
          </label>

          <label htmlFor="nom">
            <input
              type="text"
              name="nom"
              id="firstname"
              placeholder="Votre nom"
              required
            />
          </label>

          <label htmlFor="prenom">
            <input
              type="text"
              name="prenom"
              id="lastname"
              placeholder="Votre prenom"
              required
            />
          </label>
        </div>
        <div>
          <p className="error" id="emailErrorMsg">
            {error}
          </p>
        </div>
        <button type="submit">C'est partie</button>
      </form>
    </div>
  );
}

export default SignIn;
