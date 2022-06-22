import React from "react";

import MyUser from "../components/User/MyUser";
import CorpPost from "../components//Post/CorpPost";
import Nav from "../components/Nav";

function Post() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
        <div className="corp">
        {/* <MyUser /> */}
        <CorpPost />
      </div>
    </main>
  );
}

export default Post;
