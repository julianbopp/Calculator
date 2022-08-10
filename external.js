function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
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



let digits = document.querySelectorAll(".digit");
console.log(digits);

digits.forEach(digit => digit.addEventListener("click", function() {
    show(digit.textContent);
}));