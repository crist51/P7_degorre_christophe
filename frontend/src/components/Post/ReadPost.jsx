import axios from "axios";
import React, { Fragment, useState, useEffect } from 'react';

// //---------------------------------------------------

function ReadPost() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setData(result.data);
      console.log(result.data[0]);
    };
    fetchData();
  }, [])//permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener">
        {data.map(item => (
          <article key={item.id}>
            <h2>{item.title}</h2>
            <div>
              <p>{item.body}</p>
              <p>{item.userId}</p>
            </div>
          </article>
        ))}

      </div>
    </Fragment>
  )
}

export default ReadPost;
