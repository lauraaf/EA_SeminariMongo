require('../connection');

const Song = require('../models/Song')
const Author = require('../models/Author')

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

const createAuthors = async () => {
    const author = new Author({
        name: 'Etta James',
        listeners: 34
    })
    await author.save();
    const author2 = new Author({
        name: 'Aretha Franklin',
        listeners: 45
    })
    await author2.save();
}
createAuthors();