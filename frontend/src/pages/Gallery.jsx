//route Gallery

import React from "react";

import Aside from "../components/Aside";
import CorpGallery from "../components/Gallery/CorpGallery";
import Nav from "../components/Nav";

function Gallery() {

  if (localStorage.length == 0) {
    window.location.href = "http://localhost:3001/acceuil/"  
    }

  return (
    <div>
      <main>
        <Nav />
        <div className="corp">
          <Aside />
          <CorpGallery />
        </div>
      </main>
    </div>
  );
}

export default Gallery;
