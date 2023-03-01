let firstNumber = "";
let secondNumber = "";
let operator = "";
const display = document.getElementById("numbers");
let operatorPressed = false;
let equalsPressed = false;
display.innerText = "0";

function appendNumber(x) {
    if (display.innerText.length > 15){
        return;
    }
    if (equalsPressed){
        display.innerText = null;
        firstNumber = "";
    }
    if (x === 0){
        if (display.innerText === "0"){
            return;
        } else {
            display.innerText += x;
            return;
        }
    }

    if (display.innerText === "0"){
        display.innerText = null;
    }
    if (operatorPressed){
        display.innerText = null;
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
    display.innerText = null;
    display.innerText = Number(answer).toFixed(6);
    firstNumber = Number(answer).toFixed(6);
    equalsPressed = true;
}

function clearScreen(){
    display.innerText = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    operatorPressed = false;
    equalsPressed = false;
}

function backspace(){
    if (display.innerText.length === 1){
        display.innerText = "0";
        return;
    }
    if (display.innerText === "0"){
        return;
    }
    if (equalsPressed) {
        return;
    }
    
    display.innerText = display.innerText.slice(0, -1);
}

function addDecimal(){
    if (display.innerText.includes('.')){
        return;
    }
    display.innerText += '.';
}