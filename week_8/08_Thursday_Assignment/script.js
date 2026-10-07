// Gross Pay Calculation Section

const hoursWorked = document.querySelector("#hoursWorked");
const hourlyRate = document.querySelector("#hourlyRate");
const grosspayBtn = document.querySelector("#grosspayBtn");
const grosspayResult = document.querySelector("#grosspayResult");

// Check that both inputs contain values
function inputsAreValid() {
    return (hoursWorked.value !== "" && hourlyRate.value !== "");
}

// Get hours entered by the user
function getHoursWorked() {
    return Number(hoursWorked.value);
}

// Get hourly rate entered by the user
function getHourlyRate() {
    return Number(hourlyRate.value);
}

//Calculate Gross Pay
function calculatePay(hours, rate) {
    return hours * rate;
}

// Display a message in a page element
function displayResult(element,message) {
    element.textContent = message;
}

// Main Gross Pay Function
function calculateGrossPay() {
    console.log("Starting Gross Pay Calculation");
    if(!inputsAreValid()) {
        console.log("Missing input values");
        displayResult(grosspayResult, "Please enter both hours worked and hourly rate.");
        return;
    }
    const hours = getHoursWorked();
    const rate = getHourlyRate();
    console.log("Hours Entered: ", hours);
    console.log("Hourly Rate Entered: ", rate);

    displayResult(grosspayResult, "Calculating gross pay... Please wait.");

    grosspayBtn.disabled = true;
    setTimeout(function () {
        const grossPay = calculatePay(hours, rate);
        console.log("Calculated Gross Pay: ", grossPay);
        displayResult(grosspayResult, "Gross Pay: $" + grossPay.toFixed(2));
        grosspayBtn.disabled = false;
    }, 2000);
}

grosspayBtn.addEventListener("click", calculateGrossPay);

// Payroll Countdown Section

const payrollBtn = document.querySelector("#payrollBtn");
const payrollCountdown = document.querySelector("#payrollCountdown");

// Return Payroll Date
function getPayrollDate() {
    return new Date("2026-10-09");
}

// Calculate days between two dates
function calculateDaysRemaining(targetDate, currentDate) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((targetDate - currentDate) / millisecondsPerDay);
}

// Main payroll countdown function
function daysUntilPayroll() {
    console.log("Calculating days until next payroll");
    const today = new Date();
    const payrollDate = getPayrollDate();
    console.log("Today's Date: ", today);
    console.log("Next Payroll Date: ", payrollDate);
    const daysRemaining = calculateDaysRemaining(payrollDate, today);
    console.log("Days remaining: ", daysRemaining);
    return daysRemaining;
}           

// Display payroll countdown
function showPayrollCountdown() {
    console.log("Starting payroll countdown");

    displayResult(payrollCountdown, "Checking the next payroll date... Please wait.");

    payrollBtn.disabled = true;
    setTimeout(function () {
        displayResult(payrollCountdown, "Payroll date found. Calculating days remaining...");
    }, 1000);

    setTimeout(function () {
        const daysRemaining = daysUntilPayroll();
        displayResult(payrollCountdown, "Days until next payroll: " + daysRemaining);
        console.log("Payroll countdown complete");
        payrollBtn.disabled = false;
    }, 3000);
}

payrollBtn.addEventListener("click", showPayrollCountdown);