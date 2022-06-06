import logo from "../assets/images/moi.jpg";

import { Link } from 'react-router-dom';
import axios from "axios";
import React, { Fragment, useState, useEffect } from 'react';

// //---------------------------------------------------

function Aside() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      //setData(result.data);
      setData(result.data[0]);
      console.log(result.data);
      console.log(result.data[0]);
    };

    fetchData();
  }, [])//permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>


      <aside className="bloc_2">


        <div>
          <img alt="logo profil" src={logo} />
          <div>
            <ul>
              <li>
                <span>{data.name}</span>  {data.username}
              </li>
              <li>email : {data.email}</li>
            </ul>
            <Link to="/user">
              <p>Modifié votre profil</p>
            </Link>
          </div>
        </div>

      </aside>
    </Fragment>
  )
}

export default Aside;