import React from "react";

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
        <CorpPost />
      </div>
    </main>
  );
}

export default Post;
