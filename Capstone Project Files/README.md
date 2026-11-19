# README.md

# Web Development - Week 14

## Weeky 14 - UX and Styling Refinement - Make it Better to Use

### Monday Assignment

For the Week 14 Monday assignment, I reviewed my Payroll Hub to identify areas where the user experience could be improved. The intended users of the Payroll Hub are employees and payroll or HR staff who need access to payroll information, resources, calculators, and payroll processing tools.

The primary task I reviewed was how users navigate the Payroll Hub and search for ressources on teh Payroll Administration Resources page.

### UX Issue 1: Navigation on Narrow Screens

I tested the Employee Resources page at a screen width of 375 pixels. The page content adjusted to the smaller screen, but the navigation remained in a horizontal row. The longer navigation links wrapped onto multiple lines, which made the navigation look crowded and inconsistent. 

To improve the navigation, I added responsive CSS inside the existing media query. The navigation links now stack vertically when the screen is 700 pixels wide or smaller. I also reduced the space between the links and added padding to make each link easier to read and select.

```css
.nav-list ul {
    flex-direction: column;
    gap: 5px;
}

.nav-list a {
    display: block;
    padding: 8px;
}
```

### UX Issue 2: Resource Seach Feedback

The resource search correctly filtered the available ssections, but the successful search message did not display the user's search term correctly. The message displayed $(searchText) instead of the text entered by the user.

I corrected the JavaScript template literal by changing the parentheses to curly braces. 

```javascript
filterStatus.textContent =
    `${visibileCount} resource section(s) found for "${searchText}".`;
```

The updated message now clearly confirms the number of matching resource sections and the search term entered by the user.

### Testing

#### Responsive Navigation Testing

I tested the responsive navigaton at several screen widths to make sure the change worked correctly.

- At 375 pixels, the navaigation links stacked vertically and remained readable.
- At 700 pixels, the responsive navigation rules were still applied.
- At 701 pixels, the navigation returned to its horizontal desktop layout.
- All four navigation links continued to open the correct pages.

#### Resource Seach Testing

I tested the resource search with both matching and nonmatching search terms.
- Searching for `calculator` displayed `1 resource section(s) found for "calculator"`.
- Searching for `vacation` displayed the no-result message and asked the user to try another search.
- The resource filtering continued to work correctly after the change.

#### Keyboard Testing

I also tested keyboard navigation using the Tab key. As I moved through the interactive elements, a visible outline showed which element had focus. Since the existing keyboard focus was already visible and easy to follow, no additional changes were needed.

### Monday Work Notes

The changes made for the Monday assignment improved the usability of existing features without adding new functionality.  The resposnive navigation is easier to use on narrow screens, and the resource section now gives users clear feedback. 

I also tested the changes at different screen widths and verified that the navigation links, resource filtering, and keyboard navigation continued to work correctly.

## Thursday Assignment

For the Thursday Assignment, I continued refining the user experience of my Payroll Hub.  I focused on the Gross Pay Calculator on the Employee Resources page. I reviewed the calculator's default, error, and success states to determine how the feedback could be clearer for the user.

### Gross Pay Calculator UX Review

Before making changes, I tested the Gross Pay Calculator in three different situations. 

- In the default state, the calculator had labeled inputs and a Calculate Gross Pay button, but there were no instructions explaining what information to enter.
- When I entered `-5` horus and an hourly rate of `20`, the calculator accepted the negative value and displayed `Gross Pay: -100.00`.
- When I entered `40` hours and an hourly rate of `25`, the calculation was correct, but the result displayed asa `Gross Pay: 1000.00 instead of begin formatted as currency.

These tests showed that the calculator worked, but the feedback and error handling could be improved. 

### Default-State Improvement

I added a short instruction underneath the Gross Pay Calculator heading so the user knows what information is needed before using the calculator.

```html
<p class="calculator-instructions">Enter the hours worked and hourly rate to calculate gross pay.</p>
```

I also added a default message to the existing result area and used `role-"status"` so the changing feedback is connected to the calculator interaction.

```html
<p id="grossPayResult" role="status">Enter your hours and hourly rate above.</p>
```

### Error-State Improvement

The calculator already checked for missing input values, but it did not prevent negative values from being used in the calculation.

I added an additional validation check after retreiving the hours worked and hourly rate.

The `return` statement stops the calculation when a negative value is entered. After making this change, entereing `-5` hours and an hourly rate of `20` displays: `Hours worked and hourly rate cannot be negative.` The calculator no longer calculates negative gross pay.

### Success-State Improvement

I also improved how successful calculations are displayed. Previously, a calculation of 40 hours at $25 per hours displayed as `Gross Pay: 1000.00`. I updated the `renderGrossPay()` function to format the result as U.S. currency.

The same calculation now displays: `Gross Pay: $1,000.00`

This makes the result easier to recognize and read as a dollar amount.

### Visual Feedback Improvement

I added styling to the calculator instructions and feedback area so the information is easier to identify. The light-orange feedback area fits with teh existing colors in my Payroll Hub while visually separating calculator feedback from the input fields and Calculate Gross Pay button.

### Testing

#### Default-State Testing

I refreshed the EMployee Resources pages without entering any information. The calculator displayed instructions without explaining what information to enter and showed the default feedback message in the feedback area.

#### Invalid-Input Testing

I entered: 
- Hours Worked: -5
- Hourly Rate: 20

Instead of calculating negative gross pay, teh calculator displayed: Hours worked and hourly rate cannot be negative.

This confirmed that the new validation worked correctly.

#### Valid-Input Testing

I entered:
- Hours Worked: 40
- Hourly Rate: 25

The calculator correctly displayed: Gross Pay: $1,000.00

This confirmed that hte original calculation still worked and that the result was now formatted correctly as currency.

#### Responsive Testing

I tested the Emploee Resources page at a screen width of 375 pixels.  The Gross Pay Calculator remained fully usable at the narrow screen width. The instructions, input fields, Calculate Gross Pay button, and feedback area remained visible without overlapping or causing horizontal scrolling.

#### Keyboard Testing

I also tested the calculator using the Tab key.  Keyboard focus moved in a logical order through: 
1. Hours Worked
2. Hourly Rate
3. Calculate Gross Pay

A visible focus outline remained available on the interactive controls, so no additoinal keyboard focus styling was needed.

### Thursday Work Notes

The Thursday refinements improved the usability of the existing Gross Pay Calculator without changing its main purpose. Users now receive instructions before using the calculator, clearer feedback when an invalid vlaue is entered, and properly formatted feedback after a successful calculation.

I tested the default, error, and success states and verified that the calculator continued to work at a 375-pixel screen width and with keyboard navigation.  The refinements improved feedback and visual hierarchy while preserving the original calculator functionality. 

