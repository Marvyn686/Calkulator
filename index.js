//получаем ссылки переменнхе из HTML
var resultElement = document.getElementById('result'); //подтверждения конкретного типа(либо можно сделать проверку на null)
var input1 = document.getElementById('input1'); //подтверждения конкретного типа
var input2 = document.getElementById('input2'); //подтверждения конкретного типа
var summitButton = document.getElementById('submit'); //подтверждения конкретного типа
var plusButton = document.getElementById('plus');
var minusButton = document.getElementById('minus');
var multiplyButton = document.getElementById('multiplication');
var divisionButton = document.getElementById('division');
//задаем переменную для хранения текущей операции
var action = '+';
//кнопки операций
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
    resultElement.textContent = result.toString(); //преобразует строку в число
}
//Функция для вычисления результат
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
//кнопка вычислить
summitButton.onclick = function () {
    var result = computrNumbersWitAction(input1, input2, action);
    if (result !== undefined) { //делаем проверку, что resilt не равно undefined, а равна number
        printResult(result);
    }
};
