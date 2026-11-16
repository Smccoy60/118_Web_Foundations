# README.md

### Weeky 13 - Security Awareness and Reliability

For the Week 13 assignment, I continued workign with my Payroll Hub and reviewed the search feature on teh Payroll Administration Resources page.  The goal was to identify areas where unexpected user input could cause unclear or unreliable behavior and make focused improvements without changing the purpose of the feature.

## Issue 1 - Empty or Whitespace-Only Input

The first issue I identified was how the sarch handled empty or whitespace-only input.  The saerch already used `.trim()`, but an empty value could still continue through the filtering process. Since an empty string can match the text in every resource section, the page could show all of teh resources without clearly explaining what happened.

To improve this, I added an `if` statement that checks whether the search value is empty after `.trim()` is used. If the value is empty, the program displays all resource sections, provides a message asking the user to enter a search term, and uses an early `return` to stop the rest of the filtering function.

This makes the behavior more intentional and gives the user clear feedback instead of allowing an empty value to continue through the normal search process.

## Issue 2 - No Matching Search Results

The second issue I identified occurred when the user entered a search that did not match any of the available resources. Previoiusly, the page only displayed that zero resource sections were shown. This worked, but it did not clearly explain what happened or what the user should do next.

I added a condition that checks whether the number of matching resources is zero. When there are no matches, the page now tells the user that no resources were found for the entered search and asks the user to try another search. 

This provides clearer feedback while keeping the rest of the interface working normally.

## Safe Output

I also reviewed how the user's search value is displayed on the page. The search feedback uses `textContent` instead of `innerHTML`.  This is important because `textContent` displays the user's input as plain text instead of asking the browser to interpret the value as HTML.

I tested this by entering text that looked like HTML. The HTML-looking characters stayed visible as text and were not treated as page structure.

### Three Input Tests

### Test 1 - Empty or Whitespace-Only Input

For the first test, I entered only spaces into the resource search box.

The `.trim()` method removed the spaces, and the program recognized the search as empty. All three resource sections remained visible, and the page displayed a message asking the user to enter a search term. 

This confirmed that the empty input was intentionally handled and did not break the page.

### Test 2 - Normal Input

For the second test, I entered: `calculator`

The search worked normally and displayed the Pay Check Calculator section while hiding the sections that did not match.  The page reported that one resource section was found. 

This confirmed that the reliability changes did not interfere with the normal serch behavior.

### Test 3 - HTML-Looking Input

For the third test, I entered: `<b>calculator</b>`

The search did not find a matching resource, and the page displayed the entered value as plain text in the feedback message.  The `<b>` tags were visible and were not interpreted by the browser as HTML.

This test confirmed that using `textContent` keeps user-provided text as text instead of allowing HTML-looking input to change the page structure.

## Evidence and Testing

I tested the updated search in the browser and used the browser console to observe the different input paths.  The console showed when the filtering function ran and provided messages for unexpected conditions such as no matching resources.

I tested normal input, empty or whitespace-only input, and HTML-looking input. The page continued working during all three tests and provided clear feedback when the input could not produce a normal search result.

## What I Learned

This assignment helped me understand that a feature workigin wiht normal input does not mean that it will handle every type of input correctly.  Testing unusual or unexpected values helped me see where the application was making assumptions about what a user would enter.

I also learned why .trim(), if statements, early return, and textContent are useful for mkaing a page more reliable. These were small changes to an existing feature, but they made the behavior more predictable and gave the user clearer feedback when something unexpected was entered.

## AI Use Disclosure

I used AI as a collaborater to review my existing Payroll Hub search feature, identify possible reliability issues and suggest focused input handling changes.  I reviewed the suggested changes, and completed the browser and console testing myself.

### Week 13 Thursday - Trust Boundaries and Browser Risks

For the Thursday assignment, I continued reviewing my PayrollHub instead of creating a separate security feature. I used the Payorll Processing Checklist to examine how data mvoes from the JSON file, through JavaScript, and into the browser.

## Trust Boundary

The Payroll Processing Checklist uses fetch() to retrieve the checklist informaiton from payroll_checklist.json.  The JSON file is outside of teh JavaScript code, so the program should not automatically assume that hte file loaded correctly or contains the expected data.

