/*1. Write a program that takes a positive integer from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number*/


var inpNumber = +prompt("Please enter number");
document.write("Number: " + inpNumber + "<br>");
document.write("Round off value: " + Math.round(inpNumber) + "<br>");
document.write("Floor value: " + Math.floor(inpNumber) + "<br>");
document.write("ceil value: " + Math.ceil(inpNumber) + "<br>");

document.write("<br>");
/* 2 Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number */

var inpNumber = +prompt("Please enter negtive number");
document.write("Number: " + inpNumber + "<br>");
document.write("Round off value: " + Math.round(inpNumber) + "<br>");
document.write("Floor value: " + Math.floor(inpNumber) + "<br>");
document.write("ceil value: " + Math.ceil(inpNumber) + "<br>");
document.write("<br>");

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var Num = +prompt("Please Enter your number to check absolute number");
Num = Number(Num);
var absNumber = Math.abs(Num);
document.write(absNumber);


/*4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:*/
var dice = Math.floor(Math.random() * 6) + 1;
document.write("<h2>Rendom Dice</h2>");
document.write("Rendom dice value is: " + dice);
document.write("<br>");

/*5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser */
var coin = Math.floor(Math.random() * 2) ;
document.write("<h2>Toss</h2>");
if(coin===1){
document.write("Rendom coin value Head")
}else{document.write("Rendom coin value Tail")};
document.write("<br>");

/*6. Write a program that shows a random number between 1 and 100 in your browser. */

var renNumber= Math.floor(Math.random() * 101) + 1;
document.write("<h2>Rendom Dice</h2>");
document.write("Rendom number between 1 to 100: " + renNumber);
document.write("<br>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Please enter your weight");
weight = parseFloat(weight);
document.write("The Weight of user is " + weight + " Kilogarm")


/*8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.*/

var Num = +prompt("Please enter a number between 1 to 10");
var rendomNumber= Math.floor(Math.random() * 11) + 1;
if(num === rendomNumber){
document.write(" congratulate your number is right" + "<br>");
}else{
document.write(" Sorry! Try Again" + "<br>");}

 


