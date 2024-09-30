require('../connection');


const Author = require('../models/Author')

const updateAuthor = async () => {
    const author = await Author.updateMany({name: 'Amy Winehouse'}, {
        listeners: 87
    }, {new: true});
    console.log(author);
}
updateAuthor();