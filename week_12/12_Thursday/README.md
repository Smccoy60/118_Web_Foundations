# README.md

### Performance Optimization

For the Monday assignment, I focused on finding and improving an inefficient part of one of my applications.

I first tested my Random Dog Viewer. I added a counter to track API requests and tried preventing repeated requests by disabling the button while a dog image was loading.  After testing the change, I found that the Dog API responded quickly and the before and after results were not different enough to show a meaningful performance improvement.  Instead of forcing an optimization that was not supported by the results, I decided to look at my Payrolll Hub for a better example. 

### Payroll Countdown Optimization

In the Payroll Hub, I reviewed the Payroll Countdown feature and found that one button click used two separate `setTimeout()` callbacks.  The first timeout displayed an intermediate message, and teh second timeout calculated and displayed the final payroll countdown. 

To measure the work, I added a counter to track how many timeout callbacks were executed for one click of the Payroll Countdown Button.

### Before Optimization

Before making the change, one click of teh Payroll Countdown button executed two timeout callbacks. 

- Timeout callback 1 displayed an intermediate payroll message.
- Timeout callback 2 calculated the number of days until payroll and displayed the final result.

** Before: 2 timeout callbacks**

### Change Made

I removed the first `setTimeout()` because it was only being used to display an intermediate message.  The application still immediately displays a message letting the user know that it is checking the next payroll date, but only one timeout is now needed to calculate and display the final result. 

### After Optimization

After making the change, I repeated the same test using one click of the Payroll Countdown button. 

**After: 1 timeout callback**

The Payroll Countdown still produced the same final result, but the number of the timeout callbacks needed for the action was reduced from two to one. 

### What I Learned

This lab helped me understand why it is important to observe and measure an application before deciding what needs to be optimized.  My first idea with the Random Dog Viewer did not produce a meaninful difference, which helped me realize that an optimization should be based on an actual inefficiency instead of just changing code. 

By testing the Payroll Hub, I was able to identify unnecessary work, make one focused change, and compare teh behavior before and after the optimization. 

## Thursday - Performance Refinement

For the Thursday assignment, I continued working with my Payroll Hub. I added a search feature to the Payroll Administration Resources page that allows the user to filter the available resources while typing.

The searchable resource sections include:
 - State Withholding Tax Sites
 - Deduction Payments
 - Pay Check Calculator

To measure the work, I added a counter to track how many times the `filterResources()` function ran while the user was typing.

## Before Optimization

Before adding debounce, the `filterResources()` function ran every time an `input` even occured. 

For my test, I manually typed: calculator
The search correctly displayed the Pay Check Calculator section, but the filtering function ran repeatedly while I was typing.

**Before: 10 filter runs**

## Change Made
I added a  timed debounce to the resource search. 

The debounce uses `clearTimoeout()` to cancel the previous timer when another input event occurs and `setTimeout()` to wait until the timer ends before running the filter.

This allows the program to wait until the user pauses typing instead of running the filtering function after evey character.

## After Optimization

After making the change, I repeated the same test by manually typing: calculator

The final search result stayed the same.  The Pay Check Calculator section was still displayed correctly, but the filtering function waited until I stopped typing before running.

**After: 1 filter run**

The debounce reduced unnecessary filter executions while preserving the correct final search result.

## Additional Testing

I also tested the search by: 
- Clearing the search box to make sure all three resource sections returned.
- Searching for deduction to make sure the Deduction Payments section displayed correctly
- Searching for a word that did not match any resources to make sure zero resource sections were displayed.

## What I Learned

The Thursday lab helped me understand how debounce can improve an input-driven feature.  Without debounce, the filtering function runs repeatedly while the user is typing. With debounce, the program waits until the user pauses before running the filter.

This builds on what I learned in Monday's assignment. On Monday, I reduced unnecessary timeout callbacks in the Payroll Countdown. On Thursday, I redunced unnecessary function calls caused by rapid user input. 

Both optimizations kept the final results the same while reducing unnecessary work. 