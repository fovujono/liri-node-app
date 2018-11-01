//link all of the required package files
require('dotenv').config();
var keys = require('./keys.js');
var fs = require('fs');
var Spotify = require('node-spotify-api');





var spotify = new Spotify(keys.spotify);
// spotify-this-song function
//node liri.js  spotify-this-song 'song name here'
function song(name = 'The Sign') {
    spotify.search({
        type: 'track',
        query: name,
        limit: 1
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

function  













// movie-this

// concert-this

// do-what-it-says