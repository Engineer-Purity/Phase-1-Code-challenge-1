// Grade Calculator
function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    document.getElementById("grade").textContent = Grade: ${grade};
  }


// Speed Detector
  function calculate() {
    
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
      points = Math.floor((speed - 70) / 5);
      if (points > 12) {
        document.getElementById('result').textContent = 'License suspended';
      } else {
        document.getElementById('result').textContent = 'Points: ' + points;
      }
    }
  }


  
// Salary Calculator 
function calculateNetSalary() {
  let basicSalary = parseFloat(document.getElementById("basic-salary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  let payee = Math.floor((basicSalary + benefits) * 0.25);

  let NHIFDeductions = Math.floor(basicSalary * 0.02);

  let NSSFDeductions = Math.floor(basicSalary * 0.12);

  let grossSalary = Math.floor(basicSalary + benefits);

  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

  let resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Your P.A.Y.E is ${payee}</p>
    <p>Your gross salary is ${grossSalary}</p>
    <p>Your NHIF Deduction is ${NHIFDeductions}</p>
    <p>Your NSSF Deduction is ${NSSFDeductions}</p>
    <p>Your net salary is: Ksh. ${netSalary}</p>
    `;
}

// Add an event listener to the calculate button
let calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculateNetSalary);