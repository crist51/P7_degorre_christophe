import React from "react";

import Aside from "../components/Aside";
import ReadOnePost from "../components/Post/ReadOnePost";
import Nav from "../components/Nav";

function Post() {

  if (localStorage.length === 0) {
    window.location.href = "http://localhost:3001/acceuil/"  
    }
    
  return (
    <div>
      <main>
        <Nav />
        <div className="corp">
          <Aside />
          <ReadOnePost />
        </div>
      </main>
    </div>
  );
}

export default Post;
