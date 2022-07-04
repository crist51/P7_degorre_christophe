import React from "react";

import {
  BrowserRouter as Router /*, Switch*/,
  Route,
  Routes,
} from "react-router-dom";



import Banner from "./components/Header/Banner";
import Footer from "./components/Footer";

import "./styles/sass/main.scss";

import Home from "./pages/Home";
import Accueil from "./pages/Acceuil";

import Post from "./pages/Post";
import PostOne from "./pages/PostOne";

import Gallery from "./pages/Gallery";
import GalleryOne from "./pages/GalleryOne";

import User from "./pages/User";
import UserOne from "./pages/UserOne";
import MyUser from "./pages/MyUser";

export const App = () => {

  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/acceuil" element={<Accueil />} />
        <Route path="/" element={<Home />} />

        <Route path="/post" element={<Post />} />
        <Route path="post/onePost" element={<PostOne />} />

        <Route path="/multimedia" element={<Gallery />} />
        <Route path="multimedia/oneGallery" element={<GalleryOne />} />


        <Route path="/user" element={<User />} />
        <Route path="user/oneuser" element={<UserOne />} />
        <Route path="/author/" element={<UserOne />} />
        <Route path="myuser" element={<MyUser />} />


        <Route path="*" element={<Accueil />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
