//link all of the required package files
require('dotenv').config();
var keys = require('./keys.js');
var fs = require('fs');
var Spotify = require('node-spotify-api');


//argument variables
var command = process.argv[2];
var name = process.argv[3];

//spotify magic
var spotify = new Spotify(keys.spotify);

function song() {
    if(!name){
        name = 'The Sign'
    }
    spotify.search({
        type: 'track',
        //the query refers back to the argument variables
        query: name,
        limit: 5
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("\n-----------------------------------------------")
        // display artist 
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name)
        // display song name
        console.log("Song Name: " + data.tracks.items[0].name)
        // display link of song from spotify
        console.log("Album Link: " + data.tracks.items[0].album.external_urls.spotify)
        // display album that song is from
        console.log("Album Name: " + data.tracks.items[0].album.name)
        console.log("-----------------------------------------------\n")
    });
};

// spotify-this-song function
//node liri.js  spotify-this-song 'song name here'



switch (command) {


    case 'spotify-this-song':
        song();
        break;


    default:
        console.log("Invalid request please try again.")
}












// movie-this

// concert-this

// do-what-it-says