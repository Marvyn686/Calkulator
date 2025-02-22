//получаем ссылки переменнхе из HTML

const resultElement: HTMLElement  = document.getElementById('result') as HTMLElement;//подтверждения конкретного типа(либо можно сделать проверку на null)

const input1: HTMLInputElement | null = document.getElementById('input1') as HTMLInputElement;//подтверждения конкретного типа. HTMLInputElement применяется только для элементов input
const input2: HTMLInputElement | null = document.getElementById('input2') as HTMLInputElement;//подтверждения конкретного типа

const summitButton: HTMLElement = document.getElementById('submit')as HTMLElement;//подтверждения конкретного типа

const plusButton: HTMLElement | null = document.getElementById('plus') as HTMLElement;
const minusButton: HTMLElement | null = document.getElementById('minus') as HTMLElement;
const multiplyButton: HTMLElement | null = document.getElementById('multiplication') as HTMLElement;
const divisionButton: HTMLElement | null = document.getElementById('division') as HTMLElement;
//задаем переменную для хранения текущей операции
let action: string = '+'

//кнопки операций
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

//Проверка полученного результат. Если меньше 0, то красная цифра, иначе зеленая
//
function printResult(result: number): void {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result.toString();//преобразует строку в число
}
//Функция для вычисления результат
function computrNumbersWitAction(inp1: HTMLInputElement, inp2: HTMLInputElement, actionSymbol: string): number | undefined {
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
//кнопка вычислить
summitButton.onclick = function (): void {
    const result: number | undefined  =  computrNumbersWitAction(input1, input2, action);
        if (result !== undefined) { //делаем проверку, что result не равно undefined, а равна number
            printResult(result);
        }

}
