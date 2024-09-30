require('../connection');

const Song = require('../models/Song')

const updateSong = async () => {
    const song = await Song.updateMany({name: 'Daddy lessons'}, {
        duration: 4.45
    }, {new: true});
    console.log(song);
}
updateSong();