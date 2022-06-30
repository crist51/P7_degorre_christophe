const fs = require('fs');
const mysqlconnection = require('../db/db.mysql');


//======================================================= create =======================================================

exports.createGallery = (req, res, next) => {
  const galleryObject = JSON.parse(req.body.gallery);
  console.log(req);
  console.log('-----------req.file-----------');
  console.log(req.file);
  console.log('-----------body-----------');
  console.log(req.body);
  console.log('-----------req-----------');

 // console.log(galleryObject);
  const gallery = {
    gallery_titre: galleryObject.gallery_titre,
    gallery_texte: galleryObject.gallery_texte,
    gallery_userId:galleryObject.gallery_userId,
    gallery_author:galleryObject.gallery_author,
    gallery_media: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  }
  mysqlconnection.query(
    'INSERT INTO gallery SET ?', gallery, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.json({ error });
      } else {
        res.status(201).json({ message: "gallery create" })
      }
    }
  )
};

//=============================================== GetAll ==========================================================

exports.getAllGallery = async(req, res, next) => {
  try {//new mis async
    const gallery = await mysqlconnection.query(
      "SELECT * FROM `gallery` WHERE 1  ORDER BY `gallery_dateCreate` DESC",[1],
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


//============================================================================================================

exports.deleteGallery = (req, res, next) => {
  console.log(' ------- req.params.id ------');
  const id = (req.params.id)
  console.log(id);
  try {
    gallery => {
      const filename = gallery.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
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
   mysqlconnection.query(
   "DELETE FROM gallery WHERE `gallery_id` = ?", [id],
    (error, res) => {
      if (error) {
        res.status(404).json({ error })
        console.log(error);
      };
    },
    res.status(204).json({ message: "gallery delete" }),
    console.log("-------------------- Resultat -------------------"),
    console.log("gallery delete")
  )
};