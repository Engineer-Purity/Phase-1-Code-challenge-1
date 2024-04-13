// studentGradeGenerator.js
 // Logic to calculate grade based on marks
    // Return the corresponding grade
    function calculateGrade(marks) {
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        return grade;
    }
    
    const marks = parseInt(prompt("Enter student marks: "));
    console.log(`Grade: ${calculateGrade(marks)}`);
    // Code to prompt user for input and call calculateGrade function