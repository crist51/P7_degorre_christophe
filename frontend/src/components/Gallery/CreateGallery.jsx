import axios from "axios";
import React from "react";

function CreateGallery() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  const gallery_author =
    userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;

  const setDataAPI = (e) => {

    e.preventDefault();
    // ---------- on recupere les info et on les envoie ---------- //
    const gallery_titre = document.getElementById("gallery_titre").value;
    const gallery_media =  document.getElementById("gallery_media").files[0].name;
    const gallery_texte = document.getElementById("gallery_texte").value;
    const file = document.getElementById("gallery_media").files[0];

    const gallery = 
      {
        gallery_titre: gallery_titre,
        gallery_media: gallery_media,
        gallery_texte: gallery_texte,
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
    window.location.href = "http://localhost:3001/multimedia";
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
            id="gallery_titre"
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
            id="gallery_media"
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
            id="gallery_texte"
            name="description"
            placeholder="Pas de description (opptionelle)"
            maxLength={255}

          >
          </textarea>
        </div>

        <button type="submit">Postez votre Message</button>
      </form>
    </div>
  );
}

export default CreateGallery;
