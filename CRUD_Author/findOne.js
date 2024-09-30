require ('../connection');

const Author = require('../models/Author')


const getAuthor = async () => {
    const author = await Author.findOne({name: 'Raye'});
    console.log(author)
}
getAuthor();

