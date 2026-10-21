# README.md

# Project Description

This project uses the Dog API to retrieve and display random dog images. Users can click a button to load a new dog image and view different dogs each time.  The application demonstrates how to retrieve, process, and display API data using JavaScript.

# API Used

API Endpoint: https://dog.ceo/api/breeds/image/random

The API returns a random dog image URL in JSON format.

# API Reponse Example

The Dog API returns a JSON object similar to: {"message": "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg","status": "success"}

The application accesses the image URL through the message property: data.message

The image URL is then assigned to the src property of a dynamically created image element and displayed on the page. 

# Data Path
1. User clicks the "Load Random Dog" button.
2. JavaScript sends a request using fetch().
3. The Dog API returns JSON data.
4. The JSON response is converted into a JavaScript object.
5. The image URL is extracted from the response. 
6. An image element is created dynamically.
7. The image is displayed on the webpage.
8. A success message and image count are shown

# Refinement Added

I added a dog image counter that tracks how many dog images have been viewed during the session. 

This refinement improves the user experience by providing feedback and demonstrating additional JavaScript functionality.

# Challenge Encountered

One challenge was understanding how to work with data returned from an API.  Unlike regular variables, API data is not immediately available and must be retrieved asynchronously. 

I solved this challenge by using fetch() and chaining .then() methods to wait for the response before processing the data.

# What I Learned

Through this project I learned: 
* How APIs provide data to web applications
* How fetch() retrieves information from a server
* How JSON data is converted using response.json()
* How to dynamically create HTML elements with JavaScript
* How to display data received from an API
* How to handle loading states and errors.
* How to update webpage content without reloading the page


## Code Explanation:

HTML Document:

Tells the browser this is an HTML webpage -- <!DOCTYPE html>
Starts the HTML document and tells the brower the page is written in English -- <html lang="en">
Begins the section that contains information about the webpage. -- <head>
Allows teh webpage to display special characters and symbols correctly -- <meta charset="UTF-8">
Sets the title that appears on the browser tab -- <title>Random Dog Viewer</title>
Starts the CSS Section -- <style>
uses arial font, center everything on teh page and adds space aroudn the page edges -- body {
Styles all the dog pictures, width is normally 400 pixels, won't overflow small screens, adds spacing above the image and rounds image corners -- img {
Styles the button, makes button larger, and changes mouse cursor to a hand when hovering -- button {
Styles the message area, adds spacing and makes text bold -- #message { 
Ends the head section -- </head>
Begins the visible portion of the webpage -- <body>
Displays the main heading on the page -- <h1>Random Dog Viewer</h1>
Creates a button the user clicks to get a dog image, <button id="dogBtn">Load Random Dog</button>
creates a paragraph where status messages appear -- <p id="message">Click the button to load a dog image.</p>
an empty container where JavaScript will place the dog image -- <div id="dogContainer"></div>
Connects the JavaScript file to the webpage -- <script src="jsscript.js"></script>

JavaScript: 

Stores the button in a variable so JavaScript can use it -- const button = document.getElementById("dogBtn");
Stores the message paragraph in a variable -- const result = document.getElementById("message");
Stores the container where dog images will be displayed -- const dogContainer = document.getElementById("dogContainer");
Creates a variable to count how many dog images have been viewed -- let dogCount = 0;
Runs the code when the button is clicked -- button.addEventListener("click", () => {
Shows a loading message while waiting for the API -- result.textContent = "Loading dog image...";
Sends a request to the Dog API -- fetch("https://dog.ceo/api/breeds/image/random")
Converts the API repsonse into JSON format -- .then(response => response.json())
Runs fater the JSON data has been received -- .then(data => {
Removes any previous dog image -- dogContainer.innerHTML = "";
Creates an image element -- const dogImage = document.createElement("img");
Sets the image source to the dog image URL from the API --dogImage.src = data.message     
Provides alternate text if the image cannot load -- dogImage.alt = "Random Dog";     
Sets image width to 400 pixels -- dogImage.width = 400;        
Adds the image to the webpage -- dogContainer.appendChild(dogImage);         
Increases the count every time a dog image is loaded -- dogCount++;         
Displays a success message and the total number of dog images viewed. -- result.textContent = `Success! Dog image loaded. Dogs viewed: ${dogCount}`;           
Runs if something goes wrong -- .catch(error => {          
Displays an error in the browser console for troubleshooting -- console.error(error);
Shows an error message to teh user -- result.textContent = "Unable to load dog image";