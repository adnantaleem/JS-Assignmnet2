// 1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Pleas enter your first name.");
var lastName = prompt("Pleas enter your last name.");
alert (firstName + " " + lastName + " Welcome to our website");

// 2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var fvtMobile = prompt("please enter your favorite Mobile");
document.write("My fvt phone is " + fvtMobile + "<br>" + "Length of string: " + fvtMobile.length + "<br>");
document.write("<br>")

// 3 Write a program to find the index of letter “n” in the word“Pakistani” and display the result in your browser .
var country = "Pakistani"
document.write("String is : " + country + "<br>" + "Index of n: " + country.indexOf("n")) ;
document.write("<br>")

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser
var world = "Hello World";
document.write("String: " + world + "<br>" + "Last index of l: " + world.lastIndexOf("l"));
document.write("<br>");

// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser
document.write("String: " + country + "<br>" + "Chractor at index 3 " + country.charAt(3));
document.write("<br>")
// 6. Repeat Q1 using string concat() method.

document.write(firstName.concat(" ",lastName) + " welcome to our website");
document.write("<br>");

// 7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser
var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After Replacment: " + replaceCity);
document.write("<br>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g , "&");
document.write("Message" + "<br>"+ message);
document.write("<br>");
document.write("Message after Replachment" + "<br>"+ newMessage);
document.write("<br>");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var str = "472";
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof(str) + "<br>");
var num = Number(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num) + "<br>");

// 10. Write a program that takes user input. Convert and show the input in capital letters.
var fruit = prompt("enter your fvt Fruit Name");
document.write("User Input: " + fruit + "<br>");
document.write("Upper Cases: " + fruit.toUpperCase() + "<br>");

var program = prompt("Enter your Fvt Programing Language");
var programFirst = program.slice(0,1).toUpperCase();
var programLast = program.slice(1).toLowerCase() ;

document.write("User Input: " + program + "<br>");
document.write("Title Cases: " + programFirst + programLast + "<br>");

// 12. Write a program that converts the variable num to
// string. var num = 35.36 ; Remove the dot to display “3536” display in your browser;

var num = 35.36;
document.write("Number: " + num + "<br>");
var strNum = num.toString();
var newNum = strNum.replace("." , "");
document.write("Result: " + newNum + "<br>");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
var userName = prompt("Enter Your User Name");
var illegalChars = /\W/;
if(illegalChars.test(userName)){
    alert("lease enter valid Username. Use only numbers, alphabet and underscore")
}
else if(userName==""){
    alert("Please fill username field");
}
else{
   alert("Thanx for enter your User name");
};

// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the givenitem is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var bakerySearch = prompt("Welcome to our Bakery what to you want to order")
bakerySearch = bakerySearch.toLowerCase();

var productIndex = bakery.indexOf(bakerySearch);
if(productIndex === -1){
    alert("We are sorry " + bakerySearch + " is not available in our bakery");
}else{
    alert(bakerySearch + " is available in our baker at index: " + productIndex);
}
// 16. Write a program to convert the following string to anarray using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var universty = "University of Karachi";
arr = universty.split("");
for(var i = 0; i< arr.length; i++){
    document.write(arr[i] + "<br>")
};

// 17. Write a program to display the last character of a user input.

var uInput = "Pakistan";
var lngt = uInput.length;
var result = uInput.charAt(lngt-1);
document.write("User input:  Pakistan" + "<br>" + "Last Charactor of input is: " + result );

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
var countNumber  = text.match(/the/g);
document.write("Text: " + text + "<br>");
document.write("There are " + countNumber.length + " occurrences(s) of word 'the'");