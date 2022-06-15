import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import logo from "../../assets/images/moi.jpg";

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
      setData(result.data.results);
      console.log(result.data.results);
      console.log("valleur null");
      if (result.data.results[0].city==null) {
        result.data.results[0].city="non défini"
      };
      if (result.data.results[0].description==null) {
        result.data.results[0].description="non défini"
      };
      if (result.data.results[0].user_imageUrl==null) {
        result.data.results[0].user_imageUrl=logo
      };
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <section className="bloc_1">
        <div className="bloc_titre">
          <h2>Post</h2>
        </div>
        <div className="Bloc_1Contener">
          {data.map((item) => (
            <article className="">
              <h2>
                {item.firstname}
                {item.lastname}
              </h2>
              <div className="bloc_oneImg">
                <img alt="logo profil" src={item.user_imageUrl} />
                <div>
                  <dl>
                    <dt>Un mot sur {item.lastname}</dt>
                    <dd>{item.description}</dd>
                    <dt>ville </dt>
                    <dd>{item.city}</dd>
                  </dl>
                  <p></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default PostOne;
