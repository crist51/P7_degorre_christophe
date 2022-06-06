import axios from "axios";
//import React, { useState } from 'react';


// function handleSubmit(e) {
//     e.preventDefault();
//     console.log(e.target["Titre"].value);
//     console.log(e.target["Message"].value);
//   }


function CreatePost() {
  //--------------------------------condition d'envoie de formulaire



  //const [Titre, Message] = useState('');

//   function handleSubmit(e) {
//       e.preventDefault();

     // console.log("---- rajout pour API ----");
    //   const post = [
    //       {
    //           post_titre: e.target["Titre"].value,
    //           post_contenue: e.target["Message"].value
    //       }
    //   ]
    
    //  console.log(post);
  //}

  const setDataAPI = (e) => {
      const post = [
          {
              title: e.target["Titre"].value,
              body: e.target["Message"].value
          }
      ]
       console.log("---- rajout pour API ----");

      console.log(post);
      axios.post(`https://jsonplaceholder.typicode.com/posts`, {
          post
      })
  }

  return (
      <div className="Bloc_1Contener_Gallery">
          <form className="Bloc_6" onSubmit={setDataAPI}>{/*setDataAPI handleSubmit*/}
              <div>
                  <label htmlFor="titre" className="Bloc_5">Titres</label>
                  <input type="text" name="Titre" id="post_titre" />
              </div>
              <div>
                  <label htmlFor="message" className="Bloc_5">Message</label>
                  <textarea id="post_contenue" name="Message"></textarea>
              </div>
              <button type="submit">Postez votre Message</button>
          </form>
      </div>
  );
}


export default CreatePost;
