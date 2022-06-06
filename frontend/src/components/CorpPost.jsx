import { useState } from "react";

import ReadPost from "./Post/ReadPost";
import CreatePost from "./Post/CreatePost";

function CorpPost() {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <section id="bloc_1" className="bloc_1">
      <div className="bloc_titre">
        <h2>Post</h2>
        <button onClick={() => setIsOpen(false)}>
          Femez le formulaire de création de messagge
        </button>
      </div>
      <CreatePost />
    </section>
  ) : (
    <section id="bloc_1" className="bloc_1">
      <div className="bloc_titre">
        <h2>Post</h2>
        <button onClick={() => setIsOpen(true)}>Postez un nouveau post</button>
      </div>
      <ReadPost />
    </section>
  );
}

export default CorpPost;
