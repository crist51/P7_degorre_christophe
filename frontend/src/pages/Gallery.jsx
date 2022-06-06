//route Gallery

import React from "react";

import Aside from "../components/Aside";
import CorpGallery from "../components/CorpGallery";
import Nav from "../components/Nav";

function Gallery() {
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
