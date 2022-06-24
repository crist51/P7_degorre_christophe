import React from "react";

import Nav from "../components/Nav";

import Recomendation from "../components/Recomendation";
import ContenueConnect from "../components/ContenueConnect";

function Home() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <section className="bloc_1">
          <ContenueConnect />
          <div className="bloc_1_home">
            <Recomendation />
          </div>
        </section>
        </div>
    </main>
  );
}

export default Home;
