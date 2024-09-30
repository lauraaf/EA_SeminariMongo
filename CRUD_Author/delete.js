require('../connection');

const Author = require('../models/Author')

const deleteAuthor = async () => {
    const deletedAuthor = await Author.deleteMany({name: 'Beyonce'});
    console.log(deletedAuthor)
}
deleteAuthor();