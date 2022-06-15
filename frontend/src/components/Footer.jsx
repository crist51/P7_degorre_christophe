import React from "react";

// import Mailto from 'react-mailto';

function Footer() {
  return (
    <>
      <footer>
        <button onClick={() => window.location = 'aUpdate@gmail.com'}>📧 Contacter un administateur 📧</button>
        <h2>Groupomania ensemble dans une nouvelle aire</h2>
      </footer>
    </>
  );
}

export default Footer;
