require('../connection');


const Author = require('../models/Author')

const updateAuthor = async () => {
    const author = await Author.updateMany({name: 'Raye'}, {
        songs: ['Oscar Tears', 'Genesis', 'Icecream Man']
    }, {new: true});
    console.log(author);
    const author2 = await Author.updateMany({name: 'Beyonce'}, {
        songs: ['Daddy lessons', 'Daughter', 'Freedom']
    }, {new: true});
    console.log(author2);
    const author3 = await Author.updateMany({name: 'Queen'}, {
        songs: ['Break Free', 'Bohemian Rapsody', 'Under Pressure']
    }, {new: true});
    console.log(author3);
}
updateAuthor();