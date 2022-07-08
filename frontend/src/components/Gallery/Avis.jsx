import React, { Fragment, useState, useEffect } from "react";
import FormComment from "./FomComment";
import ReadComment from "./ReadComment";



function Avis() {
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <>
            <div className="avis">
                <button onClick={() => setIsOpen(false)}>Voir les commentaires</button>
                <div>
                    <button id="like"><i class="fa-solid fa-thumbs-up"></i></button>
                    <button><i class="fa-solid fa-thumbs-down"></i></button>
                </div>
            </div>
            <FormComment />
        </>

    ) : (
        <>
            <div className="avis">
                <button onClick={() => setIsOpen(true)}>Poster un commentaire</button>
                <div>
                    <button id="like"><i class="fa-solid fa-thumbs-up"></i></button>
                    <button><i class="fa-solid fa-thumbs-down"></i></button>
                </div>
            </div>
            <ReadComment/>
        </>
    )
}

export default Avis;
