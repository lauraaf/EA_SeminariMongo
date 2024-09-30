require ('../connection');

const Song = require('../models/Song')

const getSong = async () => {
    const song = await Song.findOne({name: 'Daddy lessons'});
    console.log(song)
}
getSong();



/*const getAuthor = async () => {
    const author = await Author.findOne({name: 'Beyonce'}).populate('');
    console.log(author)
}
getAuthor();*/