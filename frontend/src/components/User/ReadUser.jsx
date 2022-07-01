import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"oneUser/?id=" + item.userId}  title={"lien vers fiche : "+ item.firstname +" "+ item.lastname}>
            <article className="article_img">
              <h2>
                {item.firstname} {item.lastname}
              </h2>
              <img alt="image_profil" src={item.user_imageUrl ||"http://localhost:3000/images/icon.png1655753820253.png"} />
            </article>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default ReadUser;