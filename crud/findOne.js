require ('../connection');

const Song = require('../models/Song')
const Author = require('../models/Author')

const getSong = async () => {
    const song = await Song.findOne({name: 'Bohemian Rapsody'});
    console.log(song)
}
getSong();

const getAuthor = async () => {
    const author = await Author.findOne({name: 'Beyonce'});
    console.log(author)
}
getAuthor();