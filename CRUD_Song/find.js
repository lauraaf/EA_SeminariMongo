require('../connection');

const Song = require('../models/Song')

async function main() {
    //consultamos todos los datos
   const song = await Song.find();
   console.log(song)
}

main();
    