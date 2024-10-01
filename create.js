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

    const author3 = new Author({
        name: 'Queen',
        audienceCount: 95
    });
    const authorSaved3 = await author3.save();

    const author4 = new Author({
        name: 'Etta James',
        audienceCount: 89
    });
    const authorSaved4 = await author4.save();

    const author5 = new Author({
        name: 'Aerosmith',
        audienceCount: 45
    });
    const authorSaved5 = await author5.save();

    const song  = new Song({
        name: 'Daddy lessons',
        author: author2._id,
        album: 'Lemonade',
        duration: 5.54
    });
    const songSaved = await song.save();
   
    const song2  = new Song({
        name: 'Genesis',
        author: author._id,
        album: 'Genesis',
        duration: 6.58
    });
    const songSaved2 = await song2.save();
    
    const song3  = new Song({
        name: 'Bohemian Rapsody',
        author: author3._id,
        album: 'A night at the opera',
        duration: 5.58
    });
    const songSaved3 = await song3.save();

    const song4  = new Song({
        name: 'Stormy weather',
        author: author4._id,
        album: 'At Last!',
        duration: 5.46
    });
    const songSaved4 = await song4.save();

    const song5  = new Song({
        name: 'I dont want to miss a thing',
        author: author5._id,
        album: 'Armageddon',
        duration: 4.58
    });
    const songSaved5 = await song5.save();
}

main()
    .then(songSaved => console.log(songSaved))
    .catch(err => console.log(err));