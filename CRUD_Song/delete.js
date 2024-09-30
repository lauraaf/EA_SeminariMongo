require('../connection');

const Song = require('../models/Song')
const Author = require('../models/Author')

const deleteSong = async () => {
    const deletedSong = await Song.deleteMany({name: 'Genesis'});
    console.log(deletedSong)
}
deleteSong();