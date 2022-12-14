
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
    return a / b;
}

function operate(op, a, b) {
    return op(a, b);
}

function show(number) {
    const display = document.querySelector(".display");
    display.textContent = display.textContent + number;
}

function getDisplayValue() {
    const display = document.querySelector(".display");
    return Number(display.textContent);
}

function clearAll() {
    a = "";
    b = "";
    op = null;
    display.textContent = "";
}

function deleteOne() {
    if (b !== "") {
        b = b.slice(0, -1);
        display.textContent = display.textContent.slice(0,-1);
    }
    else if (op !== null) {
        op = null;
    }
    else if (a !== "") {
        a = a.slice(0, -1);
    } else {
        return;
    }
    display.textContent = display.textContent.slice(0,-1);

}


const display = document.querySelector(".display");
var a = "";
var b = "";
var op = null;
var comma = false;

const digits = document.querySelectorAll(".digit");
digits.forEach(digit => digit.addEventListener("click", function () {
    if (digit.id === "comma" && comma) {
        return;
    }
    if (digit.id === "comma" && !comma) {
        comma = true;
    }
    show(digit.textContent);
    if (!op) {
        a = a + digit.textContent;
    } else {
        b = b + digit.textContent;
    }
}));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", function () {
    if (!op) {
        show(operator.textContent);
        if (operator.id === "add") {
            op = add;
        }
        if (operator.id === "subtract") {
            op = subtract;
        }
        if (operator.id === "multiply") {
            op = multiply;
        }
        if (operator.id === "divide") {
            op = divide;
        }
    }
}));

const equal = document.querySelector("#equals");
equal.addEventListener("click", function () {
    if (a && op && b) {
        display.textContent = "";
        show(operate(op, Number(a), Number(b)));
        a = display.textContent;
        b = "";
        op = null;
    }
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", clearAll);

const deleteLast = document.querySelector("#delete");
deleteLast.addEventListener("click", deleteOne);

