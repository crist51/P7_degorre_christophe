import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function GalleryOne() {
  //recuperation de search param
  var str = window.location.href;
  var url = new URL(str);
  var id = url.searchParams.get("id");

  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  //const userId = userConnect[0].userId;
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
      setData(result.data.results);
      if (
        result.data.results[0].gallery_userId === userConnect[0].userId ||
        userConnect[0].admin === 1
      ) {
        console.log("j'ai le droit de suppimer");
      } else {
        console.log("je suis un looser");
      }
    };
    fetchData();
  }, []);

  const onDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/api/gallery/${id}`, config).then(() => {
      console.log("multimedia supprimer");
      window.location.href = "http://localhost:3001";
    });
  };

  return (
    <Fragment>
      {data.map((item) => (
        <section className="bloc_1">
          <div className="bloc_titre">
            <h1>{item.gallery_titre}</h1>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
              <img alt="post multimedia" src={item.gallery_media} />
              <div>
                <p>{item.gallery_contenue || "pas de description"}</p>
                <p className="author">{item.gallery_author}</p>
              </div>
            </article>
            <div className="avis">
              <button>Commentaire</button>
              <div>
                <button><i class="fa-solid fa-thumbs-up"></i>1</button>
                <button><i class="fa-solid fa-thumbs-down"></i>0</button>
              </div>
            </div>

            <button type="submit" onClick={() => onDelete(data.id)}>
              supprimer
            </button>
          </div>
        </section>
      ))}
    </Fragment>
  );
}

export default GalleryOne;
