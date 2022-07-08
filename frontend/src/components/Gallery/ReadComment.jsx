import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function ReadComment() {
    //recuperation de search param
    var str = window.location.href;
    var url = new URL(str);
    var id = url.searchParams.get("id");

    // ---------- on recupere id du user ---------- //
    let userConnect = JSON.parse(localStorage.getItem("auth"));
    const validToken = userConnect[0].token;

    const [data, setData] = useState([]);

    let config = {
        headers: {
            Authorization: "Bearer " + validToken,
        },
    };


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:3000/api/gallery/${id}`,
                config,
            );
            const comments = JSON.parse(result.data.results[0].comments)
            if (comments == null) {
                const comments =
                [{ userId:"#", commentaire:"Pas de commentaire",commentaireAuthor:""}]
                console.log(comments);
                console.log("j'affiche comm default");
            }else{
                console.log(comments);
                setData(comments)
                console.log(comments);
            }
        };
        fetchData();
    }, []);
    return (
        <Fragment>
            {data.map((item) => (
                <div className="comments">
                    <p>{item.commentaire}</p>
                    <Link to={"/author/?id=" + item.userId} title="Lien vers : l'autheur du commentaire">
                        <p>{item.commentaireAuthor + " à " + item.commentaireDate}</p>
                    </Link>
                </div>
            ))}
        </Fragment>
    );
}

export default ReadComment;
