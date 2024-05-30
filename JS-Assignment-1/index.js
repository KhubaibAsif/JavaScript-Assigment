// Prompting the user to enter their age
var age = parseInt(prompt("Enter your age:"));

// Prompting the user to enter whether they are a student or not
var isStudent = prompt("Are you a student? (yes/no)").toLowerCase();

// Checking age and student status to calculate ticket price
if (age < 12) {
    // If the person is under 12 years old
    alert("Ticket price: $5");
} else if (age >= 12 && age <= 18) {
    // If the person is between 12 and 18 years old (inclusive)
    if (isStudent === "yes") {
        // If the person is a student
        alert("Ticket price: $8");
    } else {
        // If the person is not a student
        alert("Ticket price: $10");
    }
} else {
    // For everyone else The Ticket Will Be
    alert("Ticket price: $12");
} 