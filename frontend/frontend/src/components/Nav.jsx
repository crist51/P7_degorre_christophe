import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
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
                        <li>Deconexion</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Nav

