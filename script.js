let firstNumber = "";
let secondNumber = "";
let operator = "";
const display = document.getElementById("numbers");
display.innerHTML = "0";

function appendNumber(x) {
    if (x === 0){
        if (display.innerHTML === "0"){
            return;
        } else {
            display.innerText += x;
            return;
        }
    }

    if (display.innerHTML === "0"){
        display.innerHTML = null;
    }
    display.innerText += x;
}

function selectOperator(x){
    operator = x;
    firstNumber = Number(display.innerText);
    display.innerHTML = "0";
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
    display.innerHTML = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function addDecimal(){
    if (!display.innerHTML === null && !display.innerHTML.includes('.')){
        display.innerText += ".";
    }
}