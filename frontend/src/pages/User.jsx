// route Profil

import React from "react";

import MyUser from "../components/User/MyUser";
import Nav from "../components/Nav";
import CorpUser from "../components/User/CorpUser";

function User() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <CorpUser />
      </div>
    </main>
  );
}

export default User;
