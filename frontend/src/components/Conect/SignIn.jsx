import { useRef } from "react";
import axios from "axios";

let error = "";

let userConnect = JSON.parse(localStorage.getItem("auth"));
userConnect = [];


function SignIn() {

  const email = useRef(null);
  const password = useRef(null);
  const compteur = useRef({ count: 0 })

  const setDataAPI = (e) => {
    e.preventDefault();

    compteur.current.count++
    console.log(compteur.current.count);



    if (compteur.current.count < 15) {
      console.log("ok");

      const user = {
        email: email.current.value,
        password: password.current.value,
      }
      console.log(user);

      axios
        .post(
          `http://localhost:3000/api/authentification/signIn`, user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          // methode pour enregistre dans le local storage //
          userConnect.push(res.data);
          localStorage.setItem("auth", JSON.stringify(userConnect));
          window.location.href = "http://localhost:3001";
          // -------------------------------------------- //
        })
        .catch((err) => {
          console.log(err.response.data.error);
          document.getElementById("emailErrorMsg").innerHTML =
            err.response.data.error;
        }); // Ici, le cas d'erreur renvoyéer par le backend

    } else {
      console.log("c'est trop");
      document.getElementById("emailErrorMsg").innerHTML =
        "Vous avez effectué trop de tentative";
    }


  };

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="Titre"
            id="email"
            placeholder="votre email"
            ref={email}
            required
          />


          <label htmlFor="password">Pasword</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="votre mot de passe"
            ref={password}
            required
          />

        </div>
        <div>
          {" "}
          <p className="error" id="emailErrorMsg">
            {error}
          </p>
        </div>
        <button type="submit">C'est Re-partie</button>
      </form>
    </div>
  );
}

export default SignIn;
