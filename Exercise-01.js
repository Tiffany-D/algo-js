//Exercise 1.0 - Interactive Mode

//Launch node in interactive mode and use it to make an addition. Then repeat the same step until you have tested all five arithmetic operators we presented before.

// Interactive mode

// Launch node in Interactve Mode -> "node" in terminal.
//REPL stands for read-eval-print loop and basically means command line. To use it, you must first start Node.js from an operating system command line,
//via the command node.  



//Exercise 1.1

//Define a variable and display it in the console.

//let name = "Tiffany";
//console.log(name);

//Exercise 1.2

//Define three variables: name, firstName and city. Display them like this: "Your name is Gerard Lambert and you live in Paris.".

//let lastName = "Dessouroux";
//let firstName = "Tiffany";
//let city = "Liège";
//console.log("My name is" + firstName + lastName ,"and I live in" + city);



//Exercise 1.3

//Ask the user to enter its first name and display a message saying "Hello first name".

//let userName = readlineSync.question("What's your name?");
//console.log("Hello " + userName);

//Exercise 1.4

//Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.
//const readlineSync = require("readline-sync");
//let userName = readlineSync.question("What's your first name?");
//let lastName = readlineSync.question("What's your last name?");
//let city = readlineSync.question("Where do you live?");
//console.log("You're " + userName + lastName, "and you live in " + city);


//Exercise 1.5

//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

//You will have to perform a search on Google to know how to only keep the integer part of a number.
//const readlineSync = require("readline-sync");
//let decimalNumberOne = parseInt(readlineSync.question("Give a number with a decimal"));
//let decimalNumberTwo = parseFloat(readlineSync.question("Give another number with a decimal"));

//console.log(decimalNumberOne * decimalNumberTwo);

//Exercise 1.6

//Ask two integers to the user. Display the rest of the integer division of the two numbers.

//const readlineSync = require("readline-sync");
//let integerOne = readlineSync.question("Can you give me one integer ?");
//let integerTwo = readlineSync.question("Can you give me another integer ?");
//console.log(integerOne%integerTwo);


