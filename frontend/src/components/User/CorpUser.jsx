import { useState } from "react";

import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h2>Parametre du compte</h2>
        <button onClick={() => setIsOpen(false)}>Liste des utilisateur</button>
      </div>
      <UpdateUser />
    </section>
  ) : (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h2>Liste des utilisateur</h2>
        <button onClick={() => setIsOpen(true)}>
          modification de votre compte
        </button>
      </div>
      <ReadUser />
    </section>
  );
}

export default CorpPost;
