import axios from "axios";

function CreatePost() {
  const setDataAPI = (e) => {
    console.log("je suis là");

    e.preventDefault();
    const post_titre = document.getElementById("post_titre").value;
    const post_contenue = document.getElementById("post_contenue").value;

    //--------------a modifié
    const post_userId = "36";
    //---------------------

    const post = [
      {
        post_titre: e.target["post_titre"].value,
        post_contenue: e.target["post_contenue"].value,
        post_userId: post_userId
      },
    ];

    console.log("---- rajout pour API ----");
    console.log(post);

    axios.post(
      `http://localhost:3000/api/post`,
      {
        post_titre: post_titre,
        post_contenue: post_contenue,
        post_userId:post_userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="Bloc_1Contener_Gallery">
      <form className="Bloc_6" onSubmit={setDataAPI}>
        {/*setDataAPI handleSubmit*/}
        <div>
          <label htmlFor="titre" className="Bloc_5">
            Titres
          </label>
          <input type="text" name="post_titre" id="post_titre" />
        </div>
        <div>
          <label htmlFor="message" className="Bloc_5">
            Message
          </label>
          <textarea id="post_contenue" name="post_contenue"></textarea>
        </div>
        <button type="submit">Postez votre Message</button>
      </form>
    </div>
  );
}

export default CreatePost;
