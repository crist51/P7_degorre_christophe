import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const deconect = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "http://localhost:3001/acceuil/";
  };

  return (
    // <div>
    <>
      <nav className="navPrincipal">
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/post">Post </Link>
          </li>
          <li>
            <Link to="/multimedia">Multimedia</Link>
          </li>
          <li>
            <Link to="/user/">Compte </Link>
          </li>
          <li onClick={deconect}>
            <Link to="/acceuil/">Deconexion</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
