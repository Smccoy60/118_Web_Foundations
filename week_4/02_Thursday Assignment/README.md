# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I added a function to determine OT hours and then further determine the gross pay based on those hours. 
The two lines in the code are to define the constants, which honestly, that probably would be better with let becuase they will more than likely change in value, but for this example I just used the const. 
Then I created my function, which is the calculate the gross pay for the individual using the two named const variables above.  
I did the let function for gross pay as this will not change and I do on to define how this will be calculated. 
The if function states that if the hours are greater than 40, it is going to figure the overtime hours, by taking the hours worked variable and subtrating the standard 40 hour work week.  Then it will calculate the gross pay, by taking the 40 hours and multiplying by the hourly rate then ADDING the calculated overtimeHours times hourly rate times 1.5.  The console log will print the number of overtime hours worked if this condition is met. 
If the first condition of over 40 hours is not met, then the program will skip down to the else statement that has been entered, which states that we will just simply calculate the gross pay.  This is done by taking the hours worked multiplied by the hourly rate.  There is a console.log statement to print no overtime hours worked if this is the condition that is met.
Regardless of which condition the program hits, it will always return the gross pay that has been calculated for either condition which is the code on line 7. 
On line 10, i have the const employeeGrossPay which calls the function, which it knows by the calculateGrossPay defined in the function. 
Then I finally have the console.log outputs, of hours worked, hourly rate and gross pay.

I've tested this with hours under 40 and hours over 40 and it calculates correctly.  

Reflection: JS feels different from CSS/HTML because the functions seem to "live" in the javascript, whereas the css file is basically the "decorator" for the pages.  And the HTML is what spells out the details of the pages.  So, it seems the javascript is kinda the brains behind the pages in respect to making the page intereactive with the end user. 