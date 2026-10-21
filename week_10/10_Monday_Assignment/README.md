# README.md
Code Explanation:

HTML Document:

Tells the browser this is an HTML webpage -- <!DOCTYPE html>
Starts the HTML document and tells the brower the page is written in English -- <html lang="en">
Begins the section that contains information about the webpage. -- <head>
Allows teh webpage to display special characters and symbols correctly -- <meta charset="UTF-8">
Sets the title that appears on the browser tab -- <title>Age Predictor</title>
Ends the head section -- </head>
Begins the visible portion of the webpage -- <body>
Displays the main heading on the page -- <h1>Age Predictor</h1>
Creates a text box where the user can type a name, Type "text" creates a text field, id="nameInput" gives the element a unique name so it can be found in the JavaScript, and placeholder displays the instructions -- <input type="text" id="nameInput" placeholder="Enter a name" />
Creates a button the user clicks to start the age prediction, id="predictBtn allows the JavaScript to locate the button, the text Predict age is what appears on the button -- <button id="predictBtn">Predict Age</button>
Creates an empty paragraph where the prediction will be displayed -- <p id="result">Your predicted age will appear here.</p>   
Connects the JavaScript file to the webpage -- <script src="jsscript.js"></script>


JavaScript: 

Finds the Predict Age button in teh HTML and stores it in the variable button -- const button = document.getElementById("predictBtn")
Finds the results paragraph and stores it in the variable result -- const result = document.getElementById("result")
Waits for the user to click the button, addEventListener() listens for an event.  The event in this case is a click. button.addEventListener("click", () => {
Gets the text the user typed into the input box and stores it in the variable name. -- const name = document.getElementById("nameInput").value;
Sends a request to the Agify API, fetch() contacts the API and ${name} inserts whatever name the user entered. -- fetch(`https://api.agify.io?name=${name}`)
Converts the API response inot JSON data that JavaSript can read -- .then(response => response.json())
Runs code after the JSON data has been received.  The variable "data" now contains the API response. -- .then(data => {
Displays the returned data in the brower's developer console. -- console.log(data);
Tells JavaScript to place text inside the result paragraph. -- result.textContent
Builds a message using values from the API, data.name accesses the name and data.age accesses the predicted age -- `${data.name} is predicted to be ${data.age} years old.`;
Ends the second .then() block -- })
Runs if something goes wrong while retrieving data such as Internet connection, API unavailable, etc. -- .catch(error => {
Displays the error information in the browser console for troubleshooting -- console.error(error);
Shows an error message on the webpage so the user knows something failed -- result.textContent = "Error retrieving data";
Ends the next block -- });
Ends the click event listener -- });


Reflection:
I used the Agify API to retrieve age predication data based on a user's name.  First, I used fetch() to request information from the API.  After the response arrived, I converted it from JSON into a JavaScript object and inspected the structure with console.log().  I identified the age and anem properties as useful values and displayed them in the user interface.  One challenge was understanding how to access data from the returned object. I solved this by examining the JSON structure in the browser console and using the corret access paths, data.name and data.age.  This project demonstrates how to retrieve JSON data from a web API, inspect the data structure, and display selected information to the user. 