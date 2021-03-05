const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new mongoose.Schema({
    userFrom: {
        type: String,
        ref: "User"
    },
    movieId:{
        type: String
    },
    movieTitle:{
        type: String
    },
    movieImage:{
        type: String
    }
})


module.exports = mongoose.model("Favorites", favoritesSchema);
