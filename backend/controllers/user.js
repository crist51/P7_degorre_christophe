// in controllers/user.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cryptojs = require("crypto-js");

const dotenv = require("dotenv");
const result = dotenv.config();

const mysqlconnection = require("../db/db.mysql");

exports.signUp = (req, res, next) => {
  const emailCrypto = cryptojs
    .HmacSHA256(req.body.email, `${process.env.cryptojs_key}`)
    .toString();
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = {
          email: emailCrypto,
          lastname: req.body.lastname,
          firstname: req.body.firstname,
          password: hash,
          user_imageUrl: "http://localhost:3000/images/icon.png1655753820253.png"
        };
        console.log("---- Avent envoie ----");
        console.log(user);
        mysqlconnection.query(
          "INSERT INTO user SET ?",
          user,
          (error, results, fields) => {
            if (error) {
              console.log(error);
              //res.json({ error });
              res.status(401).json({ error: "utilisateur déja éxistant" });
              console.log('email deja dans la bd');
            } else {
              //generation du token
              const token = jwt.sign(
                { userId: results.insertId },
                `${process.env.JWT_token}`,
                { expiresIn: "24h" }
              );
              console.log("---------------token------------------");
              console.log(token);
              res.status(201).json({
                userId: results.insertId,
                mail: req.body.email,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                token
              });
            }
          }
        );
      })
      .catch((error) => res.status(500).json({ error }));
};

//============================================================================================================

exports.signIn = (req, res, next) => {
  console.log(req.body);
  const emailCryptoJs = cryptojs
    .HmacSHA256(req.body.email, `${process.env.cryptojs_key}`)
    .toString();
  console.log("----> emailCrypto <----");
  console.log(emailCryptoJs);
  const email = emailCryptoJs;

  mysqlconnection.query(
    "SELECT * FROM user WHERE email = ?",
    email,
    (error, results) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        console.log(results);
        if (results == 0) {
          return res.status(404).json({ error: "utilisateur inexistant" });
        }

        //compare requete pasword avec la bd
        bcrypt
          .compare(req.body.password, results[0].password)
          .then((controlePassword) => {
            console.log("----------> controlePassword <----------");
            console.log(controlePassword);
            if (controlePassword == false) {
              res.status(401).json({ error: "mot de passe incorecte" });
            } else {
              //generation du token
              const token = jwt.sign(
                { userId: results[0].userId },
                `${process.env.JWT_token}`,
                { expiresIn: "24h" }
              );
              console.log("---------------token------------------");
              console.log(token);
              res.status(200).json({
                userId: results[0].userId,
                mail: req.body.email,
                firstname:results[0].firstname,
                lastname:results[0].lastname,
                token,
                admin: results[0].admin,
              });
              console.log("---------------log de connexion------------------");
              console.log({
                userId: results[0].userId,
                mail: req.body.email,
                token,
              }); //on recupere le resulat
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    }
  );
};
