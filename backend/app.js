const express = require('express');
const mysql = require('./db/db.mysql');
const path = require('path');

const dotenv = require ('dotenv');
const result = dotenv.config();

const postRoutes = require ('./routes/post');
const userRoutes = require ('./routes/user');
const templateUserRoutes = require ('./routes/templateUser');//fiche user
const galleryRoutes = require ('./routes/gallery');


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/post', postRoutes);
app.use('/api/authentification', userRoutes);
app.use('/api/user', templateUserRoutes);
app.use('/api/gallery', galleryRoutes);

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;