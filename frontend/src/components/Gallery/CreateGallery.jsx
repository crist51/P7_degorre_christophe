import axios from "axios";
import React, { useState } from "react";

function CreateGallery() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  //console.log(userConnect);
  const gallery_author =
    userConnect[0].firstname + " " + userConnect[0].lastname;
  const validToken = userConnect[0].token;



  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/bmp",
    "image/webp",
  ];
  
  const changeHandler = (e) => {
    e.preventDefault();
    
    console.log("j/'ai chanfer");
    const selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("Le fichier a un bon format  ");
    } else {
      setFile(null);
      setError(
        "mauvais fromat d'image (fichier accepte (.jpg .jpeg .png .bmp .webp"
        );
      }
    };
  


  const setDataAPI = (e) => {
    // const upoadedImageDiv = document.getElementById("upoadedImage");
    // const fileUpload = document.getElementById("gallery_media");

    e.preventDefault();
    // ---------- on recupere les info et on les envoie ---------- //
    const gallery_titre = document.getElementById("gallery_titre").value;
    const gallery_texte = document.getElementById("gallery_texte").value;
    const gallery_media =  document.getElementById("gallery_media").files[0].name;
    const file = document.getElementById("gallery_media").files[0];

    const gallery = 
      {
        gallery_titre: gallery_titre,
        gallery_texte: gallery_texte,
        gallery_userId: id,
        gallery_author: gallery_author,
        gallery_media: gallery_media,
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
    
    console.log('----------data----------');
    console.log(data);

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
      },
      console.log("gallery create"),
      //window.location.href = "http://localhost:3001/multimedia"
    );

  };

  return (
    <div>
      <form className="Bloc_6" encType="mulipart/form-data" onSubmit={setDataAPI}>

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
          <div id="upoadedImage"></div>
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
