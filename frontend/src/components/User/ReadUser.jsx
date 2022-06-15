import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/moi.jpg";

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
      setData(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="Bloc_1Contener bloc_img">
        {data.map((item) => (
          <Link to={"oneUser/?id=" + item.userId}>
            <article>
              <h2>
                {item.firstname} {item.lastname}
              </h2>
              <img alt="logo profil" src={logo} />
            </article>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadUser;