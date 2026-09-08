let hoursworked = 45;
let hourlyRate = 25;

let grossPay = hoursworked * hourlyRate;

if (hoursworked > 40) {
    console.log("Overtime hours worked");
} else {
    console.log("No overtime worked");
}

console.log("Hours Worked: " + hoursworked);
console.log("Gross Pay: " + grossPay);