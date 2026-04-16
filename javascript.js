let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.getElementById('equalsBtn');
const clearButton = document.getElementById('clearBtn');    

numbers.forEach((numberBtn) => {
        numberBtn.addEventListener("click", () => {
        // 1. Prevent multiple leading zeros (if it's already "0", don't add another "0")
        if (firstNumber === "0" && numberBtn.textContent === "0") return;

        // 2. If the first number is JUST "0", replace it with the new digit (so "0" becomes "5")
        if (firstNumber === "0") {
            firstNumber = numberBtn.textContent;
        } else {
            // Otherwise, just glue the numbers together normally
            firstNumber += numberBtn.textContent;
        }
        // 3. Update the display to reflect the variable
        display.textContent = firstNumber;
        console.log("Current variable:", firstNumber);
    });
});

operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
       currentOperator = operatorBtn.textContent;
       display.textContent = currentOperator;
    })
}) 

const operate = function (operator, firstNumber, secondNumber) {
    switch(operator) {
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber,secondNumber);
        case "x":
            return multiply(firstNumber,secondNumber);
        case "➗":
            if (secondNumber === 0) return null;
            else return divide(firstNumber,secondNumber);
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return (a / b);
}