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
    return op(a,b);
}

function show(number) {
    const display = document.querySelector(".display");
    display.textContent = display.textContent + number;
}

function getDisplayValue() {
    const display = document.querySelector(".display");
    return Number(display.textContent);
}


function setup() {
    const display = document.querySelector(".display");
    var a = "";
    var b = "";
    var op = null;
    var comma = false;

    const digits = document.querySelectorAll(".digit");
    digits.forEach(digit => digit.addEventListener("click", function() {
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
    operators.forEach(operator => operator.addEventListener("click", function() {
        if(!op) {
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
    equal.addEventListener("click", function() {
        if (a && op && b) {
            display.textContent = "";
            show(operate(op, Number(a), Number(b)));
            a = display.textContent;
            b = "";
            op = null;
        }
    })
}


setup();