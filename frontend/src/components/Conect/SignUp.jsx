// import axios from "axios";
//import React, { useState } from 'react';
// import { Link } from "react-router-dom";

function SignIn() {
  let error = " Error message du backend email & password ";

  //const [Titre, Message] = useState('');

  // function setDataAPI(e) {
  //   e.preventDefault();

  //   console.log("---- rajout pour API ----");
  //   const user = {
  //     email: e.target["email"].value,
  //     password: e.target["password"].value,
  //   };
  //   console.log(user);

  //   let localStorageUser = JSON.parse(localStorage.getItem("key")); //JSON.parse pour convertir JSON en JAVASCIPT
  //   localStorageUser = []; //sinon on creer  la clef
  //   localStorageUser.push(user);
  //   localStorage.setItem("key", JSON.stringify(localStorageUser));
  // }

  const setDataAPI = (e) => {
      const post = [
          {
              post_titre: e.target["email"].value,
              post_contenue: e.target["password"].value
          }
      ]
       console.log("---- rajout pour API ----");

      console.log(post);
      //axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      // axios.post(`http://localhost:3000/api/authentification/login`, {
          // post
      // })
  }

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
        {/*setDataAPI*/}
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="Titre"
              id="email"
              placeholder="votre email"
            />
          </label>

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="votre mot de passe"
            />
          </label>
        </div>
        <div>
          {" "}
          <p className="error" id="emailErrorMsg">
            {error}
          </p>
        </div>
        {/* <Link to="/"> */}
        <button type="submit">C'est Re-partie</button>
        {/* </Link>; */}
      </form>
    </div>
  );
}

export default SignIn;