The checklist follows this path:
payroll_checklist.json -> fetch() -> JavaScript validation -> DOM elements -> browser display

I added checks to make sure the JSON file loaded successfully and that the tasks value contains an array with checklist items before the applicaton attempts to display them.

const data = await response.json();

if (!Array.isArray(data.tasks) || data.tasks.length === 0) {
    throw new Error("No payroll checklist tasks were found.");
}

If the JSON file does not load or the expeted task data is missing, the program uses the existing try/catch structure to stop the normal checklist process and display a clear message to the user.

## Improved Error Feedback

I improved the checklist error feedback so that the applciation gives the user useful information instead of failing silently. This keeps the rest of the Payroll Hub usable even if the checlist data cannot be loaded.

## Safe Output

The Payroll Processing Checklist creates its HTML elements using JavaScript instead of inserting the JSON data as HTML.  The application controls the HTML structure by creating the label element, while the checklist information is added using textContent.  THis keeps the checklist text as text instead of asking the browser to interpret the value as HTML.

## Thursday Edge-Case Test Matrix

* Normal checklist data
    - Expected Result - Seven payroll tasks should load and progress should begin at 0%
    - Actual Result - Passed, all seven tasks loaded and progress started at 0%

* Missing JSON File 
    - Expected Result - A clear unavailable message should appear instead of the checklist failing silently
    - Actual Result - Passed, the fallback message appeared and teh error was recorded in the console

* Empty Tasks Array
    - Expected Result - The application shoudl recognize that htere are no checklist tasks and the use the fallback path
    - Actual Result - Passed, the empty task data was detected and the fallback message appeared.

## Test 1 - Normal Checklist Data

For the first test, I used the normal payroll_checklist.json file containgin my seven payroll tasks. The checklist successfully displayed all seven tasks and started with:
0 of 7 tasks completed
0% Complete

I also selected checklist items to confirm that hte completed task count and progress percentage continue to update correctly. This confirmed that the normal path continued to work after adding eh new validation.

## Test 2 - Missing JSON File

For the second test, I temporarily changed teh filename used by fetch() so that JavaScript attempted to retrieve a JSON file that did not exist. The checklist did not load, and teh application displayed a message explaining that hte payroll checklist could not be loaded and tha tthe user should refresh the page or try again later. The error was also recorded in the browser console. 

After completeing this test, I changed the filename back to payroll_checklist.json

This confirmed that the application has a controlled fallback when the required JSON file cannot be retrieved.

## Test 3 - Empty Tasks Array

For the third test, I temporarily changed the tasks array in payroll_checklis.json to an empty array.

The applciation detected that there were no payroll tasks instead of treating the JSON file as a successful checklist load. The program used the error handling path and displayed the fallback message. 

After completeing the test, I restored the seven payroll checklist tasks.

This confirmed that the applciation checks the expected data instead of only checking whether the JSON file exists.

## Reliability and Security Awareness

The Week 13 concept that applies to this feature is the browser trust boundary. The checklist depends on informaiton moving from a JSON file into JavaScript and then into the browser. Before using the data, the application checks that the request secceeded and that the expexted checklist data exists.

The project also uses document.createELement() to create the HTML structure and textContent to display checklist text. This allows the applciation to control the markup while treating teh supplied task values as text.

These changes improve the reliability and safe handlign of this specific freature, but they do not make the Payroll Hub completely secure. The project is still a broweser-based application. Authentication, authorization, server-side validation, secure sesson handling, and protection of confidential payroll information would require additonal server-side security that is outside the scope of this class project.

## What I Learned

This assignment helped me understand that validating user input is only one part of reliability and security awareness. Applications also depend on inforamation coming from files, APIs, browser storage, and other sources.

I learned tha ti shoudl check assumptions before using outside data. In this case, teh Payroll Hub should not assume that the checklist JSON file will always load correctly or contain the expected tasks.

I also learned the difference between improving one specific browser-side behavior and claiming that an entire application is secure.  The validation, error handling, textContent, and testing used in this assignment improve specific part of my Payroll Hub, but they do not replace server-side security.

