require('../connection');

const Song = require('../models/Song')
const Author = require('../models/Author')

const updateSong = async () => {
    const song = await Song.updateMany({name: 'Bohemian Rapsody'}, {
        duration: 5.25
    }, {new: true});
    console.log(song);
}
updateSong();

const updateAuthor = async () => {
    const author = await Author.updateMany({name: 'Amy Winehouse'}, {
        listeners: 87
    }, {new: true});
    console.log(author);
}
updateAuthor();