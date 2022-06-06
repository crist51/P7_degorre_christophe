import { useState } from "react";

import ReadGallery from "./Gallery/ReadGallery";
import CreateGallery from "./Gallery/CreateGallery";

function CorpGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section id="bloc_1" className="bloc_1">
      <div className="bloc_titre">
        <h2>Multimedia</h2>
        <button onClick={() => setIsOpen(false)}>
          Femez le formulaire de création de messagge
        </button>
      </div>
      <CreateGallery />
    </section>
  ) : (
    <section id="bloc_1" className="bloc_1">
      <div className="bloc_titre">
        <h2>Multimedia</h2>
        <button onClick={() => setIsOpen(true)}>
          Postez un nouveau messagge
        </button>
      </div>
      <ReadGallery />
    </section>
  );
}

export default CorpGallery;
