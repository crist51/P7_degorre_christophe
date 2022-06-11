import axios from "axios";

function SignIn() {
  let error = " Error message du backend email & password ";

  const setDataAPI = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const SignUp = {
      email: email,
      password: password,
    };
    console.log("---- envoie API ----");
    console.log(SignUp);

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

      //------------------------Allerte warning
      .then(
        (res) => (
          console.log("---- retourAPI ----"),
          console.log(res.status),
          console.log(res.data)
        )
      )
      .catch((err) => console.log("Oh no", err)); // Ici, le cas d'erreur
  };

  return (
    <div>
      <form className="bloc_6" onSubmit={setDataAPI}>
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
