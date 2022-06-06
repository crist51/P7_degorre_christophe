const Publicate = require('../models/Publicate');

// exports.likePost = (req, res, next) => {
//     const like = req.body.like;
//     if (like === 1) { //like & smile
//         Publicate.updateOne({ _id: req.params.id },
//             {
//                 $inc: { likes: 1 },
//                 $push: { usersLiked: req.body.userId },
//             })
//             .then(() => res.status(200).json({ message: 'like + 1' }))
//             .catch(error => res.status(400).json({ error }))
//     } else { //annulation likes & smile
//         Publicate.findOne({ _id: req.params.id })
//             .then(publicate => {
//                 if (publicate.usersLiked.indexOf(req.body.userId) !== -1) {
//                     Publicate.updateOne({ _id: req.params.id },
//                         {
//                             $inc: { likes: -1 },
//                             $pull: { usersLiked: req.body.userId },
//                         })
//                         .then(() => res.status(200).json({ message: 'like 0 ' }))
//                         .catch(error => res.status(400).json({ error }))
//                 }

//             })
//             .catch(error => res.status(400).json({ error }))
//     }
// };


// exports.likeGallery = (req, res, next) => {
//     const like = req.body.like;
//     if (like === 1) { //like & smile
//         Gallery.updateOne({ _id: req.params.id },
//             {
//                 $inc: { likes: 1 },
//                 $push: { usersLiked: req.body.userId },
//             })
//             .then(() => res.status(200).json({ message: 'like + 1' }))
//             .catch(error => res.status(400).json({ error }))
//     } else { //annulation likes & smile
//         Gallery.findOne({ _id: req.params.id })
//             .then(gallery => {
//                 if (gallery.usersLiked.indexOf(req.body.userId) !== -1) {
//                     gallery.updateOne({ _id: req.params.id },
//                         {
//                             $inc: { likes: -1 },
//                             $pull: { usersLiked: req.body.userId },
//                         })
//                         .then(() => res.status(200).json({ message: 'like 0 ' }))
//                         .catch(error => res.status(400).json({ error }))
//                 }

//             })
//             .catch(error => res.status(400).json({ error }))
//     }
// };