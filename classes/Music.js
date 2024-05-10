/**
Music Class
In Music.js, create a Music class. The Music class should be a subclass of Media. Import Media into the Music.js file using require.
Music should have the following properties and methods:
artist: the artist of the music (string)
length: the length of the music in seconds (number)
summary(): a method that returns a summary of the music, including the artist, album, and length (string) as 
"Title: <TITTLE>, Artist: <ARTIST>, Year: <YEAR>, Genre: <GENRE>, Length: <LENGTH>"
The Music class should have a static method shortestAlbum that takes an array of Music objects and returns the Music object with the shortest song length.
Export the Music class using module.exports.
In index.js, import Music using require.
 */

// import the Media class:

const Media = require("./Media")

class Music extends Media{
    constructor(title, year, genre, artist, length,){
        super(title, year, genre)
            this.artist = artist;
            this.length = length;
        }
        summary(){
            return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
        }

        static shortestAlbum(music){
            if(music.length === 0) return null 
            let shortestAlbum = music[0]
            for(let i=0; i< music.length; i++){
                if(shortestAlbum.length > music[i].length)
                shortestAlbum = music[i]
            }
            return shortestAlbum
        }
    
    }
 




// create your Music class:

// don't change below
module.exports = Music;
