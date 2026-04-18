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
            if (currentOperator === null) {
                firstNumber === "0" ? firstNumber = numberBtn.textContent : firstNumber += numberBtn.textContent;
            } else {
                secondNumber === "0" ? secondNumber = numberBtn.textContent : secondNumber += numberBtn.textContent;
            }
            console.log(`${firstNumber}; ${currentOperator}; ${secondNumber}`);
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