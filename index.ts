const resultElement: HTMLElement | null = document.getElementById('result');

const input1: HTMLElement | null = document.getElementById('input1');
const input2: HTMLElement | null = document.getElementById('input2');

const summitButton: HTMLElement | null = document.getElementById('submit');

const plusButton: HTMLElement | null  = document.getElementById('plus');
const minusButton: HTMLElement | null = document.getElementById('minus');
const multiplyButton: HTMLElement | null = document.getElementById('multiplication');
const divisionButton: HTMLElement | null = document.getElementById('division');

let action: string = '+'

const sum: number = input1 + input2;
console.log(sum);

plusButton.onclick = function (): void {
    action = '+'
}
minusButton.onclick = function (): void {
    action = '-'
}
multiplyButton.onclick = function (): void {
    action = '*'
}
divisionButton.onclick = function (): void {
    action = '/'
}
//полученного результат. если меньше 0 то красная цифра, иначе зеленая
function printResult(result :any): void {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computrNumbersWitAction(inp1: any, inp2: any, actionSymbol: any):number|undefined {
    const num1: number = Number(inp1.value);
    const num2: number = Number(inp2.value);
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

summitButton.onclick = function ():void {
    const result: number|undefined = computrNumbersWitAction(input1, input2, action);
    printResult(result);
}
