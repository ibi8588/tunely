var db = require('./models');

var albums = [];

albums.push({
  artistName: 'Nine Inch Nails',
  name: 'The Downward Spiral',
  releaseDate: '1994, March 8',
  genres: ['industrial', 'industrial metal']
});

albums.push({
  artistName: 'Metallica',
  name: 'Metallica',
  releaseDate: '1991, August 12',
  genres: ['heavy metal']
});

albums.push({
  artistName: 'The Prodigy',
  name: 'Music for the Jilted Generation',
  releaseDate: '1994, July 4',
  genres: ['electronica', 'breakbeat hardcore', 'rave', 'jungle']
});

albums.push({
  artistName: 'Johnny Cash',
  name: 'Unchained',
  releaseDate: '1996, November 5',
  genres: ['country', 'rock']
});

db.Album.remove({}, function(err, removed){
  console.log(`removed ${removed}`)
  db.Album.create(albums, function(err, created){
    if(err) { return console.log('error' + err); }
    console.log("all albums", created);
    process.exit();
  });
});
