const display = document.getElementById('display');

let expression = "";

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

function plusMinus() {
    // TODO
    console.log("plusMinus called");
}

function percent() {
    // TODO
    console.log("percent called");
}

function calculate() {
    console.log("calculate called:", expression);

    let result = eval(expression);
    console.log("calculate called result:", result);
    display.value = result;
    expression = result.toString();
}

function backspace() {
    // TODO
    console.log("backspace called");
}

function decimalPoint() {
    // TODO
    console.log("decimalPoint called");
}

// Operation button Functions

function addOperator() {
    console.log("addOperator called:", expression);
    if (expression !== "" && !expression.endsWith("+")) {
        expression += "+";
        display.value = expression;
        console.log("[addOperator after:", expression);
    }
}

function subtractOperator() {
    // TODO
    console.log("subtractOperator called");
}

function multiplyOperator() {
    // TODO
    console.log("multiplyOperator called");
}

function divideOperator() {
    // TODO
    console.log("divideOperator called");
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


