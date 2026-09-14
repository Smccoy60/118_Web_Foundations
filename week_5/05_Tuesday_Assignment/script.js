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