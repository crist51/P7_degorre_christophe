const mysqlconnection = require('../db/db.mysql');

exports.createComment = (req, res, next) => {
  const id = (req.params.id)

  console.log(req.body);
  // let commentaire = {
  //   "userId": req.body.userId,
  //   "commentaireAuthor":commentaireAuthor,
  //   "commentaire": req.body.commentaire
  // };

  const commentaire= req.body.commentaire

  mysqlconnection.query(
    "SELECT * FROM `post` WHERE `post_id` = ?", [id],
    (error, results) => {
      if (error) {
        res.json({ error })
      } else {
        console.log("post recuperer " + id)
        //est ce que des commentaires on été creer?
        let commentsResult = results[0].comments

        if (commentsResult == null) {
          //on créer comments 
          let comments = []
          let newTest = comments.push(commentaire);
          // on met le commentaire en format JSON pour SQL
          comments = JSON.stringify(comments)

          mysqlconnection.query(
            "UPDATE `post` SET `comments`=? WHERE post_id = ?", [comments, id],
            console.log(comments),
            (error, res) => {
              if (error) {
                res.status(404).json({ error }),
                  console.log(error)
              };
            },
            res.status(201).json({ message: "commentaire créer" }),
            console.log("commentaire créer"),
          )
        }
        else {
          // le commentaire array existe & on le traduit JSON en JS
          let commentsResultParse = JSON.parse(commentsResult);
          let newTest = commentsResultParse.push(commentaire);
          // on met le commentaire en format JSON pour SQL
          commentsResultStringnify = JSON.stringify(commentsResultParse)

          mysqlconnection.query(
            "UPDATE `post` SET `comments`=? WHERE post_id = ?", [commentsResultStringnify, id],
            console.log(commentsResultStringnify),
            (error, res) => {
              if (error) {
                res.status(404).json({ error }),
                  console.log(error)
              };
            },
            res.status(201).json({ message: "post update" }),
            console.log("post update"),
          )
        }
      }
    }
  )
}
