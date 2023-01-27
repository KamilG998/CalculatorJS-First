const previousNumber = document.querySelector('.previous-number');
const currentNumber = document.querySelector('.current-number');
const mathSign = document.querySelector('.math-sign');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const clearOne = document.querySelector('.clear-one');



let result;

function addNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === '') {
        return currentNumber.innerHTML = '0.'
    }
    currentNumber.innerHTML += this.textContent;
}

function operations() {
    if (currentNumber.innerHTML == '' && this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return
    }
    else if (currentNumber.innerHTML === '-') {
        return;
    }

    if (mathSign.innerHTML !== '') {
        showResult()
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = ''
}



function showResult() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;


    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;

    }
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

function clearScreen() {
    previousNumber.innerHTML = '';
    currentNumber.innerHTML = '';
    mathSign.innerHTML = '';
}

// function delNumbers() {
//     if (currentNumber = '') return
//     else {
//         currentNumber.toString().slice(0, -1);
//     }

// }




numbers.forEach((button) => button.addEventListener('click', addNumbers));
operators.forEach((button) => button.addEventListener('click', operations));
clear.addEventListener('click', clearScreen);
equals.addEventListener('click', showResult);




