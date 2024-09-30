require('../connection');

const Author = require('../models/Author')

const createAuthors = async () => {
    const author = new Author({
        name: 'Etta James',
        songs: ['At last', 'I would rather go blind', 'Stormy weather'],
        listeners: 34
    })
    await author.save();
    const author2 = new Author({
        name: 'Aretha Franklin',
        songs: ['RESPECT', 'Say a little prayer', 'I never loved a man the way I love ypu'],
        listeners: 45
    })
    await author2.save();
}
createAuthors();