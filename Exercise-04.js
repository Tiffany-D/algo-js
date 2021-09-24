//Exercise 4.1

//Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created.

//Write a documentation for the calcSurface function.

//let width = 20;
//let length =50;

//function calcSurface() {
    //console.log(width*length);
//}
//calcSurface();

//const readlineSync = require("readline-sync");
//let userQuestionOne = readlineSync.question("Can you give me the width of a rectangle?");
//let userQuestionTwo = readlineSync.question("Can you give me the length of a rectangle?");

//function calcSurface(){
    //console.log(userQuestionOne*userQuestionTwo);
//}
//calcSurface();



//Exercise 4.2

//Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

//Write a documentation for the rand10() function.

//You will have to search on Google how to generate random numbers in JavaScript for this exercise.

//function rand10(){
    //min = Math.ceil(1);
    //max = Math.floor(10);
//return Math.random()*(10-1)+1;
//}

//let randomNumber = Math.round(rand10(1, 10));

//console.log(randomNumber);

//Exercise 4.4

//Create a function named average(arr) that takes an array of numbers as argument and returns the average.

//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

//Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

//Write a documentation for all the functions you created.


const arr = [1, 2, 3, 4, 5];
const sum = 1+2+3+4+5;
const arrLenght = arr.length;

function average(arr){
    return sum/arrLenght;
}


