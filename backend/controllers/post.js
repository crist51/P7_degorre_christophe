// in controllers/post.js
const mysqlconnection = require('../db/db.mysql');


exports.createPost = (req, res, next) => {
  console.log(req.body);
  const post = {
    post_titre: req.body.post_titre,//req.query.userId
    post_userId: req.body.post_userId,
    post_contenue: req.body.post_contenue,
    post_author:req.body.post_author,
  };
  console.log(post);
  mysqlconnection.query(
    'INSERT INTO post SET ?', post, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        res.status(201).json({ message: "post create" }),
        console.log("-------------------- Resultat -------------------"),
        console.log("post create")
      }
    }
  )
}

//============================================================================================================

exports.getAllPost = async (req, res) => {
  try {
    const post = await mysqlconnection.query(
      "SELECT * FROM `post` WHERE 1 ORDER BY `post_dateCreate` DESC",[1],
      (error, results) => {
        if (error) {
          console.log(error)
          res.json({ error })
        } else {
          res.status(200).json({ results }),
          console.log("-------------------- Resultat -------------------"),
          console.log("getAllPost")
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//============================================================================================================

exports.getOnePost = (req, res) => {
  try {
    const id = (req.params.id)
    //console.log(id);
    mysqlconnection.query(
      "SELECT * FROM `post` WHERE `post_id` = ?", [id],
      (error, results) => {
        if (error) {
          res.json({ error })
        } else {
          res.status(200).json({ results }),
          console.log("-------------------- Resultat -------------------"),
          console.log("getOnePost " + id)
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//============================================================================================================

exports.modifyPost = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);// = 1
  mysqlconnection.query(
    "UPDATE `post` SET `post_titre`=?,`post_contenue`=? WHERE post_id = ?", [req.body.post_titre, req.body.post_contenue, id],//id sur les req.body
    console.log(req.body.post_titre, req.body.post_contenue),//PK je dois laisser ce LOG
    (error, results) => {
      if (error) {
        res.status(404).json({ error }),
        console.log(error)
      };
    },
    res.status(201).json({ message: "post update" }),
    console.log("-------------------- Resultat -------------------"),
    console.log("post update"),
  )
}

//============================================================================================================

exports.deletePost = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);
  mysqlconnection.query(
   "DELETE FROM post WHERE `post_id` = ?", [id],
    (error, results) => {
      if (error) {
        res.status(404).json({ error })
        console.log(error);
      };
    },
    res.status(204).json({ message: "post delete" }),
    console.log("-------------------- Resultat -------------------"),
    console.log("post delete")
  )
};