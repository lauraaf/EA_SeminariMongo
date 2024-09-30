require ('../connection');

const Author = require('../models/Author')


const getAuthor = async () => {
    const author = await Author.findOne({name: 'Beyonce'});
    console.log(author)
}
getAuthor();

