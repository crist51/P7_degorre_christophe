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
          <h2>                {item.firstname}
                {item.lastname}</h2>
        </div>
        <div className="Bloc_1Contener">
            <article className="">

              <div className="bloc_oneImg">
                <img alt="logo profil" src={item.user_imageUrl} />
                <div>
                  <dl>
                    <dt>Un mot sur {item.lastname} :</dt>
                    <dd>{item.description ||"Pas d'information"}</dd>
                  </dl>
                  <dl>
                    <dt>Affectation :</dt>
                    <dd>{item.affectation ||"Non comuniqué"}</dd>
                  </dl>
                  <dl>
                    <dt>Poste :</dt>
                    <dd>{item.poste ||"Non comuniqué"}</dd>
                  </dl>
                  <p></p>
                </div>
              </div>
            </article>
        </div>
      </section>
          ))}
    </Fragment>
  );
}

export default PostOne;
