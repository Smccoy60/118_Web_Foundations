# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
For this assignment I wanted to add a Gross Pay Calculator but wanted to also keep my payroll countdown, so I just added another button below that.  I will eventually add this payroll calculator button to the employee resource page instead of the index page but that is a future move.

HTML:
I first added a div class becuase I wanted to be able to do some different things in the CSS file for formatting this section of my page.  I used this class to change the display as I wanted the fields to display in columns rather than vertically.  I then created two different labels for my inputs, one for hours worked and one for hourly rate.  After my labels were created then I added the input coding with a place holder to show what should be entered in each input box. The last portion of my HTML coding was to actually at the button which is labeled Calculate Gross Pay.  And...finally a paragraph mesage to show the Gross Pay Result. 

CSS: 
I added a couple of elements to the CSS file.  I added margin and padding for the elements of label, input, and button.  I also wanted my p element to be a bit smaller than the h1 header so I adjusted the font-size.  I also used my div class of payInputs to make the input fields display differently becauase I wanted them to be side by side. 

JavaScript:
I just added more code to the bottom of the existing js file as I wanted to keep my days to payroll calculator that I did on Monday. The first thing in the code was to create my const so the script can go the HTML document and find the elements.  There are four different elements that I want my script to find: hours worked, hourly rate, my calculate gross pay button and the ending result.  The next section on my code was to do the function to return my gross pay results.  I want to first grab the input of hours worked.  I have the nubmer in front of the hours worked and hourly rate.value becuase I want it converted to a number.  

Then the code says that if either of the inputs are left empty, the "error" message of Please enter both hours and hourly rate appears.  I did have to use AI to determine how to get the coding to do the OR statement becuase I wanted to be able to have the code look at both inputs at one time instead.  If either are empty, I wanted the message to show as it wouldn't have calculated correctly.  The AI told me that I had to use the || which means "OR". The return indicates that if one of the inputs are not entered to end the script.  However, if they are entered then, the code says to calcaulate the gross pay by taking the hours times the rate.  The next step is to take the gross pay result and display it.  It will display with Gross Pay: $ which is in the quotes and then put in the anser of gross pay from the previous calculation and then finally to fix it to always display at two decimal places (fixed2).  

The last is to add the event listener to listen for the click on the Calculate Gross Pay button, which is really what starts the entire process. 


Reflection:
The page behavior help me understand that JavaScript is what makes a web page interactive.  I understood the code as seperate lines, but when adding javascript and watching the page respond when clicking the buttons it showed me how the different parts work together.  I learned that the queryselector connects the JavaScript to the HTML elements, that functions perform the actual work and the event listener are what is waiting for the end user to do the action before kicking everything into motion.  Actually watching the Gross Pay Calculator work and seeing how it appeared on the page as I was creating it made it easier to understand and watch the flow of data.  

Also, my next question after doing this assignment is what happens if someone enters a value of "0", it doesn't stop the code from running like I may intend it to as that wouldn't be a valid input for either a rate of number of hours.  But, my current code says it has to be a "blank" before it stops the code from running.  How would we go about correcting that issue? 