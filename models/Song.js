const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: String,
    album: String,
    duration: Number,
    author: { type: Schema.Types.ObjectId,
        ref: 'Author' 
    }
   
});

module.exports = mongoose.model('Song', songSchema);