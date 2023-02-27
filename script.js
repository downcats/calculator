let firstNumber = "";
let secondNumber = "";
let operator = "";
const display = document.getElementById("numbers");

function appendNumber(x) {
    if (x === 0){
        if (display.innerHTML === ""){
            return;
        } else {
            display.innerText += x;
            return;
        }
    }
    display.innerText += x;
}

function selectOperator(x){
    operator = x;
    firstNumber = Number(display.innerText);
    display.innerHTML = null;
}

function operate(){
    secondNumber = Number(display.innerText);
    let answer = "";
    switch(operator){
        case "/":
            if (secondNumber === 0){
                break;
            }
            answer = firstNumber / secondNumber;
            break;
        case "*":
            answer = firstNumber * secondNumber;
            break;
        case "+":
            answer = firstNumber + secondNumber;
            break;
        case "-":
            answer = firstNumber - secondNumber;
            break;
        default:
            break;
    }
    display.innerHTML = null;
    display.innerHTML = answer;
}

function clearScreen(){
    display.innerHTML = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}