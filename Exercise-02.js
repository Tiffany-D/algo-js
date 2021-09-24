// ===: returns true if both operands have exactly the same value. Else it returns false.
// !=: returns true if both operands don't have the same value.
// >: returns true if the first operand is strictly greater than the second one.
// <: returns true if the first operand is strictly lower than the second one.
// >=: returns true if the first operand is greater than or equal to the second one.
// <=: returns true if the first operand is lower than or equal to the second one.

// Logic operators

// &&: returns true if both operands are true.
// ||: returns true if any of the operands are true.
// !: only takes one operand. Inverse the value of its operand. If it was true it becomes false. If it was false it becomes true.

// Combine operators

// If you combine multiple operators JavaScript will apply some priorities rules -> The precedence. But these are hard to learn and remember so it is advised to frequently use parenthesis to combine them. Examples:

// (a > 2) && (b < 4): returns true only if a is greater than 2 and b is lower than 4.
// (x >= y) || (y === z): returns true only if x is greater than or equal to y or y is equal to z.
// !(a < 2): returns true only if a is not lower than 2. This is the same thing than writing a >= 2.
// (!(a < b) && (x > z)) || !(i === j): huu... try to guess !




// Exercise 2.1

// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".
// const readlineSync = require("readline-sync");
// let age = readlineSync.question("How old are you ?");

// if ((age >= 18)) {
    // console.log("You're an adult");
// } else {
    // console.log("You're not an adult");
// }




// Exercise 2.2

// Ask the user to enter three numbers: minAge, maxAge and currentAge. Display if current is between min and max.

// Bonus: if minAge is greater than maxAge, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)

// const readlineSync = require("readline-sync");
// let minAge = readlineSync.question("Can you give me a number ?");
// let maxAge = readlineSync.question("Can you give me another number ?");
// let currentAge = readlineSync.question("Another one?");

// if ((currentAge > minAge) && (currentAge < maxAge)) {
    // console.log(currentAge);
// } else if
    // ((minAge > maxAge)){
    // console.log("Error, you're as stupid as a doorknob.");
    //}



    // Exercise 2.3

// Display all even numbers between 1 and 100.

// Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. The second one should use for and make a loop that will execute 50 times.


//let x = 0;
//while (x <= 100) {
    //console.log(x);
    //x += 2;
//}


//let x = 1;
//while (x <= 100) {
    //console.log(x);
    //x += 1;
//}


//for (let x = 1; x <= 50; x += 1){
    //console.log(x);

//}


//Exercise 2.4

//Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.




//let x = 0;
//while (x <= 100) {
    //console.log(x*2);
   //(x += 2) ;
//}

//let y = 1;
//while (y <= 100) {
    //console.log(y * 3);
    //(y+= 1)
//}




//Exercise 2.5

//Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
//const readlineSync = require("readline-sync");
//let question = readlineSync.question("What's your favourite number?");
//let sure = readlineSync.question("Are you sure?");

//while (question != 42) {
    //console.log(sure)
    //(question===42)
//}

//if (question != 42) {
    ////console.log(sure); 
    //if (sure === yes) {
        
 //EXercice 2.5 not finished



//Exercise 2.6

//Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

//const readlineSync = require("readline-sync");
//let number = readlineSync.question("Write a number between 1 and 7");


//if (number === 1) {
    console.log(Monday)
//}

//if (number === 2) {
    //console.log(Tuesday)
//}

//if (number === 3) {
    //console.log(Wednesday)
//}

//if (number === 4) {
    //console.log(Thursday)
//}

//if (number === 5) {
    //console.log(Friday)
//}

//if (number === 6) {
    //console.log(Saturday)
//}

//if (number === 7) {
    //console.log(Sunday)
//}


//Exercise-02 not finished















//for (let x = 1; x <= 100; x *= 2){
   // console.log(x);
//} (incursive bidule)