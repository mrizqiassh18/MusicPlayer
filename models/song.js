const mongoose  = require("mongoose");

const songsSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    artist: {
        required: true,
        type: String
    },
    album: {
        required: true,
        type: String
    }
})

const Song = mongoose.model("Song", songsSchema);
module.exports = Song;