const payrollBtn = document.querySelector("#payrollBtn");
const payrollCountdown = document.querySelector("#payrollCountdown");

function DaysUntilPayroll() {
    const today = new Date();
    const payrollDate = new Date("2026-09-25");
    const millisecondsperday = 1000 * 60 * 60 * 24;
    const DaysUntilPayroll = Math.ceil((payrollDate - today) / millisecondsperday);
    return DaysUntilPayroll;
}

payrollBtn.addEventListener("click", function() {
    payrollCountdown.textContent = "Days until next payroll: " + DaysUntilPayroll();
});

const hoursWorked = document.querySelector("#hoursWorked");
const hourlyRate = document.querySelector("#hourlyRate");
const grosspayBtn = document.querySelector("#grosspayBtn");
const grosspayResult = document.querySelector("#grosspayResult");

function calculateGrossPay() {
    const hours = Number(hoursWorked.value);
    const rate = Number(hourlyRate.value);

    if (hoursWorked.value === "" || hourlyRate.value === "") {
        grosspayResult.textContent = "Please enter both hours and hourly rate.";
        return;
    }

    const grossPay = hours * rate;
    grosspayResult.textContent = "Gross Pay: $" + grossPay.toFixed(2);
}

grosspayBtn.addEventListener("click", calculateGrossPay);