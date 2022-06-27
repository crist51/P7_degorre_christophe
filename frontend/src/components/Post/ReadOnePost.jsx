import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function PostOne() {
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
        `http://localhost:3000/api/post/${id}`,
        config,
      );
      setData(result.data.results);
      if (
        result.data.results[0].post_userId == userConnect[0].userId ||
        userConnect[0].admin == 1
      ) {
        //si je suis authentifié j'apparais le btn suprimer
        const sup = document.getElementById("auth")
        sup.textContent = "supprimer"
      }
    };
    fetchData();
  }, []);

  const onDelete = (ca) => {
    const ab = document.getElementById("idAuthor").innerHTML;

    //is userID corespond au Id qui a creer l'objet
    if (ab == userId || userConnect[0].admin == 1) {
      axios.delete(`http://localhost:3000/api/post/${id}`, config).then(() => {
        window.location.href = "http://localhost:3001/post";
      });
    } else {
      window.location.href = "http://localhost:3001/post";
    };
  };

  return (
    <Fragment>
      {data.map((item) => (
        <section className="bloc_1">
          <div className="bloc_titre">
            <h1>{item.post_titre}</h1>
            <p className="user_imgUrl" id="idAuthor">{item.post_userId}</p>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
              <p>{item.post_contenue}</p>
              <p className="author">{item.post_author}</p>
            </article>
            {/* <div className="avis">
              <button>commentaire</button>
              <div>
                <button id="like"><i class="fa-solid fa-thumbs-up"></i></button>
                <button><i class="fa-solid fa-thumbs-down"></i></button>
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

export default PostOne;
