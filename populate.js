const mongoose = require('mongoose');
require('./connection');

const Author = require('./models/Author');
const Song = require('./models/Song');

// Crear canciones y asociarlas con el autor
const createSongs = async () => {
    const author = new Author({
        name: 'Nina Simone',
        audienceCount: 45
    });
    await author.save();
    
    const song1 = new Song({
        name: 'My baby just cares for me',
        author: author._id,
        album: 'Little girl blue',
        duration: 3.34
    });
    await song1.save();
};



// Obtener el autor de una canción
const getAuthor = async () => {
    const song = await Song
        .findOne({ name: 'My baby just cares for me' })
        .populate('author');  // Asegúrate de que 'author' esté definido correctamente en tu esquema
    if (song && song.author) {
        console.log(`The author is ${song.author.name}`);
    } else {
        console.log('Song or author not found');
    }
};

createSongs().then(getAuthor);