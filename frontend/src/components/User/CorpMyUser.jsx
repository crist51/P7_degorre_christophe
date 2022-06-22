import { useState } from "react";

import MyUser from "./MyUser";
import UpdateUser from "./UpdateUser";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Mon Compte</h1>
        <button onClick={() => setIsOpen(false)}>Retour a votre compte, pensez à sauvegarder</button>
      </div>
      <UpdateUser />
    </section>
  ) : (
    <section className="bloc_1">
      <div className="bloc_titre">
        <h1>Mon Compte</h1>
        <button onClick={() => setIsOpen(true)}>
          modification de votre compte
        </button>
      </div>
      <MyUser />
    </section>
  );
}

export default CorpPost;
