import axios from "axios";



function CreatePost() {

  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("key"));
  const id = userConnect[0].userId;
 console.log(userConnect);

  const setDataAPI = (e) => {
    e.preventDefault();
    // ---------- on recupere les info et on les envoie ---------- //
    const post_titre = document.getElementById("post_titre").value;
    const post_contenue = document.getElementById("post_contenue").value;
    
    axios.post(
      `http://localhost:3000/api/post`,
      {
        post_titre: post_titre,
        post_contenue: post_contenue,
        post_userId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      console.log("post create"),
      window.location.href = "http://localhost:3001/post"

    )
  };

  return (
    <div className="Bloc_1Contener_Gallery">
      <form className="Bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="titre" className="Bloc_5">
            Titres
          </label>
          <input type="text" name="post_titre" id="post_titre" required />
        </div>
        <div>
          <label htmlFor="message" className="Bloc_5">
            Message
          </label>
          <textarea id="post_contenue" name="post_contenue" required></textarea>
        </div>
        <button type="submit">Postez votre Message</button>
      </form>
    </div>
  );
}

export default CreatePost;
