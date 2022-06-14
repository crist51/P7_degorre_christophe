import { useState } from "react";

import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h2>Compte</h2>
        <button onClick={() => setIsOpen(false)}>
          Liste des utilisateur
        </button>
      </div>
      <ReadUser />
    </section>
  ) : (
    <section id="bloc_1" className="bloc_1">
      <div className="bloc_titre">
        <h2>Compte</h2>
        <button onClick={() => setIsOpen(true)}>modification de votre compte</button>
      </div>
      <UpdateUser />
    </section>
  );
}

export default CorpPost;
