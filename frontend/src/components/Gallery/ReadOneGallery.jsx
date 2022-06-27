import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function GalleryOne() {
  //recuperation de search param
  var str = window.location.href;
  var url = new URL(str);
  var id = url.searchParams.get("id");

  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const userId = userConnect[0].userId;
  const validToken = userConnect[0].token;

  const [data, setData] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + validToken,
    },
  };

  let messageBTN = "retour";


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/api/gallery/${id}`,
        config,
      );
      setData(result.data.results);
      if (
        result.data.results[0].gallery_userId == userConnect[0].userId ||
        userConnect[0].admin === 1
      ) {
        //si je suis authentifié j'apparais le btn suprimer
        const sup = document.getElementById("auth")
        sup.textContent = "supprimer"
      }
    };
    fetchData();
  }, []);

  const onDelete = (e) => {
    const ab = document.getElementById("idAuthor").innerHTML;

    //is userID corespond au Id qui a creer l'objet
    if (ab == userId || userConnect[0].admin === 1) {
      axios.delete(`http://localhost:3000/api/gallery/${id}`, config).then(() => {
        window.location.href = "http://localhost:3001/multimedia";
      });

    } else {
      window.location.href = "http://localhost:3001/multimedia";
    };
  };

  return (
    <Fragment>
      {data.map((item) => (
        <section className="bloc_1">
          <div className="bloc_titre">
            <h1>{item.gallery_titre}</h1>
            <p className="user_imgUrl" id="idAuthor">{item.gallery_userId}</p>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
              <img alt="post multimedia" src={item.gallery_media || "http://localhost:3000/images/icon.png1655753820253.png"} />
              <div>
                <p>{item.gallery_texte || "pas de description"}</p>
                <p className="author">{item.gallery_author}</p>
              </div>
            </article>
            {/* <div className="avis">
              <button>Commentaire</button>
              <div>
                <button><i class="fa-solid fa-thumbs-up"></i>1</button>
                <button><i class="fa-solid fa-thumbs-down"></i>0</button>
              </div>
            </div> */}

            <button id="auth" type="submit" onClick={() => onDelete(data.id)}>
              {messageBTN}
            </button>
          </div>
        </section>
      ))}
    </Fragment>
  );
}

export default GalleryOne;
