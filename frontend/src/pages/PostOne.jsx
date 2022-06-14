// route Post

import React from "react";

import Nav from "../components/Nav";

function PostOne() {

  //recuperation id
var str = window.location.href
console.log(str);
var url = new URL(str);
var id = url.searchParams.get("id")
console.log(id);
    
  return (
    <div>
      <main>
        <Nav />
        <div className="corp">
          <h1>test</h1>
        </div>
      </main>
    </div>
  );
}

export default PostOne;
