# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
The first thing I did was add a group of console.log in the Javascript.  I added a console.log message after every steph in my two calculator button functions, so I am able to see the process step through on the console log. 

Then I added a bug two intentional bugs to break the program.  The first was to change the selector for Gross Pay Button.  I changed this from grosspayBtn to grossPayBtn.  This could definitely be a easy error to make naturally as it is just a capital letter that breaks the code.  The second bug that I created was to change the calculation of const grossPay = hours * rate to const grossPay = hours + rate.

At this point, I ran the program to see what happens.  

I loaded the web page and right away I got a console log error that it cannot read the properties.  I also went to use the gross pay calculator and it didn't calculate anything.  Because I have a console.log message of starting gross pay calculator put in my Javascript, I knew that it was even starting the calculator function, which tells me that my error has to be above that first console log message.  I then can take a closer look at my selectors on the javascript.  So, I find the spelling error for the Gross Pay Button selector and change the selector to match my HTML.  I then refresh my site and check to see that everything is working.  

I then put in the hours and hourly rate and then I get my console.log messages.  But...I notice that with my message something doesn't look right.  
    Starting Gross Pay Calculation
    script.js:10 Hours Entered:  80
    script.js:11 Hourly Rate Entered:  40
    script.js:18 Inputs are valid, continue with calculation
    script.js:21 Calculated Gross Pay:  120

My console logs show me that the hours entered were 80 with an hourly rate of 40.  Just by looking at my messages, I can tell that something is incorrect because the gross pay be more than 120.  This tells me there is something incorrect with the math in my coding.  When I investigate, I find that instead of doing multiplication, I accidentally used addition.  I correct this issue and then refresh.  These are my new console.log messages
    Starting Gross Pay Calculation
    script.js:10 Hours Entered:  80
    script.js:11 Hourly Rate Entered:  40
    script.js:18 Inputs are valid, continue with calculation
    script.js:21 Calculated Gross Pay:  3200

I can do a little quick math to determine that the gross pay calculated looks much better and is now correct. 

I also clicked on the Payroll Countdown to view my console message and determined that everything looked as it should with these messages. 
    Calculating days until next payroll
    script.js:33 Today's Date:  Wed Sep 23 2026 10:00:30 GMT-0500 (Central Daylight Time)
    script.js:35 Next Payroll Date:  Thu Sep 24 2026 19:00:00 GMT-0500 (Central Daylight Time)
    script.js:38 Days remaining:  2

Reflection:

I used console.log statements to follow the flow of my code and inspect the variables in my code. The first issues was a mismatch for the selector between the HTML and Javascript.  This caused the querySelector to return a null value, which made the click event not happen.  The second issue was a eror in the calculation.  The console output helped identify exactly where the problems occured and also verified that both fixes were successful.  This assignment improved my understanding of JavaScript debugging, seletors, event listeners, and validation testing. 