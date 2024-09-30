require('./connection');

const Author = require('./models/Author')
const Song = require('./models/Song')

const mostlistenAuthor = async () => {
    const aggregation = await Author.aggregate([
        {
            $match:{listeners:{$gt:50}}
        }
    ]);
    console.log(aggregation)
}
mostlistenAuthor();

const longestSongs = async () => {
    const aggregation2 = await Song.aggregate([
        {
            $match:{duration:{$gt:5.00}}
        }
    ]);
    console.log(aggregation2)
}
longestSongs();