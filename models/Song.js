const { Schema, model } = require('mongoose');

const songSchema = new Schema({
    name: String,
    album: String,
    author: String,
    duration: Number
});

module.exports = model('Song', songSchema);