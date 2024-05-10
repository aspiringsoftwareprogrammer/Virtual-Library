/**
Media Class
In Media.js, create a Media class. The Media class should have the following properties and methods:
title: the title of the media (string)
year: the year the media was produced (number)
genre: the genre of the media (string)
totalMediaCount: A static property that tracks how many Media items have been created
summary(): a method that returns a summary of the media (string) as "Title: <TITTLE>, Year: <YEAR>, Genre: <GENRE>"
Export the Media class using module.exports.
In index.js, import Media using require.
 */
// create your Media class:
class Media{
    static totalMediaCount = 0;
    constructor(title, year, genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount += 1
    }
   summary(){
    return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
}
   }

// uncomment below to export it:
module.exports = Media;
