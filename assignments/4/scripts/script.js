const display = document.getElementById('display');
let expression = "";

const operators = new Set(["+", "-", "*", "/"]);

// Utility buttons

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

// Adds negative to the start of current operand
function plusMinus() {
    if (expression === "") {
        expression = "-";
        display.value = expression;
        console.log("plusMinus:", expression);
        return;
    }

    let i = expression.length - 1;
    while (i >= 0 && !operators.has(expression[i])) i--;
    const start = i + 1;
    const operand = expression.slice(start);

    if (operand.startsWith("-")) {
        expression = expression.slice(0, start) + operand.slice(1);
    } else {
        expression = expression.slice(0, start) + "-" + operand;
    }

    display.value = expression;
    console.log("plusMinus:", expression);
}

// Evaluates current expression then finds percent value
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
    console.log("percent() called:", expression);
}

function calculate() {
    try {
        const result = eval(expression);

        if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
            display.value = "Error";
            expression = "";
            return;
        }

        display.value = result;
        expression = result.toString();
    } catch (e) {
        console.error("calculate() error:", e);
        display.value = "Error";
        expression = "";
    }
    console.log("calculate() called:", expression);
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
        expression = "0."; // Add 0 if operand is empty
        display.value = expression;
        console.log("decimalPoint called:", expression);
        return;
    }

    // Find start of operand
    const last = expression.slice(-1);
    let i = expression.length - 1;
    while (i >= 0 && !operators.has(expression[i])) i--;
    const start = i + 1;
    const segment = expression.slice(start);

    if (segment.includes(".")) return;

    // Add 0 after operand
    if (operators.has(last)) {
        expression += "0.";
    } else {
        expression += ".";
    }

    display.value = expression;
    console.log("decimalPoint called:", expression);
}

// Operator Functions

function addOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);
        if (operators.has(last)) expression = expression.slice(0, -1); // Replaces previous operator
        expression += "+";
        display.value = expression;
    }
    console.log("addOperator called:", expression);
}

function subtractOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);
        if (operators.has(last)) expression = expression.slice(0, -1);
        expression += "-";
        display.value = expression;
    }
    console.log("subtractOperator called:", expression);
}

function multiplyOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);
        if (operators.has(last)) expression = expression.slice(0, -1);
        expression += "*";
        display.value = expression;
    }
    console.log("multiplyOperator called:", expression);
}

function divideOperator() {
    if (expression !== "") {
        const last = expression.slice(-1);
        if (operators.has(last)) expression = expression.slice(0, -1);
        expression += "/";
        display.value = expression;
    }
    console.log("divideOperator called:", expression);
}


// Listeners

for (let n = 0; n <= 9; n++) {
    document.getElementById("btn" + n).addEventListener("click", () => updateDisplay(n.toString()));
}

// Operators
document.getElementById("add").addEventListener("click", addOperator);
document.getElementById("subtract").addEventListener("click", subtractOperator);
document.getElementById("multiply").addEventListener("click", multiplyOperator);
document.getElementById("divide").addEventListener("click", divideOperator);

// Utility buttons
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("backspace").addEventListener("click", backspace);
document.getElementById("percent").addEventListener("click", percent);
document.getElementById("plusMinus").addEventListener("click", plusMinus);
document.getElementById("decimal").addEventListener("click", decimalPoint);
document.getElementById("equals").addEventListener("click", calculate);


// Keyboard Support

const keyToButtonId = {
    "0": "btn0", "1": "btn1", "2": "btn2", "3": "btn3",
    "4": "btn4", "5": "btn5", "6": "btn6", "7": "btn7",
    "8": "btn8", "9": "btn9",

    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",

    ".": "decimal",

    "Enter": "equals",
    "=": "equals",

    "Backspace": "backspace",
    "Delete": "clear",
    "Escape": "clear",

    "%": "percent",

    "p": "plusMinus",
    "P": "plusMinus"
};

document.addEventListener("keydown", (event) => {
    const id = keyToButtonId[event.key];
    if (!id) return;

    const btn = document.getElementById(id);
    if (!btn) return;

    btn.click();
    event.preventDefault();
});

// Underglow effect

const buttons = document.querySelectorAll(".calculator button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.remove("glow-pulse");
        void btn.offsetWidth;
        btn.classList.add("glow-pulse");
    });

    btn.addEventListener("animationend", () => {
        btn.classList.remove("glow-pulse");
    });
});


// Menu

// Profile button
const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", () => {
    // go back to index.html in same folder
    window.location.href = "index.html";
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const themes = ["dark", "light", "sfsu"];
let currentThemeIndex = 0;

function applyTheme(mode) {
    document.body.classList.remove("light-theme", "sfsu-theme");

    if (mode === "light") {
        document.body.classList.add("light-theme");
    } else if (mode === "sfsu") {
        document.body.classList.add("sfsu-theme");
    }
}

function updateThemeIcon(mode) {
    if (mode === "dark") {
        themeIcon.textContent = "☾";
    } else if (mode === "light") {
        themeIcon.textContent = "☀";
    } else {
        themeIcon.textContent = "SFSU";
    }
}

// initial theme (dark)
applyTheme("dark");
updateThemeIcon("dark");

themeToggle.addEventListener("click", () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const mode = themes[currentThemeIndex];

    applyTheme(mode);
    updateThemeIcon(mode);
});
