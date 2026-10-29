// Gross Pay Calculation Section

const hoursWorked = document.querySelector("#hoursWorked");
const hourlyRate = document.querySelector("#hourlyRate");
const grosspayBtn = document.querySelector("#grosspayBtn");
const grosspayResult = document.querySelector("#grosspayResult");

// Gross Pay State
let GrossPay = 0;

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

// Update Gross Pay State
function updateGrossPay(hours, rate) {
    GrossPay = calculatePay(hours, rate);
    renderGrossPay();
}

// Render Gross Pay State
function renderGrossPay() {
    displayResult(grosspayResult, `Gross Pay: ${GrossPay.toFixed(2)}`);
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
        updateGrossPay(hours, rate);
        console.log("Calculated Gross Pay: ", GrossPay);
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

// Total Compensation Section

// Connect HTML elements
const annualWage = document.querySelector("#annualWage");
const healthPlan = document.querySelector("#healthPlan");
const dentalPlan = document.querySelector("#dentalPlan");
const hsaPlan = document.querySelector("#hsaPlan");
const compensationBtn = document.querySelector("#compensationBtn");
const totalCompensation = document.querySelector("#totalCompensation");

// Benefit Data
let benefitData = {};

// Compensation State
let compensationState = {
    annualWage: 0,
    healthPlan: "",
    dentalPlan: "",
    hsaPlan: "",
    healthAmount: 0,
    dentalAmount: 0,
    hsaAmount: 0,
    retirementAmount: 0,
    totalCompensation: 0
};

// Load employer benefit amounts from JSON file
function loadBenefitData() {
    fetch("benefits.json")
        .then(response => response.json())
        .then(data => {
            benefitData = data;
            console.log("Benefit data loaded:");
            console.log(benefitData);
        })
        .catch(error => {
            console.error("Unable to load benefit data:", error);
        });
}

loadBenefitData();

// Update employee selections in state
function updateCompensationState() {
    compensationState.annualWage = Number(annualWage.value);
    compensationState.healthPlan = healthPlan.value;
    compensationState.dentalPlan = dentalPlan.value;
    compensationState.hsaPlan = hsaPlan.value;
    console.log("Compensation State.");
    console.log(compensationState);
}

// Look up employer benefit amounts
function getBenefitAmounts() {
    compensationState.healthAmount = benefitData.health[compensationState.healthPlan];
    compensationState.dentalAmount = benefitData.dental[compensationState.dentalPlan];
    compensationState.hsaAmount = benefitData.hsa[compensationState.hsaPlan];
}

// Calculate employer retirement contribution
function calculateRetirement() {
    compensationState.retirementAmount = compensationState.annualWage * benefitData.retirementRate;}

// Calculate total compensation
function calculateTotalCompensation() {
    compensationState.totalCompensation = 
    compensationState.annualWage + 
    compensationState.healthAmount + 
    compensationState.dentalAmount + 
    compensationState.hsaAmount + 
    compensationState.retirementAmount;
}

// Render Total Compensation Report
function renderCompensation() {
    compensationResult.innerHTML =
        `
        <div class="compensation-report">
            <h2>Total Compensation Summary</h2>
            <div class="report-row">
                <span>Annual Gross Wage</span>
                <span>$${compensationState.annualWage.toFixed(2)}</span>
            </div>
            <div class="report-row">
                <span>Employer Health Contribution</span>
                <span>$${compensationState.healthAmount.toFixed(2)}</span>
            </div>
            <div class="report-row">
                <span>Employer Dental Contribution</span>
                <span>$${compensationState.dentalAmount.toFixed(2)}</span>
            </div>
            <div class="report-row">
                <span>Employer HSA Contribution</span>
                <span>$${compensationState.hsaAmount.toFixed(2)}</span>
            </div>
            <div class="report-row">
                <span>Employer Retirement Contribution</span>
                <span>$${compensationState.retirementAmount.toFixed(2)}</span>
            </div>
            <div class="report-total">
                <span>Estimated Total Compensation</span>
                <span>$${compensationState.totalCompensation.toFixed(2)}</span>
            </div>
        </div>
    `;
}

// Main Total Compensation Function
function generateCompensationReport() {
    updateCompensationState();
    getBenefitAmounts();
    calculateRetirement();
    calculateTotalCompensation();
    renderCompensation();
    console.log("Final Compensation State:");
    console.log(compensationState);
}

// Button event listener
compensationBtn.addEventListener("click", generateCompensationReport);