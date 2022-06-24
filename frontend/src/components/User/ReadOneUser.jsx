import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";


function PostOne() {
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
        `http://localhost:3000/api/user/${id}`,
        config,
        config
      );
      console.log(result.data.results);
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {data.map((item) => (
        <section className="bloc_1">
          <div className="bloc_titre">
            <h1>
              {item.firstname}
              {item.lastname}
            </h1>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
                <img alt="logo profil" src={item.user_imageUrl || "http://localhost:3000/images/icon.png1655753820253.png"} />
                <div>
                  <dl>
                    <dt>Un mot sur {item.lastname} :</dt>
                    <dd>{item.description || "Non renseigné"}</dd>
                  </dl>
                  <dl>
                    <dt>Ville d'affectation :</dt>
                    <dd>{item.affectation || "Non renseigné"}</dd>
                  </dl>
                  <dl>
                    <dt>Poste :</dt>
                    <dd>{item.poste ||"Non renseigné"}</dd>
                  </dl>
                  <p></p>
                </div>
            </article>
          </div>
        </section>
      ))}
    </Fragment>
  );
}

export default PostOne;
