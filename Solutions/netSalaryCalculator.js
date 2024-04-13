// netSalaryCalculator.js
 // Logic to calculate net salary
 function calculateNetSalary(basicSalary, benefits) {
    const kraTaxRate = 0.3;
    const nhifRate = 0.025;
    const nssfRate = 0.06;

    const grossSalary = basicSalary + benefits;
    const payee = grossSalary * kraTaxRate;
    const nhifDeductions = grossSalary * nhifRate;
    const nssfDeductions = grossSalary * nssfRate;

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    return netSalary;
}

const basicSalary = parseInt(prompt("Enter basic salary: "));
const benefits = parseInt(prompt("Enter benefits: "));
console.log(`Net Salary: ${calculateNetSalary(basicSalary, benefits)}`);

    // Return the net salary

// Code to prompt user for basic salary and benefits input and call calculateNetSalary function