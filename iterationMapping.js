"use strict";

const ps = require("prompt-sync");
const prompt = ps();

// Prompt the user to input the Max Limit of the Loops
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Initialize counters to zero
let counter1 = 0;
let counter2 = 0;
let addedValue = 0;

// Double Loop Statement to print out the map of iterations
for (counter1 = 0; counter1 < maxLimit; counter1++) {
  for (counter2 = 0; counter2 < maxLimit; counter2++) {
    // Add the current values of the counters at each iteration
    addedValue = counter1 + counter2;
    // Log the corresponding Loop Points and added Value per iteration to the console
    console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
  }
}