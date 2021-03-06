import axios from "axios";
import React, { useRef } from "react";

function FomComment() {
  // ---------- on recupere info local storage ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const userId = userConnect[0].userId;
  const commentaireAuthor = userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;

  var str = window.location.href;
  var url = new URL(str);
  var id = url.searchParams.get("id");


  let messageBtn = "Postez commentaire";
  const comm = useRef(null);

  const compteur = useRef({ count: 0 })

  const setDataAPI = (e) => {
    e.preventDefault();

    compteur.current.count++
    console.log(compteur.current.count);

    if (compteur.current.count <= 1) {
    // ---------- on recupere les info et on les envoie ---------- //
    const commentaire = {
      userId: userId,
      commentaireAuthor: commentaireAuthor,
      commentaire: comm.current.value
    }

    // ----------athentification ---------- //
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    axios.put(
      `http://localhost:3000/api/post/${id}/comments`,
      {
        commentaire: commentaire,
      },
      config,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const messageBtn = document.getElementById("messageBtn")
    messageBtn.textContent = "Commentaire créer créer"
  } else {
    console.log("deja créer");
    alert(`Votre commentaire a déja été créer(pour en repostez un, veuillez fermer le formulaire)`)
  }


  };

  return (
    <div className="Bloc_1Contener">
      <form className="Bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="message" className="Bloc_5">
            Commentaire
          </label>
          <div className="underline"></div>
          <textarea ref={comm} id="commentaire" className="p" name="commentaire" maxLength={150} placeholder="Votre Comentaire" required></textarea>
        </div>
        <button id="messageBtn" type="submit">{messageBtn}</button>
      </form>
    </div>
  );
}

export default FomComment;
