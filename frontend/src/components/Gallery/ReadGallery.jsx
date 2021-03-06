import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      const result = await axios("http://localhost:3000/api/gallery", config)
      setData(result.data.results);
    };

    fetchData();
  }, []); //permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener bloc_img">
        {data.map((item) => (
          <div key={item.gallery_id}>
          <Link to={"oneGallery/?id=" + item.gallery_id} title={"lien vers post multimedia : "+ item.gallery_titre}>
            <article className="article_img">
              <h2>{item.gallery_titre}</h2>
              <img alt="post multimedia" src={item.gallery_media ||"http://localhost:3000/images/icon.png1655753820253.png"} />
            </article>
          </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadGallery;
