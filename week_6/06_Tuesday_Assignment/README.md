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

I then refreshed the site, clicked on the payroll countdown and it gave me the number of days until payroll as expected. And...my console log message that I put inside the function also showed up.

Using this suggestion from AI, I made the change to the Javascript file to match the HTML at PayrollBtn. 

The first bug I created was changed the ID on the HTML file for Hourly Rate.  On the Javascript the ID is HourlyRate, however on the HTML it is hrlyRate.
