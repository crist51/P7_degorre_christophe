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
            <Link to="/">
              <i class="fa-solid fa-house"></i><span>Acceuil</span>
            </Link>
          </li>
          <li>
            <Link to="/post">
              <i class="fa-solid fa-file-lines"></i><span>Post</span>
            </Link>
          </li>
          <li>
            <Link to="/multimedia">
              <i class="fa-solid fa-images"></i><span>Multimedia</span>
            </Link>
          </li>
          <li>
            <Link to="/user">
              <i class="fa-solid fa-people-roof"></i><span>Liste des comptes</span>
            </Link>
          </li>
          <li>
            <Link to="/myuser">
              <i class="fa-solid fa-user"></i><span>Mon compte</span>
            </Link>
          </li>
          <li onClick={deconect}>
            <Link to="/acceuil/">
              <i class="fa-solid fa-person-walking-arrow-right"></i><span>Deconexion</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}




export default Nav;