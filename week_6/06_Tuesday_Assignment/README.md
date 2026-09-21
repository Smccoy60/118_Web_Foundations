# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
For this assignment I wanted to add a Gross Pay Calculator but wanted to also keep my payroll countdown, so I just added another button below that.  I will eventually add this payroll calculator button to the employee resource page instead of the index page but that is a future move.

HTML:
I created three different bugs in between the Index.html file, the javascipt file and the EmployeeResources.html file. 

The first bug I created was changing the ID for Payroll Button.  This one I changed on the Javascript to PayrolLButton and on the Index HTML the ID is PayrollBtn.  When I viewed this in the site, it created a console log message of:
    script.js:12 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')

This message gave me a clue to go to line 12 in my javascript file, which is my active event listener for the Payroll Button.  I added a console log message inside my first function, days until payroll.  When I ran this, my console log didn't run so I knew that this function wasn't being performed at all.  I used this example to put into the AI to ask for corrections.  Here is my AI information:
    I am working on trying to debug the reason that payroll countdown button isn't working when selected. Give me possible solutions/fixes. Do not make changes to any of the code.
    10:28 AM
        I found the bug — there's an ID mismatch between your HTML and JavaScript.
        Root cause (Payroll Countdown button):
        In script.js:1, you're selecting:
        But in index.html:60, the button's actual id is:
        "#payrollButton" ≠ "payrollBtn", so document.querySelector returns null. When the script then calls payrollBtn.addEventListener(...), it throws a TypeError: Cannot read properties of null (reading 'addEventListener') — you'd see this in the browser console. This also halts execution of the rest of the script ile, which is likely why your Gross Pay button may behave unexpectedly too (its listener never gets attached if the error occurs first).
        Fix options:
        Change the JS selector to match the HTML id: document.querySelector("#payrollBtn"), or
        Change the HTML id to match the JS: <button id="payrollButton">

Using this suggestion from AI, I made the change to the Javascript file to match the HTML at PayrollBtn.

I then refreshed the site, clicked on the payroll countdown and it gave me the number of days until payroll as expected. And...my console log message that I put inside the function also showed up.

 The second bug that I created was a change on the ID on the index html file for hourly rate.  On the Javascript the ID is HourlyRate, however on the HTML it is hrlyRate.  When I enter the hours and the hourly rate and click the calculate gross pay button, nothing happens on the index html.  I got a console log message of:
    script.js:24 Uncaught TypeError: Cannot read properties of null (reading 'value')
    calculateGrossPay	@	script.js:24

This helps me by telling me to first begin looking in row 24 of my script.js file.  When I go to that line, i looked at the code, (const rate = Number(hourlyRate.value)) and find where that is referenced in my html document.  I find in my html document that it is refeerence with a different ID, (input id="hrlyRate" type="number" placeholder="Enter Hourly Rate" />)  These two ID don't match exactly which is why there is an error occuring.  I updated my html document and then refresh to see what happens. 

Once I refresh the html, enter in the hours and hourly rate, select the calculate gross pay button and it then calculates. My console log doesn't show any errors, so the change worked and it is now fixed.  

The third bug that I created was in the way the javascript was setup.  This actually happened to me when I first created these buttons last week. I couldn't figure out why the gross pay calculator was working on the index page but not on the employee resource page, so I stepped through the code that I had.  What I took me a while to figure out was that the script started with the payroll countdown button.  By putting the console.log message in there to "show the payroll countdown", I noticed that this message wasn't even getting put in the console log when it was ran on the employee resources page, however it was in the console log on the index page.  

This helped me to realize that because the employee resource page does not have a payroll countdown button, the script doesn't go any further.  Therefore, it is never processing the gross pay calculator code for the resource page html.  In order to fix this, I had to reverse the coding for the buttons, putting the gross pay calculator code BEFORE the payroll countdown code. 

After changing the code around on the javasript for the buttons, I refreshed my pages and tried again.  This time when I went to the resource page, entered in my hourly rate and hours worked, everything calculated.  And...my console log message appeared as expected.  