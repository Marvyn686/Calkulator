var resultElement = document.getElementById('result');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var summitButton = document.getElementById('submit');
var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');
var multiplyButton = document.getElementById('multiplication');
var divisionButton = document.getElementById('division');
var action = '+';
var sum = input1 + input2;
console.log(sum);
plusButton.onclick = function () {
    action = '+';
};
minusButton.onclick = function () {
    action = '-';
};
multiplyButton.onclick = function () {
    action = '*';
};
divisionButton.onclick = function () {
    action = '/';
};
//полученного результат. если меньше 0 то красная цифра, иначе зеленая
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    }
    else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}
function computrNumbersWitAction(inp1, inp2, actionSymbol) {
    var num1 = Number(inp1.value);
    var num2 = Number(inp2.value);
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
    var result = computrNumbersWitAction(input1, input2, action);
    printResult(result);
};
