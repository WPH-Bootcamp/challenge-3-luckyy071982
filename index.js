// code here, goodluck!!
"use strict";
const prompt = require("prompt-sync")();

// Function to get a valid number input from the user
function getValidNumberInput() {
  let zc_input = prompt("Enter a number: ");

  // Loop until input is a valid number (not null, empty, or NaN)
  while (isNaN(Number(zc_input)) || zc_input === null || zc_input === "") {
    console.log(`${zc_input} is not a valid number.`);
    zc_input = prompt("Please enter a valid number: ");
  }

  return Number(zc_input);
}

// Function to get a valid operator input from the user
function getValidOperatorInput() {
  let zc_input = prompt("Enter an operator (+, -, *, /, %, **): ");

  // Function to get a valid operator input from the user
  while (
    !(
      zc_input === "+" ||
      zc_input === "-" ||
      zc_input === "*" ||
      zc_input === "/" ||
      zc_input === "%" ||
      zc_input === "**"
    )
  ) {
    console.log(`${zc_input} is not a valid operator.`);
    zc_input = prompt("Please enter a valid operator (+, -, *, /, %, **): ");
  }

  return zc_input;
}

const add = (pzc_param1, pzc_param2) => Number(pzc_param1) + Number(pzc_param2);

const subtract = (pzc_param1, pzc_param2) =>
  Number(pzc_param1) - Number(pzc_param2);

const multiply = (pzc_param1, pzc_param2) =>
  Number(pzc_param1) * Number(pzc_param2);

function divide(pzc_param1, pzc_param2) {
  if (Number(pzc_param2) === 0) {
    return "Error: Division by zero!";
  } else {
    return Number(pzc_param1) / Number(pzc_param2);
  }
}

function modulo(pzc_param1, pzc_param2) {
  if (Number(pzc_param2) === 0) {
    return "Error: Division by zero!";
  } else {
    return Number(pzc_param1) % Number(pzc_param2);
  }
}

// const modulo = (pzc_param1, pzc_param2) =>
//   Number(pzc_param1) % Number(pzc_param2);

const power = (pzc_param1, pzc_param2) =>
  Number(pzc_param1) ** Number(pzc_param2);

// Main calculator loop
function mainCalculator() {
  let zn_1stNumber;
  let zc_operator;
  let zn_2ndNumber;
  let zc_result;
  let zc_continue;

  while (true) {
    console.log("\n\n=== Simple Calculator ===");

    // Get inputs from user
    zn_1stNumber = getValidNumberInput();
    zc_operator = getValidOperatorInput();
    zn_2ndNumber = getValidNumberInput();

    // Perform calculation based on operator
    switch (zc_operator) {
      case "+":
        zc_result = add(zn_1stNumber, zn_2ndNumber);
        break;
      case "-":
        zc_result = subtract(zn_1stNumber, zn_2ndNumber);
        break;
      case "*":
        zc_result = multiply(zn_1stNumber, zn_2ndNumber);
        break;
      case "/":
        zc_result = divide(zn_1stNumber, zn_2ndNumber);
        break;
      case "%":
        zc_result = modulo(zn_1stNumber, zn_2ndNumber);
        break;
      case "**":
        zc_result = power(zn_1stNumber, zn_2ndNumber);
        break;
    }

    console.log("\n=== Calculation Result ===");
    console.log(
      `Expression : ${zn_1stNumber} ${zc_operator} ${zn_2ndNumber} = ${zc_result}`
    );
    console.log(`Result : ${zc_result}`);

    if (typeof zc_result === "number") {
      console.log(
        `Type : ${Number.isInteger(zc_result) ? "Integer" : "Floating-point"}`
      );
      console.log(
        `Sign : ${
          zc_result > 0 ? "Positive" : zc_result < 0 ? "Negative" : "Zero"
        }`
      );
      console.log(`Parity : ${zc_result % 2 === 0 ? "Even" : "Odd"}`);

      if (zc_result > 0 && zc_result % 2 === 0) {
        console.log(">> This result is a positive and even number.");
      } else if (zc_result < 0 || zc_result % 2 !== 0) {
        console.log(
          ">> This result is either negative or a floating-point number."
        );
      }
    } else if (typeof zc_result === "string") {
      console.log(
        "[ERROR] " + zc_result ??
          "Result is undefined or null, something went wrong!"
      );
    }

    console.log("\n─────────────────────────────");
    zc_continue = prompt(
      "Continue ? Press any key to continue, or type 'no' to quit: "
    );
    if (zc_continue === "no") {
      console.log("Calculator session ended. Goodbye!");
      break;
    }
  }
}

mainCalculator(); // Start the calculator
