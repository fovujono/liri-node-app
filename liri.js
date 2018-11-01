//link all of the required package files
require('dotenv').config();
var keys = require('./keys.js');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var request = require('request')


//argument variables
var command = process.argv[2];
var name = process.argv.slice(3).join(" ");

//spotify magic
var spotify = new Spotify(keys.spotify);

function song() {
    //need a default song if user doesn't input one
    if (!name) {
        name = 'The Sign Ace of Base'
    }
    spotify.search({
            type: 'track',
            //the query refers back to the argument variable process.argv[3]
            query: name,
            limit: 5
        },
        function (err, data) {
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

//movie function for the OMDb API
function movie() {
    var movieKey = keys.omdb.id
    //default movie
    if (!name) {
        name = 'Mr Nobody'
    }
    //use the docs to make request
    request(`http://www.omdbapi.com/?t=${name}&apikey=${movieKey}`, function(err, repsonse, body) {
    {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            //console.log all the information required
                console.log("Title: " + JSON.parse(body).Title)
                console.log("Year released: " + JSON.parse(body).Year)
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
                console.log("Country(s): " + JSON.parse(body).Country)
                console.log("Language(s): " + JSON.parse(body).Language)
                console.log("Plot: " + JSON.parse(body).Plot)
                console.log("Actors: " + JSON.parse(body).Actors)
                console.log("-----------------------------------------------\n")
            }
        
        })
    
};

function random(){
    //use fs to get what is in the random.text and push it into a new file using liri magic
}

//switch the command based on what the user inputs
switch (command) {

    
    case 'spotify-this-song':
        song();
        break;

    case 'movie-this':
        movie();
        break;
    
    case 'concert-this':
        concert();
        break;

    case 'do-what-it-says':
        random();
        break;



    default:
        console.log("Invalid request please try again.")
}












// movie-this

// concert-this

// do-what-it-says