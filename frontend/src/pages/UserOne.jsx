import React from "react";

import MyUser from "../components/User/MyUser";
import ReadOneUser from "../components/User/ReadOneUser";
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
        <ReadOneUser />
      </div>
    </main>
  );
}

export default Post;
