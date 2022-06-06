import axios from "axios";
//import React, { useState } from "react";
// import { Link } from "react-router-dom";





let error = " Error message du backend email & password ";



const setDataAPI = (e) => {
  const SignIn = {
    email: e.target["email"].value,
    password: e.target["password"].value,
  };
  const email = e.target["email"].value;
  const password = e.target["password"].value;

  console.log("---------- email");
  console.log(email);
  console.log("---------- password");
  console.log(password);

  console.log("---- rajout pour API ----");
  console.log(SignIn);

  //     axios.post(`https://jsonplaceholder.typicode.com/posts`, {
  axios.post(
    `http://localhost:3000/api/authentification/signup`,
    {
      SignIn,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("apres" + SignIn);
};


function SignIn() {
  
  return (
    <div>
      <form className="bloc_6" onSubmit={alert('gelge')}>
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
        </div>
        <div>
          <p className="error" id="emailErrorMsg">
            {error}
          </p>
        </div>
        {/* <Link to="/"> */}
        <button type="submit" onClick={setDataAPI}>C'est partie</button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default SignIn;
