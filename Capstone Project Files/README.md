# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
For this assignment I wanted to add a Gross Pay Calculator but wanted to also keep my payroll countdown, so I just added another button below that.  I will eventually add this payroll calculator button to the employee resource page instead of the index page but that is a future move.

HTML:
AI Usage Note:  I used AI to help me figure out why the Quick Payroll Facts on the Home page was overlaying the rest of the page when viewed on different devices.  The AI suggested that I add a new div class called layout and then make the aside class of sidebar and main class page as "siblings"  Doing this allowed me to change my CSS file to enable them to sit side by side.  What was happening before was the sidebar was floating in on the page and I had put in an position absolute in the CSS file for the sidebar.  I thought that putting that in there would make it stay on the side where I wanted it, which it did, however it also didn't allow the sidebar to flex when viewed on different devices.  

I made the changes and then viewed the site again.  Now the quick facts sections flexs like the rest of the page.  