// Check that both inputs contain values
function inputsAreValid(hours, rate ) {
    return hours !== "" && rate !== "";
}

// Calculate Gross Pay
function calculatePay(hours, rate) {
    return hours * rate;
}

// Return Payroll Date
function getPayrollDate() {
    console.log("using payroll date: 2026-10-23");
    return new Date("2026-10-23");
}
// Calculate days between two dates
function calculateDaysRemaining(targetDate, currentDate) {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((targetDate - currentDate) / millisecondsPerDay);
}

// Calculate payroll countdown
function daysUntilPayroll() {
    const today = new Date();
    const payrollDate = getPayrollDate();
    const daysRemaining = calculateDaysRemaining(payrollDate, today);
    return daysRemaining;
}