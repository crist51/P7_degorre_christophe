import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    const deconect = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "http://localhost:3001/acceuil/"
    }

    return (
        // <div>
        <>
            <nav className='navPrincipal'>
                <ul>
                    <Link to="/">
                        <li>Acceuil</li>
                    </Link>
                    <Link to="/post">
                        <li>Post</li>
                    </Link>
                    <Link to="/multimedia">
                        <li>Multimedia</li>
                    </Link>
                    <Link to="/acceuil/">
                        <li onClick={deconect}>Deconexion</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav

