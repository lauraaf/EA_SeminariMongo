require('./connection');

const Author = require('./models/Author')
const Song = require('./models/Song')

const mostlistenAuthor = async () => {
    const aggregation = await Author.aggregate([
        {
            $match:{audienceCount:{$gt:80}}
        }
    ]);
    console.log('These are the most listen Authors: ')
    console.log(aggregation)
}
mostlistenAuthor();

const longestSongs = async () => {
    const aggregation2 = await Song.aggregate([
        {
            $match:{duration:{$gt:5.50}}
        }
    ]);
    console.log('These are the longest songs: ')
    console.log(aggregation2)
}
longestSongs();



