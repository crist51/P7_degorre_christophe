import { useRef } from "react";
import axios from "axios";

let error = "";

let userConnect = JSON.parse(localStorage.getItem("auth"));
userConnect = [];

function SignUp() {

  const email = useRef (null);
  const password = useRef (null);
  const firstname = useRef (null);
  const lastname = useRef (null);


  const setDataAPI = (e) => {
    e.preventDefault();

    const user={
      email:email.current.value,
      password:password.current.value,
      firstname:firstname.current.value,
      lastname:lastname.current.value,
    }

      console.log(user);

    axios
      .post(
        `http://localhost:3000/api/authentification/signUp`,user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {;
        //save local storage
        userConnect.push(res.data);
         localStorage.setItem(
           "auth",
          JSON.stringify(userConnect)
        )
        (window.location.href = "http://localhost:3001");
        // -------------------------------------------- //
      })
      .catch((err) => {
        document.getElementById("emailErrorMsg").innerHTML =
          err.response.data.error;
      });
  };

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              // id="email"
              placeholder="Votre email"
              ref={email}
              required
            />
          

          <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              // id="password"
              placeholder="Votre mot de passe"
              ref={password}

              required
            />
          

          <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              // id="firstname"
              placeholder="Votre nom"
              ref={firstname}
              required
            />
          

          <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              // id="lastname"
              placeholder="Votre prenom"
              ref={lastname}
              required
            />
          
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

export default SignUp;
