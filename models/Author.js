const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
    name: String,
    songs: [String],
    listeners: Number
});

module.exports = model('Author', authorSchema);