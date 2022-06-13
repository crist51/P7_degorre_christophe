import React from "react";

import {
  BrowserRouter as Router /*, Switch*/,
  // BrowserRouter as Router, Switch,
  Route,
  Routes,
} from "react-router-dom";

// importing Component's

// import  Navigation  from './components/Navigation';

// import Banner from "./components/Header/Banner";
import Footer from "./components/Footer";

import "./styles/sass/main.scss";

import Home from "./pages/Home";
import Accueil from "./pages/Acceuil";
import Post from "./pages/Post";
import Gallery from "./pages/Gallery";
import User from "./pages/User";


export const App = () => {
  return (
    <Router>
      {/* <Banner /> */}
      <Routes>
        <Route path="/acceuil" element={<Accueil />} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/multimedia" element={<Gallery />} />
        <Route path="/user" element={<User />} />

        <Route path="*" element={<Accueil />} />
        <Route path="*" component={() => <h2>404 Not Found </h2>} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
