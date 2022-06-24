import React from "react";

import Nav from "../components/Nav";
import CorpMyUser from "../components/User/CorpMyUser";

function User() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <CorpMyUser />
      </div>
    </main>
  );
}

export default User;
