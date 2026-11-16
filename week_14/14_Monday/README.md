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
