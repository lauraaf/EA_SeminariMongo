const mongoose = require('mongoose');
require('./connection');

const Author = require('./models/Author');
const Song = require('./models/Song');

// Obtener el autor de una canción
const getAuthor = async () => {
    const song = await Song
        .findOne({ name: 'I dont want to miss a thing' })
        .populate('author');  
    if (song && song.author) {
        console.log(`The author is ${song.author.name}`);
    } else {
        console.log('Song or author not found');
    }
};

getAuthor();