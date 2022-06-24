import axios from "axios";

let error = "";

let userConnect = JSON.parse(localStorage.getItem("auth"));
userConnect = [];

function SignIn() {
  const setDataAPI = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("---- envoie API ----");
    console.log(email + password);

    axios
      .post(
        `http://localhost:3000/api/authentification/signIn`,
        {
          email: email,
          password: password,
        },
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
      }); // Ici, le cas d'erreur
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
              required
            />
          

          <label htmlFor="password">Pasword</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="votre mot de passe"
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
