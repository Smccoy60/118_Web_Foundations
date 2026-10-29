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

# Thursday - State Persistence with Local Storage

## What I Added

For Thursday's assignment, I expanded the Random Dog Viewer by adding persistence to the dog count.  Previously, the dog count was stored in the 'dogCount' variable while the page was running. If the page was refreshed, the count would return to 0. I used 'localStorage' to save the dog count so that it can be restored after the page is refreshed.

## State

The current state is stored in the 'dogCount' variable: ```javascript let dogCount = 0
I created a storage key for the dog count: const DOG_COUNT_KEY = "dogCount"
I then created a saveDogCount() function: function saveDogCount() {localStorage.setItem(DOG_COUNT_KEY, dogCount);}
Each time the dog count changes, the new value is saved to localStorage

Restoring the State: I created a restoreDogCount() function that checks localStorage for a previously saved dog count. The function runs when the page loads.  If a saved value exists, it is converted back to a number and assigned to dogCount.  If there is not saved value, the application uses the fallback value of 0.

## Testing

I tested the application by: 

1. Loading the page with no saved dog count and confirming the count started at 0.
2. Clicking teh Load Random Dog button and confirming the count increased.
3. Loading multiple dog images and confirming the count continued to increase correctly.
4. Refreshing the browser and confirming the saved dog count was restored.
5. Loading another dog after refreshing and confirming the count continued from the saved value.
6. Inspecting Local Storage in the browser DevTools to confirm the dogCount key and saved value were stored.

## Temporary State vs. Persistent State

The dogCount variable represents the application's current state.

Without persistence, this value only exists while the page is running and would reset when the page refreshes.  Using localStorage makes the selected dog count persistent.  The browser remembers the value, and JavaScript restores it when the application starts again.  

The dog image itself is still temporary and is not restored after a refresh.  Only the dog count is beign intentionally saved.

## Security

Only a small, non-sensitive value is stored in localStorage.  Sensitive information such as passwords, SSNs, financial information, or other personal information should not be stored in localStorage.

## Reflection

This assignment helped me understand the difference between state and persistence.  State represents the information the application is currently using, while persistence allows selected information to remain available after the page is refreshed. 

I also learned that saving a value is only part of persistence.  The application must retrieve the saved value and use it to rebuild the UI when the page loads. 

Adding localStorage made the Random Dog Viewer more consistent because teh dog count now continues from the previous saved value instead of automatically starting over at 0 after every refresh. 

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open 'index.html' in a web browser.
3. The webpage will begin with 'Dogs Generated: 0'
4. Click the "Load Random Dog" button.
5. A random dog image will be retrieved from the Dog API and displayed on the webpage.
6. The dog count will increase each time a dog image successfully loads.
7. Continue clicking the button to generage additional random dog images.
8. Refreshing the webpage will reset the dog count to 0 because the state is temporary.