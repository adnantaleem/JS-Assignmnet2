// Write a program that displays current date and time in your browser.

var now = new Date();
document.write(now);

// . Write a program that alerts the current month in words.
// For example December.

var month = ["Januray", "Februry", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var day = [ "Sun", "Mon", "Tue", "Wed", "The", "Fri", "Sat"]
document.write("<br>");
for(var i = 0; i < month.length; i++){
    if(i === now.getMonth()){
        document.write("Current Month: " + month[i])
    };
};
// . Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.
document.write("<br>");
for(var i = 0; i < day.length; i++){
    if(i === now.getDay()){
        document.write("Today  is: " + day[i]);
    };
};
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
document.write("<br>");
if (now.getDay() === 0 || now.getDay() === 6){
    document.write("Its's a Fun Day");
} else{
    document.write("Its's a Working Day");
}
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
document.write("<br>");
if(now.getDate()<= 15 ){
    document.write("First Fifteen days of the month");
}else{
    document.write("last days of the month");
};

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

document.write("<br>");
document.write("Current Date: " + now + "<br>")
document.write("Elapse Miliseconds since January1, 1970: " + now.getTime() + "<br>")
document.write("Elapse Miliseconds since January1, 1970: " + (now.getTime()/1000/60/60) + "<br>")
// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
document.write("<br>");
if(now.getHours() <= 12){
    document.write("Its AM")
}else{
    document.write("Its PM")  
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate = new Date("july 22, 2020");
document.write("<br>");
document.write(laterDate + "<br>")

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramdanDate = new Date("june 18, 2015");
var pasDay = now.getTime()-ramdanDate.getTime();

document.write(Math.floor(pasDay/1000/60/60/24) + " Have passed sine ist Ramdan, 2015");
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var newObjDate = new Date(2015 , 0 , 1);

document.write("<br>");
document.write(newObjDate + "<br>");
document.write((now.getTime()-newObjDate.getTime())/1000 + " Seconds has passed since 2015 ")
document.write("<br>");
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser

var toDay = new Date(2020 , 05, 18);

document.write("Current Date: " + toDay + "<br>")
document.write(Math.floor((now.getTime()-toDay.getTime())/1000/60/60) + " Hour ago it was " + toDay )

// Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var dob = new Date(1988 , 05, 26);
document.write("<br>");
document.write("Your Age is: " + Math.round((now.getTime()-dob.getTime())/1000/60/60/24/30/12))
document.write("<br>");
document.write("Your Birth year is: " + dob.getFullYear() +"<br>");

// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
var customerName = "ABC Customer";
var currentMonth = month[now.getMonth()];
var numberOfUnit = 410;
var chargesPerUnit = 16;
var latePaymentCharges = 350;
document.write("<h1> K-Electric Bill</h1>");
document.write("customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnit + "<br>");
document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
document.write("<br>");
document.write("Net Amount Payable (With in due date): " + numberOfUnit*chargesPerUnit + "<br>");
document.write("Late Payment Charge: " + latePaymentCharges + "<br>");
document.write("Gross Amount Payable (After due date): " + (numberOfUnit*chargesPerUnit+latePaymentCharges) + "<br>");

