# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I started with working JavaScript code for a Gross Pay Calculator and Payroll Countdown.

The original functions contained multiple responsibilites such as gatehring the input, validating data, performing calcuations, and displaying results.  During my first refactor pass, I separated those responsibilites into smaller funcitons with clear names. 

For the Gross Pay Calculator, I created: 
    inputsAreValid()
    getHoursWorked()
    getHourlyRate()
    calculatePay()
    displayResult()

For the Payroll Countdown, I created: 
    getPayrollDate()
    calculateDaysRemaining()
    showPayrolLCountdown()

I think that this makes the code easier to read and understand because each function now has a single responsibility.  I also reduced repeated logic by creating teh reusable displayResult function.  After refactoring, I retested the aplication and confirmed that the original behavior still worked correctly. 

Here is an explanation of my current code:

The top section of my code is the const that find the correstponsing element in the HTML page.  The Payroll Calculator finds hoursWorked, hourlyRate, grosspayBtn and grosspayResult.  

InputsAreValid() - checks wither the user entered values in both of the boxes. If there are hours and a rate entered in both boxes, then it returns "true" but if only one of them are entered, then it returns "false".  The return statement gets whatever the user typed into the input boxes. 

getHoursWorked() - gets the value from the Hours Worked input box and then converts it into a number. 

getHourlyRate() - gets the hourly rate value from input box and then converts it into a number.

calculatePay() - this performs the actual gross pay calculation.  Now all pay calculations happen in one place.  This function receives two pieces of information, the hours and the rate.  Then does a calculation of hours x rate. 

displayResult() - This function is telling where to display something and what to display.  This is helpful because now both the payroll and gross pay can use it.  It reduces repeated code.   

calculateGrossPay() - This is the main function as it rolls up all of the smaller functions before it. This will check the inputs, get the hours and rate, calculate the pay and then display the result. It does a validation check usning the inputsarevalid function described above.  If inputs are not valid, it will give the user a message and then stops the function immediately. 

The next section of the code is to get the values:
const hours - this calls the getHoursWorked function and gets that result
const rate - this calls the getHourlyRate function and gets that result
const grossPay - this calls the calculatePay function and gets that result

The display result shows the gross pay, but also has the fixed(2) to add two decimal places to the returned result. 
And finally the event listener, which starts the Gross functions once the calculate gross pay button is clicked. 

Payroll Countdown Section
The top section of my code is the const that find the correstponsing element in the HTML page.  The Payroll Countdown finds payrollbtn and payrollCountdown.  

getPayrollData() - a function whose job it is to tell us the next payroll date.  It returns the new date of 10/09/26.

calculateDaysRemaining() - finds the difference between dates.  Converst the difference to days and then rounds up.  

daysUntilPayroll() - This is the main function for this calculator.

The next section of the code is to get the values:
const today - this stores the current date
const payrollDate - this called the function above of getPayrollDate, which is the next payroll date. 
const daysRemaining - this calls the calculateDaysRemaining function and gets that result
The return gets the value back.
Then the function gets the payroll countdown on the webpage.

The display result shows the displays the remaining days until payroll on the webpage. 
And finally the event listener, which starts the Payroll Countdown function once the Check Payroll Countdown button is clicked.