require('../connection');

const Author = require('../models/Author')

const deleteAuthor = async () => {
    const deletedAuthor = await Author.deleteMany({name: 'Aretha Franklin'});
    console.log(deletedAuthor)
}
deleteAuthor();