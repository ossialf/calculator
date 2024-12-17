let num1 = "";
let num2 = "";
let operator = "";
let opIndex = 0;

const operatorButton = document.querySelector(".op");
const display = document.querySelector(".display");
const numberButton = document.querySelector(".num");
const resolveButton = document.querySelector(".resolveButton");
const acButton = document.querySelector(".AC");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op")

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.floor(a / b * 100)/100;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case "+": return add(a, b);
        break;
        case "-": return substract(a, b);
        break;
        case "*": return multiply(a, b);
        break;
        case "/": return divide(a, b);
        break;
    }
}

function clearDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
}

function resetNums() {
    num1 = "";
    num2 = "";
}

function displaySomething(a) {
    display.appendChild(document.createTextNode(`${a}`));
}

function getNum2() {
    num2 = display.innerText.substring(display.innerText.lastIndexOf(operator)+1);
}

resolveButton.addEventListener("click", function(e) {
    getNum2();
    clearDisplay();
    result = operate(operator, num1, num2);
    displaySomething(result);
    num1 = result;
    opIndex = 0;
});

acButton.addEventListener("click", function(e) {
    clearDisplay();
    resetNums();
    opIndex = 0;
});

numButtons.forEach(element => {
    element.addEventListener("click", function(e) {
        displaySomething(e.target.innerText);
    });
});

opButtons.forEach(element => {
    element.addEventListener("click", function(e) {
        if (opIndex == 0) {
            num1 = display.innerText;
        } else {
            getNum2();
            num1 = operate(operator, num1, num2);
        }
        opIndex++;
        operator = e.target.innerText;
        displaySomething(operator);
    });
});