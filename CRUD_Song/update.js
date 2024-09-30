require('../connection');

const Song = require('../models/Song')

const updateSong = async () => {
    const song = await Song.updateMany({name: 'Bohemian Rapsody'}, {
        duration: 5.45
    }, {new: true});
    console.log(song);
}
updateSong();