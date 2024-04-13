// speedDetector.js
 // Logic to calculate demerit points based on speed
 function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if (speed <= speedLimit) {
        return 0;
    } else {
        const excessSpeed = speed - speedLimit;
        return Math.floor(excessSpeed / kmPerDemeritPoint);
    }
}

const speed = parseInt(prompt("Enter car speed: "));
const demeritPoints = calculateDemeritPoints(speed);
if (demeritPoints > 12) {
    console.log("License suspended");
} else {
    console.log(`Points: ${demeritPoints}`);
}
// Code to prompt user for speed input and call calculateDemeritPoints function