import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function PostOne() {
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
        `http://localhost:3000/api/post/${id}`,
        config,
      );
      setData(result.data.results);
      if (
        result.data.results[0].post_userId == userConnect[0].userId ||
        userConnect[0].admin == 1
      ) {
        console.log("j'ai le droit de suppimer");
      } else {
        console.log("je suis un looser");
      }
    };
    fetchData();
  }, []);

  const onDelete = (e) => {

    axios.delete(`http://localhost:3000/api/post/${id}`, config).then(() => {
      console.log("post supprimer");
      window.location.href = "http://localhost:3001";
    });
  };

  return (
    <Fragment>
      {data.map((item) => (
        <section className="bloc_1">
          <div className="bloc_titre">
            <h1>{item.post_titre}</h1>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
              <p>{item.post_contenue}</p>
              <p className="author">{item.post_author}</p>
            </article>
            <div className="avis">
              <button>commentaire</button>
              <div>
                <button><i class="fa-solid fa-thumbs-up"></i></button>
                <button><i class="fa-solid fa-thumbs-down"></i></button>
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

export default PostOne;
