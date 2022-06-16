import axios from "axios";
import React from "react";

function CreateGallery() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  console.log(userConnect);
  const gallery_author = userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;

  const setDataAPI = (e) => {
    
    e.preventDefault();
    // ---------- on recupere les info et on les envoie ---------- //
    const gallery_titre = document.getElementById("gallery_titre").value;
    const gallery_media = document.getElementById("gallery_media").value; //document.getElementById('file-id').value
    const gallery_texte = document.getElementById("gallery_texte").value;
    const filename = document.getElementById("gallery_media").file; //document.getElementById('file-id').value


    const gallery = [
      {
        gallery_titre: gallery_titre,
        gallery_media: gallery_media,
        gallery_texte: gallery_texte,
        gallery_userId: id,
        gallery_author: gallery_author,
        filename:filename
      },
    ];

    console.log("---- envoie pour API ----");
    console.log(gallery);

    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    axios.post(
      `http://localhost:3000/api/gallery`,
      {
        gallery_titre: gallery_titre,
        gallery_media: gallery_media,
        gallery_texte: gallery_texte,
        gallery_userId: id,
        gallery_author: gallery_author,
        filename:filename
      },config,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("gallery create");
  };

  return (
    <div>
      <form className="Bloc_6" onSubmit={setDataAPI}>
        <div>
          <label htmlFor="Titre" className="Bloc_5">
            Titre :{" "}
          </label>
          <input
            type="text"
            name="titre"
            placeholder="titre"
            id="gallery_titre"
            required
          />
        </div>

        <div>
          <label htmlFor="Media" className="Bloc_5">
            Choisir une image :
          </label>
          <input
            type="file"
            name="gallery_media"
            placeholder="fichier"
            id="gallery_media"
            required
          />
        </div>

        <div>
          <label htmlFor="description (optionelle)" className="Bloc_5">
            Message (optionnelle)
          </label>
          <textarea
            id="gallery_texte"
            name="description"
            placeholder="Pas de description (opptionelle)"
          ></textarea>
        </div>

        <button type="submit">Postez votre Message</button>
      </form>
    </div>
  );
}

export default CreateGallery;
