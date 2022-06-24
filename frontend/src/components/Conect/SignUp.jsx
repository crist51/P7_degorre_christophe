import axios from "axios";

let error = "";

let userConnect = JSON.parse(localStorage.getItem("auth"));
userConnect = [];

function SignIn() {
  const setDataAPI = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const password = document.getElementById("password").value;

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
              id="email"
              placeholder="Votre email"
              required
            />
          

          <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Votre mot de passe"
              minLength={4}
              required
            />
          

          <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="firstname"
              placeholder="Votre nom"
              required
            />
          

          <label htmlFor="prenom">Prenom</label>
            <input
              type="text"
              name="prenom"
              id="lastname"
              placeholder="Votre prenom"
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

export default SignIn;
