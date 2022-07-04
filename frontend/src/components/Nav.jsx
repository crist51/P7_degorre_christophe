import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const deconect = (e) => {
    e.preventDefault();
    localStorage.clear();
  };

  return (
    // <div>
    <>
      <nav className="navPrincipal">
        <ul>
          <li>
            <Link to="/" title="Lien vers : Acceuil">
              <i class="fa-solid fa-house"></i><span>Acceuil</span>
            </Link>
          </li>
          <li>
            <Link to="/post" title="Lien vers : Post">
              <i class="fa-solid fa-file-lines"></i><span>Post</span>
            </Link>
          </li>
          <li>
            <Link to="/multimedia" title="Lien vers : Multimedia">
              <i class="fa-solid fa-images"></i><span>Multimedia</span>
            </Link>
          </li>
          <li>
            <Link to="/user" title="Lien vers : Liste des comptes">
              <i class="fa-solid fa-people-roof"></i><span>Liste des comptes</span>
            </Link>
          </li>
          <li>
            <Link to="/myuser" title="Lien vers : Mon compte">
              <i class="fa-solid fa-user"></i><span>Mon compte</span>
            </Link>
          </li>
          <li onClick={deconect}>
            <Link to="/acceuil/" title="Lien vers : Deconexion">
              <i class="fa-solid fa-person-walking-arrow-right"></i><span>Deconexion</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}




export default Nav;