import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

// //---------------------------------------------------

function ReadPost() {
  const [data, setData] = useState([]);

  let userConnect = JSON.parse(localStorage.getItem("key"));
  const validToken = userConnect[0].token;

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/post`,config);
      // console.log(result.data.results);
       setData(result.data.results);

    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="Bloc_1Contener">
        {data.map((item) => (
          
          <article key={item.post_id}>
            <h2>{item.post_titre}</h2>
            <div>
              <p>{item.post_contenue}</p>
              <p>{item.post_author}</p>
            </div>
          </article>
          
        ))}
      </div>
    </Fragment>
  );
}

export default ReadPost;
