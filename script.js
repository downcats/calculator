let firstNumber = "";
let secondNumber = "";
let operator = "";
const display = document.getElementById("numbers");
let operatorPressed = false;
let equalsPressed = false;
display.innerHTML = "0";

function appendNumber(x) {
    if (equalsPressed){
        display.innerText = null;
        firstNumber = "";
    }
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
    if (operatorPressed){
        display.innerHTML = null;
        operatorPressed = false;
    }
    display.innerText += x;
    equalsPressed = false;
}

function selectOperator(x){
    operator = x;
    firstNumber = Number(display.innerText);
    operatorPressed = true;
}

function operate(){
    if (!equalsPressed){
        secondNumber = Number(display.innerText);
    }   
    if (firstNumber === ''){
        return;
    }
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
    firstNumber = answer;
    equalsPressed = true;
}

function clearScreen(){
    display.innerHTML = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorPressed = false;
    equalsPressed = false;
}

function addDecimal(){
    if (!display.innerHTML === null && !display.innerHTML.includes('.')){
        display.innerText += ".";
    }
}