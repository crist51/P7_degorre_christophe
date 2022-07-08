const mysqlconnection = require('../db/db.mysql');

exports.createCommentPost = (req, res, next) => {
  const id = (req.params.id)
  console.log(req.body);
  const commentaire = req.body.commentaire

  // console.log('------------------- date ------------------');
  var d = new Date();
  let date = d.getHours() + ' h ' + d.getMinutes() + ' le : ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
  console.log(date);
  commentaire.commentaireDate = date;




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
            "UPDATE `post` SET `comments`=? WHERE post_id =?", [commentsResultStringnify, id],
            // console.log(commentsResultStringnify),
            (error, res) => {
              if (error) {
                res.status(404).json({ error }),
                  console.log(error)
              };
            },
            res.status(201).json({ message: "post update" }),
            console.log("post update"),


  // mysqlconnection.query(
  //   "SELECT * FROM `post` WHERE `post_id` = ?", [id],
  //   (error, results) => {
  //     if (error) {
  //       res.json({ error })
  //     } else {
  //       console.log("post recuperer " + id)
  //       //est ce que des commentaires on été creer?
  //       let commentsResult = results[0].comments
  //       console.log(commentsResult);

  //       if (commentsResult == null) {
  //         console.log('pas de commetaire');
  //         //on créer comments 
  //         let comments = []
  //         let newTest = comments.push(commentaire);
  //         // on met le commentaire en format JSON pour SQL
  //         comments = JSON.stringify(comments)


  //         mysqlconnection.query(
  //           "UPDATE `post` SET `comments`=? WHERE post_id = ?", [comments, id],
  //           console.log(comments),
  //           (error, res) => {
  //             if (error) {
  //               res.status(404).json({ error }),
  //                 console.log(error)
  //             };
  //           },
  //           res.status(201).json({ message: "commentaire créer" }),
  //           console.log("commentaire créer"),
  //         )
  //       }
  //       else {
  //         // le commentaire array existe & on le traduit JSON en JS
  //         let commentsResultParse = JSON.parse(commentsResult);
  //         let newTest = commentsResultParse.push(commentaire);
  //         // on met le commentaire en format JSON pour SQL
  //         commentsResultStringnify = JSON.stringify(commentsResultParse)

  //         mysqlconnection.query(
  //           "UPDATE `post` SET `comments`=? WHERE post_id = ?", [commentsResultStringnify, id],
  //           console.log(commentsResultStringnify),
  //           (error, res) => {
  //             if (error) {
  //               res.status(404).json({ error }),
  //                 console.log(error)
  //             };
  //           },
  //           res.status(201).json({ message: "post update" }),
  //           console.log("post update"),
          )
        }
      }
    }
  )
}


exports.createCommentGallery = (req, res, next) => {
  const id = (req.params.id)
  console.log(req.body);
  const commentaire = req.body.commentaire


  // console.log('------------------- date ------------------');
  var d = new Date();
  let date = d.getHours() + ' h ' + d.getMinutes() + ' le : ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
  console.log(date);
  commentaire.commentaireDate = date;

  mysqlconnection.query(
    "SELECT * FROM `gallery` WHERE `gallery_id` = ?", [id],
    (error, results) => {
      if (error) {
        res.json({ error })
      } else {
        console.log("gallery recuperer " + id)
        //est ce que des commentaires on été creer?
        let commentsResult = results[0].comments

        if (commentsResult == null) {
          //on créer comments 
          let comments = []
          let newTest = comments.push(commentaire);
          // on met le commentaire en format JSON pour SQL
          comments = JSON.stringify(comments)

          mysqlconnection.query(
            "UPDATE `gallery` SET `comments`=? WHERE gallery_id = ?", [comments, id],
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
            "UPDATE `gallery` SET `comments`=? WHERE gallery_id =?", [commentsResultStringnify, id],
            // console.log(commentsResultStringnify),
            (error, res) => {
              if (error) {
                res.status(404).json({ error }),
                  console.log(error)
              };
            },
            res.status(201).json({ message: "gallery update" }),
            console.log("gallery update"),
          )
        }
      }
    }
  )
}
