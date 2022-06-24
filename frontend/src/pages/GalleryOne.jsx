import React from "react";

import ReadOneGallery from "../components/Gallery/ReadOneGallery";
import Nav from "../components/Nav";

function GalleryOne() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <ReadOneGallery />
      </div>
    </main>
  );
}

export default GalleryOne;
