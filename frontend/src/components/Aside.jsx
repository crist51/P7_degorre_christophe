import logo from "../assets/images/moi.jpg";

import { Link } from "react-router-dom";
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

// //---------------------------------------------------

function Aside() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const id = userConnect[0].userId;
  const validToken = userConnect[0].token;

  const [data, setData] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: "Bearer " + validToken,
      },
    };

    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/api/user/${id}`,
        config
      );
      // console.log(result.data.results);
      setData(result.data.results);
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <aside className="bloc_2">
        {data.map((item) => (
          <div key={item.userId}>
            <img alt="logo profil" src={logo} />
            <div>
              <ul>
                <li>
                  <span>{item.lastname}</span> {item.firstname}
                </li>
                <li>description : {item.description}</li>
              </ul>
              <Link to="/user">
                <p>Modifié votre profil</p>
              </Link>
            </div>
          </div>
        ))}
      </aside>
    </Fragment>
  );
}

export default Aside;
