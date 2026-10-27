# README.md

# Project Description

This project uses the Dog API to retrieve and display random dog images each time the user clicks the "Load Random Dog" button.  The application demonstrates how to retrieve, process, and display data from an API.  

For Week 11, I added state management to the application.  The application now keeps track of how many dog images have been generated.  Each time a dog image successfully loads, the state is updated and teh new count is rendered on the webpage. 

# API Used

API Endpoint: https://dog.ceo/api/breeds/image/random

The API returns a random dog image URL in JSON format.

# API Reponse Example

The Dog API returns a JSON object similar to: {"message": "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg","status": "success"}

The application accesses the image URL through the 'message' property.

The image URL is then assigned to the src property of a dynamically created image element. 

# Data Path
1. User clicks the "Load Random Dog" button.
2. JavaScript sends a request using fetch().
3. The Dog API returns JSON data.
4. The JSON response is converted into a JavaScript object.
5. The image URL is extracted from the response. 
6. An image element is created dynamically.
7. The image is displayed on the webpage.
8. The dog count state increases by 1.
9. The render function displays the updated count on the webpage.
10. A success message is shown to the user.

# Refinement Added

For Week 11, I added state management to the Random Dog Viewer.

The state value is 'dogCount', which keeps tracks of how many dog images have been successfully generated. 

The state begins at 0:
```javascript let dogCount = 0 ```

Each time a dog image successfully loads, the 'updateDogCount()' function increase the state by 1. 

```javascript function updateDogCount() { dogCount++; renderDogCount();}```

After the state changes, the 'renderDogCount()' function displays the current value of 'dogCount' on the webpage.  

```javacript function renderDogCount() {dogCountDisplay.textContent = 'Dogs Generated: ${dogCount}';}```

The state flow is: User clicks button -- Dog image loads -- State changes -- State is rendered -- Updated counts appears on the page.

The dog count is temporary state.  If the webpage is refreshed, the count returns to 0 because the value is stored in a regular JavaScipt variable and is not saved between page loads. 

# Challenge Encountered

One challenge from the original project was understanding how to work with data returned from an API because the data must be retrieved asynchronously. 

I solved this challenge by using 'fetch()' and chaining '.then()' methods to handle the API response. 

For Week 11, another challenge was understanding the difference between changing the state and displaying the state on the webpage.  I first had the 'dogCount' variable increasing, but I needed a separate render function to display the updated value. 

I solved this by creating 'updateDogCount()' to change the state and 'renderDogCount()' to update teh webpage with the current value. 

# What I Learned

Through this project I learned: 
* How APIs provide data to web applications
* How fetch() retrieves information from a server
* How JSON data is converted using response.json()
* How to dynamically create HTML elements with JavaScript
* How to display data received from an API
* How to handle loading states and errors.
* How to update webpage content without reloading the page
* What state means in a web application
* How to store a state value in a JavaScript variable
* How user interaction can change the state
* How to update the state before updating the webpage.
* How to create a render function that displays the current state
* The difference between temporary state and persistent state
* Why refreshing the webpage resets state stored in a regular JavaScript variable


## Code Explanation:

HTML Document:

Tells the browser this is an HTML webpage -- <!DOCTYPE html>
Starts the HTML document and tells the brower the page is written in English -- <html lang="en">
Begins the section that contains information about the webpage. -- <head>
Allows teh webpage to display special characters and symbols correctly -- <meta charset="UTF-8">
Sets the title that appears on the browser tab -- <title>Random Dog Viewer</title>
Starts the CSS Section -- <style>
Styles the main webpage by using Arial font, centering the content, and adding spacing -- body {
Styles the dog images by setting their width, maximum width, spacing, and rounded corners -- img {
Styles the button by adding padding and changing the mouse cursor to a pointer -- button {
Styles the message area by adding spacing and making the text bold -- #message { 
Ends the head section -- </head>
Begins the visible portion of the webpage -- <body>
Displays the main heading on the page -- <h1>Random Dog Viewer</h1>
Creates a button the user clicks to get a random dog image, <button id="dogBtn">Load Random Dog</button>
Creates a paragraph where loading, success, and error messages appear -- <p id="message">Click the button to load a dog image.</p>
Creates a paragraph that displays the current dog count. It begins at 0: -- <p id="dogCount">Dogs Generated: 0</p>
Creates an empty container where JavaScript will place the dog image -- <div id="dogContainer"></div>
Connects the JavaScript file to the webpage -- <script src="jsscript.js"></script>

JavaScript: 

Stores the button in a variable so JavaScript can use it -- const button = document.getElementById("dogBtn");
Stores the message paragraph in a variable -- const result = document.getElementById("message");
Stores the container where dog images will be displayed -- const dogContainer = document.getElementById("dogContainer");
Stores the dog count paragraph in a variable so JavaSript can update it -- const dogCountDisplay = document.getElementById("dogCount");
Creates the state variable that keeps track of the number of dogs generated.  The count starts at 0 -- let dogCount = 0;
Creates a function that updates the dog count state.  This line also increases the current dog count by 1. After the state changes, this line calls the function that renders the updated state -- function updateDogCount() {dogCount++; renderDogCount();
Creates a function that displays the current dog count state on the webpage.  This line changes the text in teh dog count paragraph to show the current value of 'dogCount' -- function renderDogCount() {dogCountDisplay.textContent = `Dogs Generated: ${dogCount}`;
Runs the code inside the event listener when the user clicks the "Load Random Dog" button -- button.addEventListener("click", () => {
Shows a loading message while waiting for the API -- result.textContent = "Loading dog image...";
Sends a request to the Dog API -- fetch("https://dog.ceo/api/breeds/image/random")
Converts the API repsonse into JSON format -- .then(response => response.json())
Runs after the JSON data has been received -- .then(data => {
Removes the previous dog image from the container -- dogContainer.innerHTML = "";
Creates an image element -- const dogImage = document.createElement("img");
Sets the image source to the dog image URL from the API --dogImage.src = data.message     
Provides alternate text if the image cannot load -- dogImage.alt = "Random Dog";     
Sets image width to 400 pixels -- dogImage.width = 400;        
Adds the new dog image to the webpage -- dogContainer.appendChild(dogImage);
Calls the function that updates the state and renders the new dog count -- updateDogCount();          
Displays a success message after the dog image has loaded -- result.textContent `Success! Dog image loaded. Dogs viewed: ${dogCount}`;           
Runs if something goes wrong -- .catch(error => {          
Displays an error in the browser console for troubleshooting -- console.error(error);
Displays an error message to the user -- result.textContent = "Unable to load dog image";

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open 'index.html' in a web browser.
3. The webpage will begin with 'Dogs Generated: 0'
4. Click the "Load Random Dog" button.
5. A random dog image will be retrieved from the Dog API and displayed on the webpage.
6. The dog count will increase each time a dog image successfully loads.
7. Continue clicking the button to generage additional random dog images.
8. Refreshing the webpage will reset the dog count to 0 because the state is temporary.