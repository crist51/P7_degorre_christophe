const mongoose = require('mongoose')

const userShema = mongoose.Schema({
    email: { type: String, required: true, uniqeu: true },
    password: { type: String, required: true },

    email: { type: String, required: true, uniqeu: true },
    password: { type: String, required: true },
    //pseudo: { type: String, require: true } ,
    firstName: { type: String},
    LastName: { type: String},
    imageUrl: { type: String},
    city : { type: String },
    admin: { type: Boolean}

});

module.exports = mongoose.model('User', userShema);


