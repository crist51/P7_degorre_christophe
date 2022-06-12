import { useState } from "react";

import ContenueConnect from "../ContenueConnect";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <main className="corp">
      <aside className="bloc_2">
        <button onClick={( ) => setIsOpen(false)}>
          Vous avez un compte passez par ici
        </button>
        <div>
          <h2>Inscrivez-vous</h2>
          <SignIn />
        </div>
      </aside>
      <section className="bloc_1">
        <ContenueConnect />
      </section>
    </main>
  ) : (
    <main className="corp">
      <aside className="bloc_2">
        <button onClick={( ) => setIsOpen(true)}>
          Pas de compte inscrivez-vous
        </button>
        <div>
          <h2>Connection</h2>
          <SignUp />
        </div>
      </aside>
      <section className="bloc_1">
        <ContenueConnect />
      </section>
    </main>
  );
}

export default CorpPost;
