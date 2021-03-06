const fs = require('fs');
const mysqlconnection = require("../db/db.mysql");

exports.getOneTemplateUser = (req, res, next) => {
  try {
    const id = req.params.id;
    mysqlconnection.query(
      "SELECT * FROM `user` WHERE `userId` = ?",
      [id],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results })
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//============================================================================================================

exports.getAllTemplateUser = (req, res, next) => {
  try {
    mysqlconnection.query("SELECT * FROM `user` WHERE 1", [1], (error, results) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        res.status(200).json({ results }),
          console.log("-------------------- Resultat -------------------"),
          console.log("getAllUser");
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//============================================================================================================

exports.modifyTemplateUser = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);

  if (req.file !== undefined) { //avec file
    const userObject = JSON.parse(req.body.user);

    // const firstname = userObject.firstname
    // const lastname = userObject.lastname
    const affectation = userObject.affectation
    const description = userObject.description
    const poste = userObject.poste
    const user_imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    mysqlconnection.query(
      "UPDATE `user` SET `affectation`=?, `user_imageUrl`=?, `description`=?, `poste`=? WHERE userId = ?",
      [ affectation, user_imageUrl, description, poste, id], //id sur les req.body
      console.log( affectation, user_imageUrl, description, poste),
      (error, res) => {
        if (error) {
          res.status(404).json({ error }), console.log(error);
        }
      },
      res.status(201).json({ message: "user update" })
    )
  } else { // sans file
    console.log(req.body);
    mysqlconnection.query(
      "UPDATE `user` SET `affectation`=?,  `description`=?, `poste`=? WHERE userId = ?",
      [ req.body.affectation, req.body.description, req.body.poste, id], //id sur les req.body
      console.log( req.body.affectation, req.body.description, req.body.poste),
      (error, results) => {
        if (error) {
          res.status(404).json({ error }), console.log(error);
        }
      },
      res.status(201).json({ message: "user update" }),
      console.log("-------------------- Resultat -------------------"),
      console.log("user update")
    );
  }
};

//============================================================================================================

exports.deleteTemplateUser = (req, res, next) => {
  console.log(" ------- req.params.id ------");
  const id = req.params.id;
  console.log(id);
  mysqlconnection.query(
    "DELETE FROM user WHERE `userId` = ?",
    [id],

    (error, results) => {
      if (error) {
        res.status(404).json({ error });
        console.log(error);
      }
      return (
        res.status(204).json({ message: "user delete" }),
        console.log("-------------------- Resultat -------------------"),
        console.log("user delete")
      );
    }
  );
};
