// in controllers/template.js

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
          // console.log("-------------------- Resultat -------------------"),
          // console.log("getOneUser " + id);
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
    mysqlconnection.query("SELECT * FROM `user` WHERE 1", (error, results) => {
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
console.log(req);
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);
  console.log(' ------- req.body ------');
  console.log(req.body);

const user_imageUrl = req.body.user_imageUrl

  mysqlconnection.query(
    "UPDATE `user` SET `lastname`=?, `firstname`=?, `affectation`=?, `user_imageUrl`=?, `description`=?, `poste`=? WHERE userId = ?",
    [req.body.lastname, req.body.firstname, req.body.affectation, user_imageUrl, req.body.description, req.body.poste, id], //id sur les req.body
    console.log(req.body.lastname, req.body.firstname, req.body.affectation, user_imageUrl, req.body.description, req.body.poste),
    (error, results) => {
      if (error) {
        res.status(404).json({ error }), console.log(error);
      }
    },
    res.status(201).json({ message: "user update" }),
    console.log("-------------------- Resultat -------------------"),
    console.log("user update")
  );


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
