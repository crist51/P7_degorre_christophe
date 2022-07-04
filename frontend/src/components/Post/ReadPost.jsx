import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import posteOneRoute from "./posteOneRoute";



// //---------------------------------------------------

function ReadPost() {
  const [data, setData] = useState([]);

  let userConnect = JSON.parse(localStorage.getItem("auth"));
  
  useEffect(() => {
    const validToken = userConnect[0].token;
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/post`, config);
      setData(result.data.results);
    };
    fetchData();
    
  }, []);
  
  return (
    <Fragment>
      <div className="Bloc_1Contener">
        {data.map((item) => (
            <Link to={"onePost/?id=" + item.post_id} title={"lient vers post : " + item.post_titre}>
              <article>
                <h2>{item.post_titre}</h2>
                  <p className="author">{item.post_author}</p>
              </article>
            </Link>
        ))}
        </div>
    </Fragment>
  );
}

export default ReadPost;