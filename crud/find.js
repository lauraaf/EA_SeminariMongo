require('../connection');

const Song = require('../models/Song')
const Author = require('../models/Author')

async function main() {
    //consultamos todos los datos
   const song = await Song.find();
   console.log(song)
   const author = await Author.find();
   console.log(author)
}

main();
    