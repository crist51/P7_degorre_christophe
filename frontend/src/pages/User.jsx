// route Profil

import React from 'react'

import Nav from "../components/Nav";
import Aside from '../components/Aside';
import CorpUser from '../components/User/CorpUser';

function User() {
    return (
        <div>
            <main>
            <Nav />
            <div className="corp">
                <Aside />
                <CorpUser />
            </div>
            </main>
        </div>
    )
}

export default User;
