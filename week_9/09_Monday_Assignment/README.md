# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

Code Explanation: 
I added a function for setButton State.  This function accepts two pieces of information, the button and whether the button should be enabled or disabled.  The purpose of this function is to control the button's enabled or disabled state.

My setButtonState(grosspayBtn, true), has this happen. First teh grosspayBtn is passed into the function, then if true is passed as the disabled value the button become disabled.  My setButtonState(grosspayBtn, false) has this happen.  First the grosspayBtn is passed into the function, if false is passed as the disabled value, the botton become enabled again. 

I created the setButtonState() function to reduce repeated code.  Instead of writing .disabled=true and .disabled=false multiple times throughtout the program, I created one function that handles that responsibility.  This mades the code easier to read, easier to maintain, and follows the modular programming concept.  The function name clearly describes its job, which helps separate responsibilities and keeps even handlers simpler. 

I had previously separated teh program into smaller functions with clear responsibilities.  Functions such as getHoursWorked() gather data, calculatePay() performs calculations, and displayResults() updates the page.  This made teh even listeners simpler and easier to understand because each function now performs a specific job. 