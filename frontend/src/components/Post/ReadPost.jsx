import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import posteOneRoute from "./posteOneRoute";



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
      const result = await axios(`http://localhost:3000/api/post`, config);
      // console.log(result.data.results);
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {/* <posteOneRoute /> */}
      {/* //{ata.map((data => (<Link to={'post/' + item.post_id} />)} */}
      <div className="Bloc_1Contener">
        {data.map((item) => (
            <Link to={"" + item.post_id}>
              <article>
                <h2>{item.post_titre}</h2>
                <div>
                  <p>{item.post_contenue}</p>
                  <p>{item.post_author}</p>
                </div>
              </article>
            </Link>
        ))}
        </div>
    </Fragment>
  );
}

export default ReadPost;

{
  /* <Link to="/acceuil/">
<li onClick={deconect}>Deconexion</li>
</Link> */
}
