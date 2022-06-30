import { useState } from "react";

import ContenueConnect from "../ContenueConnect";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="corp">
      <aside className="bloc_2">
        <button onClick={( ) => setIsOpen(false)}>
        Pas de compte? inscrivez-vous !!
        </button>
        <div>
          <h2>Connection</h2>
          <SignIn />
        </div>
      </aside>
      <section className="bloc_1">
        <ContenueConnect />
      </section>
    </div>
  ) : (
    <main className="corp">
      <aside className="bloc_2">
        <button onClick={( ) => setIsOpen(true)}>
          Vous avez déja un compte? Connectez-vous !!
        </button>
        <div>
          <h2>Inscrivez-vous</h2>
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
