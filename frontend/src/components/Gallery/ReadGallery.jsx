import axios from "axios";
import React, { Fragment, useState, useEffect } from 'react';

// //---------------------------------------------------

function ReadGallery() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/photos',
      );
      setData(result.data);
    };

    fetchData();
  }, [])//permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener_Gallery">
        {data.map(item => (
          <article key={item.id}>
            <p><img src={item.thumbnailUrl} alt=""></img></p>
            <div>
              <h2>{item.title}</h2>
              <p>{item.albumId}</p>
            </div>
          </article>
        ))}

      </div>
    </Fragment>
  )
}

export default ReadGallery;
