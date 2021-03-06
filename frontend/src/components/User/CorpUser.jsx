import { useState } from "react";

import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Parametre du compte</h1>
        <button onClick={() => setIsOpen(false)}>Liste des utilisateurs</button>
      </div>
      <UpdateUser />
    </section>
  ) : (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Liste des utilisateurs</h1>
        <button onClick={() => setIsOpen(true)}>
          modification de votre compte
        </button>
      </div>
      <ReadUser />
    </section>
  );
}

export default CorpPost;
