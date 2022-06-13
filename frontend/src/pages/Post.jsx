// route Post

import React from "react";

import Aside from "../components/Aside";
//import CreatePost from '../components/Post/CreatePost';
import CorpPost from "../components//Post/CorpPost";
import Nav from "../components/Nav";

function Post() {

  if (localStorage.length == 0) {
    window.location.href = "http://localhost:3001/acceuil/"  
    }
    
  return (
    <div>
      <main>
        <Nav />
        <div className="corp">
          <Aside />
          <CorpPost />
        </div>
      </main>
    </div>
  );
}

export default Post;
