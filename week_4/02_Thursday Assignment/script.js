const hoursWorked = 45;
const hourlyRate = 25;

function calculateGrossPay(hoursWorked, hourlyRate)
    {
        let grossPay;

    if (hoursWorked > 40) {
        const overtimeHours = hoursWorked - 40;
        grossPay = (40 * hourlyRate) + (overtimeHours * hourlyRate * 1.5);
        console.log("Overtime Hours Worked: " + overtimeHours);
    } 
    else {grossPay = hoursWorked * hourlyRate;
        console.log("No Overtime Worked.");
    }
    
    return grossPay;
}

const employeeGrossPay = calculateGrossPay(hoursWorked, hourlyRate);

console.log("Hours Worked: " + hoursWorked);
console.log("Hourly Rate: " + hourlyRate);
console.log("Gross Pay: "+ employeeGrossPay);