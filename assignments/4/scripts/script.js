const display = document.getElementById('display');

let expression = "";

const operators = new Set(["+", "-", "*", "/"]);

// Utility Button Functions

function updateDisplay(num) {
    expression += num;
    display.value = expression;
    console.log("updateDisplay called:", expression);
}

function clearDisplay() {
    console.log("clearDisplay called");
    expression = "";
    display.value = "";
}

// Toggles the negative symbol of current operand
function plusMinus() {
    if (expression === "") {
        expression = "-";
        display.value = expression;
        console.log("plusMinus:", expression);
        return;
    }

    // Locate start of operands
    let i = expression.length - 1;
    while (i >= 0 && !operators.has(expression[i])) i--;
    const start = i + 1;          // Beginning of last number
    const operand = expression.slice(start);

    // Adds or removes negative from operand
    if (operand.startsWith("-")) {
        expression = expression.slice(0, start) + operand.slice(1);
    } else {
        expression = expression.slice(0, start) + "-" + operand;
    }

    display.value = expression;
    console.log("plusMinus:", expression);
}

// Takes the current expression and displays that value as a percent value
function percent() {
    if (expression !== "") {
        try {
            const result = eval(expression);
            const percentValue = result / 100;

            expression = percentValue.toString();
            display.value = expression;
        } catch (e) {
            console.error("Error in percent():", e);
            display.value = "Error";
        }
    }
    console.log("percent called:", expression);
}

function calculate() {
    console.log("calculate called:", expression);

    try {
        const result = eval(expression);
        console.log("calculate() result:", result);
        display.value = result;
        expression = result.toString();
    } catch (e) {
        console.error("calculate() error:", e);
        display.value = "Error";
    }
}

function backspace() {
    if (!expression) {
        display.value = "";
        return;
    }
    expression = expression.slice(0, -1);
    if (expression.length === 1 && operators.has(expression[0])) {
        expression = "";
    }
    display.value = expression;
    console.log("backspace called:", expression);
}

function decimalPoint() {
    if (expression === "") {
        expression = "0."; // Adds 0 if placing decimal before operand
        display.value = expression;
        console.log("decimalPoint called:", expression);
        return;
    }

    const last = expression.slice(-1);
    let i = expression.length - 1;
    while (i >= 0 && !operators.has(expression[i])) i--;
    const start = i + 1;
    const segment = expression.slice(start);

    if (segment.includes(".")) {
        display.value = expression;
        return;
    }
    // Places 0 if following operator (Before operand)
    if (operators.has(last)) {
        expression += "0.";
    } else {
        expression += ".";
    }
    display.value = expression;
    console.log("decimalPoint called:", expression);
}


// Operation button Functions

function addOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);

        // Replace previous operator if any
        if (operators.has(last)) {
            expression = expression.slice(0, -1);
        }
        expression += "+";
        display.value = expression;
    }
    console.log("addOperator called:", expression);
}


function subtractOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);

        if (operators.has(last)) {
            expression = expression.slice(0, -1);
        }
        expression += "-";
        display.value = expression;

        console.log("subtractOperator called:", expression);
    }
}

function multiplyOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);

        if (operators.has(last)) {
            expression = expression.slice(0, -1);
        }
        expression += "*";
        display.value = expression;
    }
    console.log("multiplyOperator called:", expression);
}

function divideOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);

        if (operators.has(last)) {
            expression = expression.slice(0, -1);
        }
        expression += "/";
        display.value = expression;
    }
    console.log("divideOperator called:", expression);
}

// Event Listeners

document.getElementById("btn0").addEventListener("click", () => updateDisplay(0));
document.getElementById("btn1").addEventListener("click", () => updateDisplay(1));
document.getElementById("btn2").addEventListener("click", () => updateDisplay(2));
document.getElementById("btn3").addEventListener("click", () => updateDisplay(3));
document.getElementById("btn4").addEventListener("click", () => updateDisplay(4));
document.getElementById("btn5").addEventListener("click", () => updateDisplay(5));
document.getElementById("btn6").addEventListener("click", () => updateDisplay(6));
document.getElementById("btn7").addEventListener("click", () => updateDisplay(7));
document.getElementById("btn8").addEventListener("click", () => updateDisplay(8));
document.getElementById("btn9").addEventListener("click", () => updateDisplay(9));

document.getElementById("add").addEventListener("click", addOperator);
document.getElementById("subtract").addEventListener("click", subtractOperator);
document.getElementById("multiply").addEventListener("click", multiplyOperator);
document.getElementById("divide").addEventListener("click", divideOperator);

document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("backspace").addEventListener("click", backspace);
document.getElementById("percent").addEventListener("click", percent);
document.getElementById("plusMinus").addEventListener("click", plusMinus);
document.getElementById("decimal").addEventListener("click", decimalPoint);
document.getElementById("equals").addEventListener("click", calculate);


