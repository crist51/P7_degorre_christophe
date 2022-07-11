import axios from "axios";
import React, { useRef } from "react";

function CreatePost() {
  // ---------- on recupere info local storage ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  const post_author = userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;

  let messageBtn = "Postez votre message"
  const post_titre = useRef(null);
  const post_contenue = useRef(null);


  const setDataAPI = (e) => {
    e.preventDefault();
    // ---------- on recupere les info et on les envoie ---------- //

    console.log( post_titre.current.value);
    console.log( post_contenue.current.value);

    const post = {
      post_titre: post_titre.current.value,
      post_contenue: post_contenue.current.value,
      post_userId: id,
      post_author: post_author,
    };

    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

      axios.post(
        `http://localhost:3000/api/post`, post,config,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        //window.location.href = "http://localhost:3001/post"
        );
        const messageBtn = document.getElementById("messageBtn")
        console.log(messageBtn);
        messageBtn.textContent = "Votre message à bien été créer"  
  };

  return (
    <div className="Bloc_1Contener, bloc_2">
      <form className="Bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="titre" className="Bloc_5">
            Titres
          </label>
          <div className="underline"></div>
          <input className="h2" type="text" name="post_titre" ref={post_titre} id="post_titre" placeholder="Le titre" maxLength={255} required />
        </div>
        <div>
          <label htmlFor="message" className="Bloc_5">
            Message
          </label>
          <div className="underline"></div>
          <textarea ref={post_contenue} id="post_contenue" className="p" name="post_contenue" maxLength={1000} placeholder="le contenue de votre poste" required></textarea>
        </div>
        <button id="messageBtn" type="submit">{messageBtn}</button>
      </form>
    </div>
  );
}

export default CreatePost;
