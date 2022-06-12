import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

// //---------------------------------------------------

function ReadGallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/api/gallery");
      setData(result.data.results);
    };

    fetchData();
  }, []); //permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener_Gallery">
        {data.map((item) => (
          <article key={item.gallery_id}>
            <p>
              <img src={item.gallery_media} alt=""></img>
            </p>
            <div>
              <h2>{item.gallery_titre}</h2>
              <p>{item.gallery_texte}</p>
            </div>
          </article>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadGallery;
