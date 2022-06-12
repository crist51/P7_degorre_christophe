import axios from "axios";
import React from "react";

function CreateGallery() {

  const setDataAPI = (e) => {
    
    e.preventDefault();

    // const gallery_titre = e.target["titre"].value
    // const gallery_media =  e.target["gallery_media"].value
    // const gallery_texte=  e.target["description"].value


    const gallery_titre = document.getElementById("gallery_titre").value;
    const gallery_media = document.getElementById("gallery_media").value;//document.getElementById('file-id').value
    const gallery_texte = document.getElementById("gallery_texte").value;

    const gallery_userId = "36";

    const gallery = [
      {
        gallery_titre: gallery_titre,
        gallery_media: gallery_media,
        gallery_texte: gallery_texte,
        gallery_userId: gallery_userId,
      },
    ];

    console.log("---- envoie pour API ----");
    console.log(gallery);

    axios.post(
      `http://localhost:3000/api/gallery`,
      {
        gallery_titre: gallery_titre,
        gallery_media: gallery_media,
        gallery_texte: gallery_texte,
        gallery_userId: gallery_userId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
