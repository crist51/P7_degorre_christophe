const mysqlconnection = require('../db/db.mysql');

exports.createComment = (req, res, next) => {
    console.log("je suis dans les commentaire");
    console.log(' ------- req.params.id ------');
    const id = (req.params.id)
    console.log(id);
    let comment = {
        post_comment: req.body.comment.post_comment,
        author_comment: req.body.comment.author_comment
    };
    comment = JSON.stringify(comment)
    console.log(comment);
    mysqlconnection.query(
        "insert `post` SET `comments` = ? WHERE `post_id` =?",
        [
            comment, id], //id sur les req.body
        (error, results) => {
            if (error) {
                res.status(404).json({ error }), console.log(error);
            }
        },
        res.status(201).json({ message: "commentaire creer" }),
        console.log("-------------------- Resultat -------------------"),
        console.log("commentaire creer")
    );

}
