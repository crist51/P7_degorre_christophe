import logo from "../assets/images/moi.jpg";

import { Link } from "react-router-dom";
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

// //---------------------------------------------------

function Aside() {
  const [data, setData] = useState([]);

  const id = 37;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/api/user/${id}`);
      //setData(result.data);
      setData(result.data.results);
      console.log(result.data.results);
    };

    fetchData();
  }, []); //permet d'arreter le rappelle a l'API infini

  return (
    <Fragment>
      {/* <aside className="bloc_2">
        <div>
          <img alt="logo profil" src={logo} />
          <div>
            <ul>
              <li>
                <span>{item.lastname}</span> {item.firstname}
              </li>
              <li>email : {item.email}</li>
            </ul>
           
          </div>
        </div>
      </aside> */}
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

// <div className="Bloc_1Contener">
//         {data.map((item) => (
//<aside className="bloc_2">
// <div>
//<img alt="logo profil" src={logo} />
//<div>
{
  /* <ul>
<li>
  <span>{item.lastname}</span> {item.firstname}
</li>
<li>email : {item.email}</li>
</ul> */
}
//</div>
//</aside>
//         ))}
//       </div>
