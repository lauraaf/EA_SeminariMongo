require('./connection');

const Song = require('./models/Song')
const Author = require('./models/Author')

async function main() {
    const song  = new Song({
        name: 'Bohemian Rapsody',
        author: 'Queen',
        album: 'A night at the opera',
        duration: 5.54
    });
    const songSaved = await song.save();
    //return songSaved;
    const song2  = new Song({
        name: 'Genesis',
        author: 'Raye',
        album: 'Genesis',
        duration: 6.58
    });
    const songSaved2 = await song2.save();

    const author = new Author({
        name: 'Amy Winehouse',
        songs: ['Back to black', 'Love is a losing game', 'Stronger'],
        listeners: 57
    });
    const authorSaved = await author.save();

    const author2 = new Author({
        name: 'Beyonce',
        songs: ['Daughter', 'Protector', 'Daddy Lessons', 'Diva'],
        listeners: 100
    });
    const authorSaved2 = await author2.save();
}

main()
    .then(songSaved => console.log(songSaved))
    .catch(err => console.log(err));