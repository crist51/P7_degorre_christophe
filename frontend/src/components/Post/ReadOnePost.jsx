import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

function PostOne() {
  //recuperation de search param
  var str = window.location.href;
  var url = new URL(str);
  var id = url.searchParams.get("id");

  // ---------- on recupere id du user ---------- //
  let userConnect = JSON.parse(localStorage.getItem("auth"));
  //const userId = userConnect[0].userId;
  const validToken = userConnect[0].token;

  const [data, setData] = useState([]);

  let config = {
    headers: {
      Authorization: "Bearer " + validToken,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:3000/api/post/${id}`,config,
        config
      );
      setData(result.data.results);
      if (result.data.results[0].post_userId==userConnect[0].userId ||userConnect[0].admin ==1) {
        console.log("j'ai le droit de suppimer");
      }else{
        console.log("je suis un looser");
      }
    };
    fetchData();
  }, []);
  
  const onDelete = (e) => {
    axios.delete(`http://localhost:3000/api/post/${id}`,config)
    .then (() => {
      console.log("post supprimer");
      window.location.href = "http://localhost:3001/post/"
    })
  }
  


  return (
    <Fragment>
      {/* <posteOneRoute /> */}
      {/* //{ata.map((data => (<Link to={'post/' + item.post_id} />)} */}
      <div className="Bloc_1Contener">
        {data.map((item) => (
          <article>
            <h2>{item.post_titre}</h2>
            <div>
              <p>{item.post_contenue}</p>
              <p>{item.post_author}</p>
            </div>
          </article>
        ))}
        <button type="submit" onClick={() => onDelete(data.id)}>
          supprimer
        </button>
      </div>
    </Fragment>
  );
}

export default PostOne;
