// in controllers/user.js
const bcrypt = require('bcrypt')
const MaskData = require('maskdata');
const jwt = require('jsonwebtoken');
const cryptojs = require('crypto-js')

const dotenv = require('dotenv');
const result = dotenv.config();

const mysqlconnection = require('../db/db.mysql');
const password = require('../middleware/password');

exports.signIn = (req, res, next) => {
    console.log(req.body);
    const emailCrypto = cryptojs.HmacSHA256(req.body.email, `${process.env.cryptojs_key}`).toString();
    bcrypt.hash(req.body.password, 10)//10 tour de hachage
        .then(hash => {
            const user = {
                email: emailCrypto,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                password: hash,
            };
            mysqlconnection.query(
                'INSERT INTO user SET ?', user, (error, results, fields) => {
                    if (error) {
                        console.log(error);
                        res.json({ error });
                    } else {
                        console.log("-->results");
                        console.log(results);
                        res.json({ message: "utilisateur créer" });
                    }
                }
            )
        })
};

//============================================================================================================

exports.signUp = (req, res, next) => { // signUp user
    console.log(req.body);
    const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.cryptojs_key}`).toString();
    console.log("----> emailCrypto <----");
    console.log(emailCryptoJs);
    const email = emailCryptoJs;

    mysqlconnection.query(
        'SELECT * FROM user WHERE email = ?', email, (error, results) => {
            if (error) {
                console.log(error);
                res.json({ error });
            } else {
                console.log(results);
                if (results == 0) {
                    return res.status(404).json({ message: 'utilisateur inexistant' });
                }

                //compare requete pasword avec la bd
                bcrypt
                    .compare(req.body.password, results[0].password)
                    .then((controlePassword) => {
                        console.log("----------> controlePassword <----------");
                        console.log(controlePassword);
                        if (controlePassword == false) {
                            res.json({ message: "mot de passe incorecte" });
                        } else {
                            //generation du token
                            const token = jwt.sign(
                                { userId: results[0].userId },
                                `${process.env.JWT_token}`,
                                { expiresIn: "24h" }

                            )
                            console.log("---------------token------------------");
                            console.log(token);
                            res.status(201).json({
                                userId: results[0].userId,
                                mail: req.body.email,
                                token,
                            })
                            console.log(results[0]);//on recupere le resulat
                        }
                    })
                    .catch(error => res.status(500).json({ error }));
            }
        }
    )
};
