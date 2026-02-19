let currentNumber = 0;
let previousNumber = 0;
let operation = 0;

const n1 = document.getElementById('1');
const n2 = document.getElementById('2');
const n3 = document.getElementById('3');
const n4 = document.getElementById('4');
const n5 = document.getElementById('5');
const n6 = document.getElementById('6');
const n7 = document.getElementById('7');
const n8 = document.getElementById('8');
const n9 = document.getElementById('9');
const n0 = document.getElementById('0');

const add = document.getElementById('add');
const subtract = document.getElementById('substract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const delet = document.getElementById('del');
const reset = document.getElementById('reset');

const display = document.getElementById('output');

n1.addEventListener('click', () => {
    currentNumber += '1';
    display.textContent = currentNumber;
});

n2.addEventListener('click', () => {
    currentNumber += '2';
    display.textContent = currentNumber;
});

n3.addEventListener('click', () => {
    currentNumber += '3';
    display.textContent = currentNumber;
});

n4.addEventListener('click', () => {
    currentNumber += '4';
    display.textContent = currentNumber;
});

n5.addEventListener('click', () => {
    currentNumber += '5';
    display.textContent = currentNumber;
});

n6.addEventListener('click', () => {
    currentNumber += '6';
    display.textContent = currentNumber;
});

n7.addEventListener('click', () => {
    currentNumber += '7';
    display.textContent = currentNumber;
});

n8.addEventListener('click', () => {
    currentNumber += '8';
    display.textContent = currentNumber;
});

n9.addEventListener('click', () => {
    currentNumber += '9';
    display.textContent = currentNumber;
});

n0.addEventListener('click', () => {
    currentNumber += '0';
    display.textContent = currentNumber;
});

add.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = 0;
    operation = 'add';
    display.textContent = currentNumber;
});

subtract.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = 0;
    operation = 'subtract';
    display.textContent = currentNumber;
});

multiply.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = 0;
    operation = 'multiply';
    display.textContent = currentNumber;
});

divide.addEventListener('click', () => {
    previousNumber = currentNumber;
    currentNumber = 0;
    operation = 'divide';
    display.textContent = currentNumber;
});

equals.addEventListener('click', () => {
    if (operation === "add") {
        display.textContent = Number(previousNumber + currentNumber);
    } else if (operation === "substract") {
        display.textContent = Number(previousNumber - currentNumber);
    } else if (operation === "multiply") {
        display.textContent = Number(previousNumber * currentNumber);
    } else if (operation === "divide") {
        display.textContent = Number(previousNumber / currentNumber);
    } else if (operation === "reset") {
        display.textContent = 0;
    } else if (operation === "delet") {
        display.textContent = Number(previousNumber - 1);
    } else {
        display.textContent = "ERROR"
    }
})