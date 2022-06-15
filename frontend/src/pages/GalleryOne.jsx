import React from "react";

import MyUser from "../components/User/MyUser";
import ReadOnePost from "../components/Post/ReadOnePost";
import Nav from "../components/Nav";

function Post() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <MyUser />
        <ReadOnePost />
      </div>
    </main>
  );
}

export default Post;
