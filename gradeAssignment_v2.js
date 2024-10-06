"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// Prompt the user to input their score
const score = parseInt(prompt("Enter your score: "));

// Use Conditional Ternary statements to assign grades
let grade;
if (score >= 97) {
  grade = "1.00" + " Excellent";
} else if (score >= 94 && score <= 96) {
  grade = "1.25" + " Excellent";
} else if (score >= 91 && score <= 93) {
  grade = "1.50" + " Above Average";
} else if (score >= 88 && score <= 90) {
  grade = "1.75" + " Above Average";
} else if (score >= 85 && score <= 87) {
  grade = "2.00" + " Average";
} else if (score >= 82 && score <= 84) {
  grade = "2.25" + " Average";
} else if (score >= 79 && score <= 81) {
  grade = "2.50" + " Below Average";
} else if (score >= 76 && score <= 78) {
  grade = "2.75" + " Below Average";
} else if (score === 75) {
  grade = "3.00" + " Below Average";
} else if (score >= 72 && score <= 74) {
  grade = "4.00" + " Poor";
} else {
  grade = "5.00" + " Poor";
}

// Implement additional If..else if..else Statements to assign the final remarks
let remarks;
if (score >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80 && score <= 89) {
  remarks = "AVERAGE PASS";
} else if (score >= 75 && score <= 79) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}

// Log the corresponding grade and remarks to the console
console.log(`Result: Your equivalent Grade is "${grade}"`);
console.log(`Final Remarks: ${remarks}`);