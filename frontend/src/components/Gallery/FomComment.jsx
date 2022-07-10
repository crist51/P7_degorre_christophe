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


  let messageBtn = "Postez commentaire"
  const comm = useRef(null);

  const setDataAPI = (e) => {
    e.preventDefault();

    // ---------- on recupere les info ---------- //
    const commentaire = {
      userId: userId,
      commentaireAuthor: commentaireAuthor,
      commentaire: comm.current.value
    }
    console.log(commentaire);
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    // ---------- envoie ----------
    axios.put(
      `http://localhost:3000/api/gallery/${id}/comments`,

      {
        commentaire: commentaire,
      },
      config,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    // ---------- Retour aapres envoie
    const messageBtn = document.getElementById("messageBtn")
    messageBtn.textContent = "Commentaire à bien été créer"
  };

  return (
    <div className="Bloc_1Contener">
      <form className="Bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="message" className="Bloc_5">
            Commentaire
          </label>
          <div className="underline"></div>
          <textarea ref={comm} className="p" name="commentaire" maxLength={150} placeholder="Votre Comentaire" required></textarea>
        </div>
        <button id="messageBtn" type="submit">{messageBtn}</button>
      </form>
    </div>
  );
}

export default FomComment;
