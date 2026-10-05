# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I decided to add a timed behavior example to the Payroll Countdown button.  

Here is what my new function now does: 
The first line is to create a function named showPayrolCountdown.  This function will run when the user clicks the Payroll Countdown button.  The next line displayResult calls my existing function to display the countdown results, however instead of showing the answer immediately, it will show a waiting message first.  

The next line payrollCountdown identifies where the message should appear, which ties back to the HTML element.  THe next part of the code shows the message that the user will see, which is the "waiting state" that I just setup.  The next part of the function, setTimeout starts the timer, which is telling the browser to wait before running the code, which is my timed behavior.  

The final line displayResult is what the program runs after teh timer expires.  The result will display, "Days until next payroll: 4"


Here is what happens in order:
The user clicks the Payroll Countdown button, a waiting message is displayed immediately.  The JavaScript file then starts a time using the setTimeout().  While the timer is running, the browser will continue to operate as normal.  After the 3-second delay, the payroll countdown is calculated and displayed.  The order of events are: click button - display waiting message - timer runs - calculation occurs - final result appears. 