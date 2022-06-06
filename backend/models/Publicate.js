const mongoose = require('mongoose');

const publicateSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  //--------------------comments---------------
  //comments:{ type: String },
  //----------------Likes & Smile -------------
  likes: { type: Number, default: 0},
  usersLiked: { type:[ String ]},
});

module.exports = mongoose.model('Publicate', publicateSchema);