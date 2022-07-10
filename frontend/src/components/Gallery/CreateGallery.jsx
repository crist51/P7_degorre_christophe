import axios from "axios";
import React, { useRef } from "react";

function CreateGallery() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  const gallery_author =
    userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;

  let messageBtn = "Postez votre message"

  const gallery_titre = useRef(null);
  const gallery_media = useRef(null);
  const gallery_texte = useRef(null);

  const setDataAPI = (e) => {
    e.preventDefault();

    // ---------- on recupere les info et on les envoie ---------- //
    const file = gallery_media.current.files[0]
    const gallery = {
      gallery_titre: gallery_titre.current.value,
      gallery_media: file.name,
      gallery_texte: gallery_texte.current.value,
      gallery_userId: id,
      gallery_author: gallery_author,
    }

    console.log("---- envoie pour API ----");
    console.log(gallery);
    console.log(file);

    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    let data = new FormData()
    data.append('gallery',JSON.stringify(gallery))
    data.append('file',file)

    axios.post(
      `http://localhost:3000/api/gallery`,
      data,
      config,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        },
      }
    );
    const messageBtn = document.getElementById("messageBtn")
    messageBtn.textContent = "Votre message à bien été créer"
  };

  return (
    <div className="Bloc_1Contener">
      <form className="Bloc_6" encType="mulipart/form-data" onSubmit={setDataAPI}>

        <div>
          <label htmlFor="Titre" className="Bloc_5">
            Titre :{" "}
          </label>
          <div className="underline"></div>
          <input
            type="text"
            name="titre"
            placeholder="titre"
            ref={gallery_titre}
            required
            maxLength={255}
          />
        </div>

        <div>
          <label htmlFor="Media" className="Bloc_5">
            Choisir une image :
          </label>
          <div className="underline"></div>
          <input
            type="file"
            name="gallery_media"
            placeholder="fichier"
            ref={gallery_media}
            required
          />
          <div id="upoadedImage"></div>
        </div>

        <div>
          <label htmlFor="description (optionelle)" className="Bloc_5">
            Message
          </label>
          <div className="underline"></div>
          <textarea
            name="description"
            placeholder="Pas de description (opptionelle)"
            maxLength={255}
            ref={gallery_texte}
          >
          </textarea>
        </div>

        <button id="messageBtn" type="submit">{messageBtn}</button>
      </form>
    </div>
  );
}

export default CreateGallery;
