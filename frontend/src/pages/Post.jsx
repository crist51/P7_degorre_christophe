// route Post

import React from "react";

import Aside from "../components/Aside";
//import CreatePost from '../components/Post/CreatePost';
import CorpPost from "../components/CorpPost";
import Nav from "../components/Nav";

function Post() {
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
