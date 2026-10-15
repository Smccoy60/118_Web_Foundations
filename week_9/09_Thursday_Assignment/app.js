// Gross Pay Calculation Section
const hoursWorked = document.querySelector("#hoursWorked");
const hourlyRate = document.querySelector("#hourlyRate");
const grosspayBtn = document.querySelector("#grosspayBtn");
const grosspayResult = document.querySelector("#grosspayResult");

// Gross Pay Function
function calculateGrossPay() {
    console.log("Starting Gross Pay Calculator");
    if(!inputsAreValid(hoursWorked.value, hourlyRate.value)) {
        console.log("Missing input values");
        displayResult(grosspayResult, "Please enter both hours worked and hourly rate.");
        return;
    }

    const hours = Number(hoursWorked.value);
    const rate = Number(hourlyRate.value);

    console.log("Hours Entered: ", hours);
    console.log("Hourly Rate Entered: ", rate);

    displayResult(grosspayResult, "Calculating gross pay...");

    setButtonState(grosspayBtn, true);
    setTimeout(function () {
        const grossPay = calculatePay(hours, rate);
        console.log("Gross Pay Calculated: ", grossPay);
        displayResult(grosspayResult, "Gross Pay: $" + grossPay.toFixed(2));
        setButtonState(grosspayBtn, false);
    }, 2000);
}

grosspayBtn.addEventListener("click", calculateGrossPay);

// PayrolL Countdown Section
const payrollBtn = document.querySelector("#payrollBtn");
const payrollCountdown = document.querySelector("#payrollCountdown");

function showPayrollCountdown() {
    console.log("Starting Payroll Countdown");
    displayResult(payrollCountdown, "Checking the next payroll date...");
    setButtonState(payrollBtn, true);
    setTimeout(function () {
        displayResult(payrollCountdown, "Payroll date found. Calculating...");
    }, 1000);
    setTimeout(function () {
        const daysRemaining = daysUntilPayroll();
        displayResult(payrollCountdown, "Days Until Next Payroll: " + daysRemaining);
        console.log("Payroll Countdown Complete");
        setButtonState(payrollBtn, false);
    }, 2000);
}

payrollBtn.addEventListener("click", showPayrollCountdown);