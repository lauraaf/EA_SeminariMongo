require('../connection');

const Song = require('../models/Song')


const createSongs = async () => {
    const song = new Song({
        name: 'I dont want to miss a thing',
        album: 'Armageddon',
        author: 'Aerosmith',
        duration: 4.58
    })
    await song.save();
    const song2 = new Song({
        name: 'At last',
        album: 'At last',
        author: 'Etta James',
        duration: 3.58
    })
    await song2.save();
}
createSongs();

