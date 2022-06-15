import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/moi.jpg";

// //---------------------------------------------------

function ReadGallery() {
  const [data, setData] = useState([]);
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const validToken = userConnect[0].token;

  
  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    const fetchData = async () => {
      const result = await axios("http://localhost:3000/api/gallery", config);
      setData(result.data.results);
      console.log(result.data.results);
    };

    fetchData();
  }, []); //permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener bloc_img">
        {data.map((item) => (
          <Link to={"onemultimedia/?id=" + item.gallery_id}>
            <article>
              <h2>{item.gallery_titre}</h2>
              <img alt="logo profil" src={logo} />
            </article>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadGallery;
