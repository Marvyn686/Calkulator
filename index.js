const resultElement = document.getElementById('result');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const summitButton = document.getElementById('submit');

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const multiplyButton = document.getElementById('multiplication');
const divisionButton = document.getElementById('division');

let action = '+'

const sum = Number(input1.value) + Number(input2.value);
console.log(sum);

plusButton.onclick = function () {
    action = '+'
}
minusButton.onclick = function () {
    action = '-'
}
multiplyButton.onclick = function () {
    action = '*'
}
divisionButton.onclick = function () {
    action = '/'
}
//полученного результат. если меньше 0 то красная цифра, иначе зеленая
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computrNumbersWitAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol === '+') {
        return num1 + num2;
    }
    if (actionSymbol === '-') {
        return num1 - num2;
    }
    if (actionSymbol === '*') {
        return num1 * num2;
    }
    if (actionSymbol === '/') {
        return num1 / num2;
    }
}

summitButton.onclick = function () {
    const result = computrNumbersWitAction(input1, input2, action);
    printResult(result);
}
