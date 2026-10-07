# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I decided to add a timed behavior example to the Gross Pay Calculator and Payroll Countdown

Here is what the Gross Pay Calculator code now does: 
The new timer coding is on my JavaScript file lines 33-57.  Here is the line by line coding explanation. 
Line 34 creates the main function of calculateGrossPay. This function runs when teh user clicks the gross-pay button. 
Line 35 this puts this message in the brower console so I can trace when the function begins. 
Line 36 This code checks whether the user entered both hours and an hourly rate.  The ! means not. so it states if the inputs are not valid run the code following.
Line 37 This displays a debugging message in the browser console. 
Lines 38-40 This uses the previous function of displayResult to show an error message on the webpage.  The grosspayResult tells the JavaScript where the message shoudl be displayed.  The return (line 39) stops the function when the information is missing.  
Line 41 calls the getHoursWorked function and stores the result in the hours variable
Line 42 calls the getHourlyRate function and stores the result in the rate variable
Line 43-44 Displays the entered values in the browser console alsong with the quoted message.
Line 46 this is what immediately displays on the webpage.  This is a waiting message. 
Line 48 This line temporarily disables the button. This line prevents the user from continuing to click it while the timer is running. 
Line 49 This line starts the timer.  The rest of code inside this function will run later rather than immediately. 
Line 50 After the delay, this will run the calculatePay function and store the answer in grossPay
Line 51 This line displays the calculated gross pay amount in the console
Line 52 This line displays the final gross pay results on the webpage. The addition of toFixed(2) makes the amount show two decimal places. 
Line 53 This code turns the button back on after the calculation finishes. 
Line 54 Ends the timed function and sets the delay to a two-second delay

Here is what the Payroll Countdown code now does line by line: 
Line 88 creates a function called showPayrollCountdown when the payroll countdown button is clicked.
Line 89 Immediately puts the message Starting payroll countdown in the browser when clicked.
Line 91 This line tells the user that the process has started
Line 93 This line temporarily disables the button while the countdcown is processing 
Line 94 This line starts the first timer. 
Line 95 After the first delay is finished this line changes the waiting message.  This way the user can see evidence that there is something happening. 
Line 96 Runs the first timed message after one second
Line 98 This starts a second timer to get the final result
Line 99 Calls the payroll calculation function that already exists and stores the number of remaining days.
Line 100 This line replaces the waiting message with the final payroll countdown result
Line 101 This line places a completion message in the brower console so I can trace the exact time when the delayed code finishes.
Line 102 This line turns the payroll button back on
Line 103 This will give the final results after three seconds
Line 104 closes the function


Here is what happens in order:
When the payroll button is clicked, the order is: 
    1. Happens Immediately
        a. console.log - "Starting Payroll Countdown"
        b. payrollBtn.disabled = true
    
    2. Happens after one second
        a. displayResult(payrollCountdown, "Payroll date found. Calculating days remaning...")
    
    3. Happens after three seconds
        a. const daysRemining = daysUntilPayroll()
        b. displayResult(payrollCountdown, "Days until next payroll: " + daysRemaining)
        c. payrollBtn.disabled = false

** What can happen now? 