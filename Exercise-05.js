//Exercise 5.1

//Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

//Name
//Production year
//Names of the cast members (there can be as much as the user want)
//That function must gather all the data in a single object and return it. The data structure must be elegant.

//Create a program that use that function to generate a TV serie object and display it to the user in JSON format.

const readlineSync = require("readline-sync");
const nameOfTheShow = readlineSync.question("What's your favourite TV serie?");
const yearOfProduction = readlineSync.question("What's the year of production?");
const castMembers = readlineSync.question("Name of the members of the cast?");

function askTvSerie() {
    let serieTV = {
        "show": `${nameOfTheShow}`,
        "year": `${yearOfProduction}`,
        "cast": `${castMembers}`,
    };
    console.log(serieTV); 
}

askTvSerie();


//Exercise 5.2

//Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

//Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.


//function randomizeCast(tvSerie) {
  //let serieTV = {
    //"show": `${nameOfTheShow}`,
    //"year": `${yearOfProduction}`,
    //"cast": `${castMembers}`,
  //};
 //console.log(tvSerie.serieTV[cast].random);
//}
 

//randomizeCast();