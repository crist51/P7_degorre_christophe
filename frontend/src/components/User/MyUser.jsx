import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import logo from '../../assets/logo/icon.png';

function MyUser() {
  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  const validToken = userConnect[0].token;
  const id = userConnect[0].userId

  const [data, setData] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + validToken,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/api/user/${id}`,
        config,
        config
      );
      setData(result.data.results);
    };
    fetchData();
  }, []);


  

  const onDelete = (e) => {
    axios.delete(`http://localhost:3000/api/user/${id}`, config).then(() => {
      localStorage.clear();
      window.location.href = "http://localhost:3001/acceuil/";
    });
  };

  return (
    <Fragment>
      {data.map((item) => (
        <>
          <div className="bloc_titre">
            <h2>
              {item.firstname} {item.lastname}
            </h2>
          </div>
          <div className="Bloc_1Contener bloc1_img">
            <article>
                <img alt="logo profil" src={item.user_imageUrl || logo } />
                <div>
                  <dl>
                    <dt>Un mot sur {item.lastname} :</dt>
                    <dd>{item.description || "Non renseigné"}</dd>
                  </dl>
                  <dl>
                    <dt>Ville d'affectation :</dt>
                    <dd>{item.affectation || "Non renseigné"}</dd>
                  </dl>
                  <dl>
                    <dt>Poste :</dt>
                    <dd>{item.poste || "Non renseigné"}</dd>
                  </dl>
                  <p></p>
                </div>
            </article>
          </div>

          <button type="submit" onClick={() => onDelete(data.id)}>
          supprimer votre compte
        </button>

          
        </>
      ))}
    </Fragment>
  );
}

export default MyUser;
