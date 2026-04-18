let firstNumber = "";
let secondNumber = "";
let currentOperator = null;

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const executeBtn = document.querySelector('#executeBtn');
const clearBtn = document.querySelector('#clearBtn');    

numbers.forEach((numberBtn) => {
        numberBtn.addEventListener("click", () => {
            if (currentOperator === null) {
                firstNumber === "0" ? firstNumber = numberBtn.textContent : firstNumber += numberBtn.textContent;
                display.textContent = firstNumber;
            } else {
                secondNumber === "0" ? secondNumber = numberBtn.textContent : secondNumber += numberBtn.textContent;
                display.textContent  = secondNumber;
            }
    });
});

operators.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if(firstNumber !== "" && secondNumber !== "" && currentOperator !== null) {
            operate(currentOperator, firstNumber, secondNumber);
            display.textContent = operate(currentOperator, firstNumber, secondNumber);
            firstNumber = display.textContent;
            currentOperator = operatorBtn.textContent;
            secondNumber = "";
       } else {
        currentOperator = operatorBtn.textContent
       }
    })
}) 

executeBtn.addEventListener("click", () => {
    display.textContent = operate(currentOperator, firstNumber, secondNumber);
});

function operate(currentOperator, firstNumber, secondNumber) {
    if(typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);
    }

    switch(currentOperator) {
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber,secondNumber);
        case "x":
            return multiply(firstNumber,secondNumber);
        case "➗":
            if(secondNumber === 0) return null;
            if(firstNumber % secondNumber !== 0) {
                return divide(firstNumber,secondNumber).toFixed(10)
            }
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