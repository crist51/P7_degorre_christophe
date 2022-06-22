import { useState } from "react";

import ReadGallery from "./ReadGallery";
import CreateGallery from "./CreateGallery";

function CorpGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Multimedia</h1>
        <button onClick={() => setIsOpen(false)}>
          Femez le formulaire de création de messagge
        </button>
      </div>
      <CreateGallery />
    </section>
  ) : (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Multimedia</h1>
        <button className="post" onClick={() => setIsOpen(true)}>Postez un nouveau messagge</button>
      </div>
      <ReadGallery />
    </section>
  );
}

export default CorpGallery;