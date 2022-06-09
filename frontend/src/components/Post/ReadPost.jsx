import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

// //---------------------------------------------------

function ReadPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/api/post");
      console.log(result);
      setData(result.data.results);
      //'https://jsonplaceholder.typicode.com/posts',
      // console.log(result.data);
    };
    fetchData();
  }, []); //permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      <div className="Bloc_1Contener">
        {data.map((item) => (
          <article key={item.post_id}>
            <h2>{item.post_titre}</h2>
            <div>
              <p>{item.post_contenue}</p>
              <p>{item.post_userId}</p>
            </div>
          </article>
          // <article key={item.id}>
          //   <h2>{item.title}</h2>
          //   <div>
          //     <p>{item.body}</p>
          //     <p>{item.userId}</p>
          //   </div>
          // </article>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadPost;
