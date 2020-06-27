// Write a function that displays current date & time in your browser.

function date(){
    return new Date();
}
document.write("Date is " + date());
document.write("<br>");

// 2. Write a function that takes first & last name and then it greets the user using his full name.

function greet(){
    var fName = prompt("Enter your first name");
    var lName = prompt("Enter your last name");

    return fName + " " + lName + " Welcome to our website"

}
document.write(greet());
document.write("<br>");

// Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function add(){
    var fnum = +prompt("Enter your first value");
    var snum = +prompt("Enter your 2nd value");

    return fnum+snum;

}

document.write(add());
document.write("<br>");

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calci() {
    var val1,val2,answer,oper;
    val1=prompt("Type first number");
    oper=prompt("Type an operator");
    val2=prompt("Type second number");
    
    
    if(oper=="+"){
        answer=Number(val1)+Number(val2);
    }
    else if(oper=="/"){
        answer=Number(val1)/Number(val2);
    }
    else if(oper=="*"){
        answer=Number(val1)*Number(val2);
    }
    else if(oper=="-"){
        answer=Number(val1)-Number(val2);
    }
    else{
        answer = "some thing went wrong please correct your operator or enter number only"
    }
    
    return answer;
      }
    alert("Your Answer is " + calci());

    // 5. Write a function that squares its argument;

    function squareIt(number) {
        return Math.pow(number,2);
     }
     document.write(squareIt(Number(prompt("enter number to square"))));

// Write a function that take start and end number as inputs
// & display counting in your browser

function counting(){
    var starCount = Number(prompt("Enter number where you want to start counting"))
    var endCount = Number(prompt("Enter number where you want to end counting"))
    var count;
    for (var i = starCount; i <= endCount;i++ ){
       count = document.write(i + "<br>")      

    }
    return i
}
counting();
document.write("<br?")
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function longestWord(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}

document.write(longestWord('Web Development Tutorial'));
document.write("<br?")

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
function calcCircumference(radius) {
    var circumference = Math.PI * 2*radius;
    return circumference
  }
  document.write("the circumference is " + calcCircumference(56) + "<br>")
  function calcArea(radius) {
    var area = Math.PI * radius*radius;
    return area
  }
  document.write("The Area is " + calcArea(56) + "<br>");
    