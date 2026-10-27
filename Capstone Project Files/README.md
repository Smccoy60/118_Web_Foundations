# README.md
Purpose:
The purpose of this site is to eventually use it as a resouce hub to keep everything in one place.  This site will also be used to give information to employee as well as helpful links.

## State Management Update

I updated the Gross Pay Calculator to use state management.

The state value is `grossPay`, which keeps track of the current gross pay calculation.

The state begins at 0: ```javascript let grossPay=0```

WHen the user enters hours worked and an hourly rate and clicks the "Calculate Gross Pay" button, the application validates the inputs and calculates the gross pay.  Instead of calculating and displaying the result in the same step, the application now updates the state first and then renders the current state on the webpage.

## Updating the Gross Pay State

I created the `updateGrossPay()` function to update the state: ```javascript function updateGrossPay(hours, rate) {grossPay = calculatePay(hours, rate); renderGrossPay();}```

This function sends the hours worked and hourly rate to the existing `calculatePay()` function.  The result is stored in the `grossPay` state variable.  After the state is updated, the `renderGrossPay()` function is called. 

## Rendering the Gross Pay State

I created the `renderGrossPay()` function to display the current gross pay state on teh webpage: ```javascript function renderGrossPay() {displayResult(grosspayResult, `Gross Pay: $$ {grossPay.toFixed(2)};);}```

The render function uses the current value stored in `grossPay` and displays it as currency with two decimal places

## Gross Pay State Flow

The Gross Pay Calculator now follows this process:
1. The user enters hours worked.
2. The user enters an hourly rate.
3. The user clicks "calculate gross pay."
4. The application checks that both inputs contain values.
5. The hours and hourly rate are converted to numbers.
6. A calculating message is displayed.
7. The Calculate Gross Pay button is temporarily disabled.
8. `updateGrossPay()` calculates and updates the `grossPay` state.
9. `renderGrossPay()` displays the current state on the webpage.
10. The calculate gross pay button is enabled again.