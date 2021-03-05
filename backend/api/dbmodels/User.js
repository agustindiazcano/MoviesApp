const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    favorites: [
        {
        type: Schema.Types.ObjectId,
        ref: "Movies",
        },
    ],

});

const User = mongoose.model('Users', user);
module.exports = User;