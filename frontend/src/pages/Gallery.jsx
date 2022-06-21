import React from "react";

import MyUser from "../components/User/MyUser";
import CorpGallery from "../components/Gallery/CorpGallery";
import Nav from "../components/Nav";

function Gallery() {
  if (localStorage.length == 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <MyUser />
        <CorpGallery />
      </div>
    </main>
  );
}

export default Gallery;


//class corp a ete supprime