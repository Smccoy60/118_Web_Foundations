const hoursWorked = document.querySelector("#hoursWorked");
const hourlyRate = document.querySelector("#hourlyRate");
const grosspayBtn = document.querySelector("#grosspayBtn");
const grosspayResult = document.querySelector("#grosspayResult");

function calculateGrossPay() {
    console.log("Starting Gross Pay Calculation");
    const hours = Number(hoursWorked.value);
    const rate = Number(hourlyRate.value);
    console.log("Hours Entered: ", hours);
    console.log("Hourly Rate Entered: ", rate);

    if (hoursWorked.value === "" || hourlyRate.value === "") {
        console.log("Missing input for either hours or hourly rate");
        grosspayResult.textContent = "Please enter both hours and hourly rate.";
        return;
    }
    console.log("Inputs are valid, continue with calculation");

    const grossPay = hours * rate;
    console.log("Calculated Gross Pay: ", grossPay);
    grosspayResult.textContent = "Gross Pay: $" + grossPay.toFixed(2);
}

grosspayBtn.addEventListener("click", calculateGrossPay);

const payrollBtn = document.querySelector("#payrollBtn");
const payrollCountdown = document.querySelector("#payrollCountdown");

function DaysUntilPayroll() {
    console.log("Calculating days until next payroll");
    const today = new Date();
    console.log("Today's Date: ", today);
    const payrollDate = new Date("2026-09-25");
    console.log("Next Payroll Date: ", payrollDate);
    const millisecondsperday = 1000 * 60 * 60 * 24;
    const DaysUntilPayroll = Math.ceil((payrollDate - today) / millisecondsperday);
    console.log("Days remaining: ", DaysUntilPayroll);
    return DaysUntilPayroll;
}

payrollBtn.addEventListener("click", function() {
    payrollCountdown.textContent = "Days until next payroll: " + DaysUntilPayroll();
})



