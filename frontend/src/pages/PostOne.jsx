import React from "react";

import ReadOnePost from "../components/Post/ReadOnePost";
import Nav from "../components/Nav";

function PostOne() {
  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/";
  }

  return (
    <main>
      <Nav />
      <div className="corp">
        <ReadOnePost />
      </div>
    </main>
  );
}

export default PostOne;
