import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";


function ReadUser() {
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
      const result = await axios(`http://localhost:3000/api/user`, config);
      // console.log(result.data.results);
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="Bloc_1Contener">
        {data.map((item) => (
            // <Link to={"/" + item.post_id}>
              <article>
                <h2>{item.firstname}</h2>
                <div>
                  <p>{item.lastname}</p>
                  <p>{item.city}</p>
                </div>
                <p>{item.description}</p>
              </article>
        ))}
        </div>
    </Fragment>
  );
}

export default ReadUser