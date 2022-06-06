//const Gallery = require('../models/Gallery');
const fs = require('fs');

const auth = require('../middleware/auth');
const mysqlconnection = require('../db/db.mysql');


//=======================================================img non postman pas effectuer =======================================================

exports.createGallery = (req, res, next) => {
  console.log(req.body);
  const gallery = {
    gallery_titre: req.body.gallery_titre,
    gallery_texte: req.body.gallery_texte,
    gallery_media: req.body.gallery_media,
    gallery_userId: req.body.gallery_userId,
    
    //gallery_userId: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    gallery_texte: req.body.gallery_texte
  };

  //console.log(gallery);
  mysqlconnection.query(
    'INSERT INTO gallery SET ?', gallery, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        res.status(201).json({ message: "gallery create" })
          // console.log("-------------------- Resultat -------------------"),
          // console.log(results)
      }
    }
  )
};

//============================================================================================================

exports.getAllGallery = async(req, res, next) => {
  try {//new mis async
    const gallery = await mysqlconnection.query(
      "SELECT * FROM `gallery` WHERE 1",
      (error, results) => {
        if (error) {
          console.log(error)
          res.json({ error })
        } else {
          res.status(200).json({ results }),
            console.log("-------------------- Resultat -------------------"),
            console.log("getAllGallery")
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getOneGallery = (req, res, next) => {
  try {
    const id = (req.params.id)
    //console.log(id);
    mysqlconnection.query(
      "SELECT * FROM `gallery` WHERE `gallery_id` = ?", [id],
      (error, results) => {
        if (error) {
          res.json({ error })
        } else {
          res.status(200).json({ results }),
            console.log("-------------------- Resultat -------------------"),
            console.log("getOneGallery " + id)
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};


exports.modifyGallery = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);// = 1
  
  
  
  //non tester avec postman------------------------------------------------
  const galleryObject = req.file ?
    {//si image
      ...JSON.parse(req.body.gallery),//recupere tte  les info objet
      gallery_media: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`//genere la nouvelle image
    } : {
      ...req.body
    };//si pas d'iamge
  if (req.file) {
    mysqlconnection.query(
      "SELECT * FROM `gallery` WHERE `gallery_id` = ?", [id],)
      .then((s) => {
        const oldImg = s.gallery_media.split('/images/')[1]
        fs.unlink(`images/${oldImg}`, (error) => {
          if (error) console.log(error)
        })
      })
      .catch(error => res.status(400).json({ error }));
  }
  //---------------------------------------------------------------------------------------




  mysqlconnection.query(
    "UPDATE `gallery` SET `gallery_titre`=?, `gallery_texte`=?, `gallery_media`=? WHERE gallery_id = ?", [req.body.gallery_titre, req.body.gallery_texte, req.body.gallery_media, id],//id sur les req.body
    console.log(req.body.gallery_titre, req.body.gallery_texte, req.body.gallery_media,),//PK je dois laisser ce LOG
    (error, results) => {
      if (error) {
        res.status(404).json({ error }),
          console.log(error)
      };
    },
    res.status(201).json({ message: "gallery update" }),
    console.log("-------------------- Resultat -------------------"),
    console.log("gallery update")
  )
};

//============================================================================================================

exports.deleteGallery = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);

  //essait a tester avec postman------------------------------------------------
  try {
    gallery => {
      const filename = gallery.imageUrl.split('/images/')[1];//nom image a supprimer
      fs.unlink(`images/${filename}`, () => {//supprimer le fichier
        mysqlconnection.query(
          "DELETE FROM gallery WHERE `gallery_id` = ?", [id],
          (error, results) => {
            if (error) {
              res.status(404).json({ error })
              console.log(error);
            };
          },
          res.status(204).json({ message: "gallery delete" }),
          console.log("-------------------- Resultat -------------------"),
          console.log("gallery delete")
        )
      })
    }
  }
  catch (err) {
    res.status(500).json({ error: err });
  }
  //---------------------------------------------------------------------------------------


  // mysqlconnection.query(
  //  "DELETE FROM gallery WHERE `gallery_id` = ?", [id],
  //   (error, results) => {
  //     if (error) {
  //       res.status(404).json({ error })
  //       console.log(error);
  //     };
  //   },
  //   res.status(204).json({ message: "gallery delete" }),
  //   console.log("-------------------- Resultat -------------------"),
  //   console.log("gallery delete")
  //)
};




// exports.modifyGallery = (req, res, next) => {
//   const galleryObject = req.file ?
//     {//si image
//       ...JSON.parse(req.body.gallery),//recupere tte  les info objet
//       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`//genere la nouvelle image
//     } : { 
//       ...req.body };//si pas d'iamge
//       if(req.file){
//         Gallery.findOne({_id:req.params.id})
//         .then((s) => {
//           const oldImg = s.imageUrl.split('/images/')[1]
//           fs.unlink(`images/${oldImg}`,(error) => {
//             if(error) console.log(error)
//           })
//         })
//         .catch(error => res.status(400).json({ error }));
//       }
//       Gallery.updateOne({ _id: req.params.id }, { ...galleryObject, _id: req.params.id })
//       .then(() => res.status(200).json({ message: 'gallery modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// };