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
    if(firstNumber !== "" && secondNumber !== "" && currentOperator !== null) {
    display.textContent = operate(currentOperator, firstNumber, secondNumber);
    }
});

clearBtn.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    display.textContent = "0";
});

function operate(currentOperator, firstNumber, secondNumber) {
    let result = "";
    if(typeof firstNumber !== "number" || typeof secondNumber !== "number") {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);   
    }
    switch(currentOperator) {
        case "+":
            return result = add(firstNumber,secondNumber).toFixed(10);
        case "-":
            return result = subtract(firstNumber,secondNumber).toFixed(10);
        case "x":
            return result = multiply(firstNumber,secondNumber).toFixed(10);
        case "➗":
            if(secondNumber === 0) return "Not today Satan! Press AC to reset the calculator.";
            else return result = divide(firstNumber,secondNumber).toFixed(10);
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