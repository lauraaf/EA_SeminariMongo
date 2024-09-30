require('./connection');

const Song = require('./models/Song')
const Author = require('./models/Author')

async function main() {
    const author = new Author({
        name: 'Raye',
        audienceCount: 57
    });
    const authorSaved = await author.save();

    const author2 = new Author({
        name: 'Beyonce',
        audienceCount: 100
    });
    const authorSaved2 = await author2.save();
    const song  = new Song({
        name: 'Daddy lessons',
        author: author2._id,
        album: 'Lemonade',
        duration: 5.54
    });
    const songSaved = await song.save();
    //return songSaved;
    const song2  = new Song({
        name: 'Genesis',
        author: author._id,
        album: 'Genesis',
        duration: 6.58
    });
    const songSaved2 = await song2.save();
}

main()
    .then(songSaved => console.log(songSaved))
    .catch(err => console.log(err));