# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
Here are the changes I made to the JavaScript to try to make it clearer.

1.  I converted the function for calculatePay and displayResult to an arrow function.  This will perform the same functions but uses less code to do so.  I did this becuase the calculatePay was a simple function that just multiplies the hours by rate and returns the result.  The change made the code more concise and incorporated the arrow technique that was discussed.   

2. I changed the name of the function calculatePay to calculateGrossPayAmount.  This new name tells us exactly what is being calculated with this function. 

3. I moved the payroll date into a constant variable so it is stored in one location instead of being hard-coded inside the function.  This makes the code easier to maintain because when the payroll date changes, I only need to update it in one place.  

