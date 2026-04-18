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
            // Update firstNumber, THEN update the display. If we try to clear the display in the loop, it's going to repeat itself every time 
            // and we would only get one numerical character for firstNumber.
            // firstNumber += numberBtn.textContent;

            // However, this means we can have something like "0001", which we do not want. 
            // I still want to include having "0" as an option.
            // We need to set a condition to check if firstNumber is already "0", and prevent more "0"s from being added to it.
            if(firstNumber !== "0") {
                firstNumber += numberBtn.textContent;
            } else {
                firstNumber = numberBtn.textContent;
            }
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