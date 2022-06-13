// route Arrivée apres la conexion

import React from "react";

import Nav from "../components/Nav";

import Aside from "../components/Aside";
import Recomendation from "../components/Recomendation";
import ContenueConnect from "../components/ContenueConnect";

function Home() {
  
  if (localStorage.length == 0) {
  window.location.href = "http://localhost:3001/acceuil/"  
  }
  

  return (
    <div>
      <main>
          <Nav />
          <div className="corp">
        <Aside />

        <section className="bloc_1">
          <ContenueConnect />
          <div className="bloc_1_home">
            <Recomendation />
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
