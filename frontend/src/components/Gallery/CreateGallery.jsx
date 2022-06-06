//import axios from "axios";
//import React, { useState } from 'react';


// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e.target["Titre"].value);
//     console.log(e.target["Message"].value);
//   }


function CreateGallery() {
  //--------------------------------condition d'envoie de formulaire



  //const [Titre, Message] = useState('');

  function handleSubmit(e) {
      e.preventDefault();

      console.log("---- rajout pour API ----");
      const gallery = [
          {
              gallery_titre: e.target["gallery_titre"].value,
              gallery_media: e.target["gallery_media"].value,
              gallery_texte: e.target["gallery_texte"].value
          }
      ]
      console.log(gallery);
  }

  // const setDataAPI = (e) => {
  //   const gallery = [
  //     {
  //         post_gallery_titretitre: e.target["Titre"].value,
  //         gallery_media: e.target["gallery_media"].value,
  //         gallery_texte: e.target["Message"].value
  //     }
  // ]
  //     console.log(gallery);
  //     axios.post(`https://jsonplaceholder.typicode.com/posts`, {
  //         gallery
  //     })
  // }

  return (
      <div>
    <form className="Bloc_6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Titre" className="Bloc_5">Titre :</label>
        <input type="text" name="gallery_titre" id="gallery_titre " />
      </div>

      <div>
        <label htmlFor="Media" className="Bloc_5" id="gallery_media ">Choisir une image :</label>
        <input type="file" name="gallery_media" id="image" />
      </div>
      
      <div>
        <label htmlFor="description (optionelle)" className="Bloc_5">Message (optionnelle)</label>
        <textarea id="gallery_texte" name="gallery_texte"></textarea>
      </div>

      <button type="submit">Postez votre Message</button>
    </form>
  </div>
  );
}


export default CreateGallery;
