# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I added a payroll countdown to the Index page of my website.
The first thing I did was to add a h2 header to put in the Payroll Calculator header.  Then I added a little message to explain what happens if the button is clicked.  
I added a button id of check payroll countdown to the html and then finally, a message to give the payroll countdown. 

Then in my CSS file, I added the button element there to add my padding and a border radius.

In my Javascript file, I did two constants with query selectors.  One for the payroll button and other to add the output of the countdown

I added a function to take today's date and the next payroll date.  
There are four consts in my formula.  The 1st is getting the today's date, the second is getting the next payroll date, the 3rd is a formula to calculate the number of milliseconds in a day to convert the difference between the two dates into days and finally the 4th is doing a formula to take the next payroll date minus the current date and then divide by the number of milliseconds in a day.  The function then returns the number of days until payroll. 

Then I put the logic in to have the javascript listen for the click of the payroll button.  When it hears this click it will then perform the function to calculate the number of days until the next payroll. 