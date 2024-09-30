require('./connection');
const Song = require('./models/Song');


const getSongWithAuthor = async () => {
    try {
        // Find a song and populate the 'author' field
        const song = await Song.findOne({ name: 'I dont want to miss a thing' }).populate('author');
        console.log(song);
        console.log(`Song Name: ${song.name}`);
        console.log(`Author Name: ${song.author.name}`);  // Access the author's details
    } catch (err) {
        console.error('Error fetching song:', err);
    }
};

getSongWithAuthor();