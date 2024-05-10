/**
Movie Class
In Movie.js, create a Movie class. The Movie class should be a subclass of Media. Import Media into the Movie.js file using require.
Music should have the following properties and methods:
director: the director of the movie (string)
duration: the duration of the movie in minutes (number)
rating: the average rating of the movie (number between 1-5)
summary(): a method that returns a summary of the movie, including the director, duration, and rating (string) as
 "Title: <TITTLE>, Director: <DIRECTOR>, Year: <YEAR>, Genre: <GENRE>, Duration: <DURATION>, Rating: <RATING>"
The Movie class should have a static method longestMovie that takes an array of Movie objects and returns the Movie with the longest duration.
Export the Movie class using module.exports.
In index.js, import Movie using require.

 */

// import the Media class:

const Media = require("./Media")

class Movie extends Media{
    constructor(title, year, genre, director, duration, rating){
        super(title, year, genre)
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static longestMovie(movie){
        if (movie.length === 0) return null; 
        let longestDuration = movie[0];
        for (let i = 1; i < movie.length; i++) { 
            if (movie[i].duration > longestDuration.duration) {
                longestDuration = movie[i]; 
            }
        }
    
        return longestDuration; 
    }

    }

// create your Movie class:

// don't change below
module.exports = Movie;