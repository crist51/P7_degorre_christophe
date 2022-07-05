const mysqlconnection = require('../db/db.mysql');

exports.createComment = (req, res, next) => {
    const id = (req.params.id)
    let commentaire = {
        "userId": req.body.comment.userId,
        "commentaire": req.body.comment.commentaire
    };

    const comment= []//lieu ou devra ce trouver tour les commentaire de la BD
    const newComment = comment.push(commentaire);

    console.log('post ' + id +' ou le commentaire sera affilié');
    console.log(comment);

    // return res.status(200).json({ message: "commentaire publier" })

    // const commentEnvoie = JSON.stringify(comment)

    mysqlconnection.query(
        "UPDATE `post` SET `comments`=? WHERE post_id = ?"
        [comment, id],
      (error, results) => {
        if (error) {
          res.status(404).json({ error }),
          console.log(error)
        };
        console.log(results)
        res.status(201).json({ message: "commentaire publier" })
      }
    )
  

    // mysqlconnection.query(
    //     //"insert `post` SET `comments` = ? WHERE `post_id` =?",
    //     "UPDATE `post` SET `comments`=? WHERE userId = ?",
    //     [comments, id], //id sur les req.body
    //     (error, results) => {
    //         if (error) {
    //             res.status(404).json({ error }), console.log(error);
    //         }
    //     },
    //     res.status(201).json({ message: "commentaire creer" }),
    //     console.log("-------------------- Resultat -------------------"),
    //     console.log("commentaire creer")
    // );
}
