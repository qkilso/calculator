function add(first, second){
    return first + second;
}

function subtract(first, second){
    return first - second;
}

function multiply(first, second){
    return first * second;
}

function divide(first, second){
    return first / second;
}

function calculate(operator, first, second){
    switch(operator){
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
    }
}

function activateCalculator(){
    const bottomScreen = document.querySelector('#bottom_screen');
    const buttons = document.body.querySelectorAll('.key_pad');
    const number_key = [];
    const display = document.body.querySelector('#display');
    buttons.forEach(button => {

        const className = button.firstChild.className
        const buttonTextContent = button.firstChild.textContent;
        switch(className){
            case 'number':
                button.addEventListener('click', ()=>{
                    display.textContent += parseInt(buttonTextContent);
                })
                break;
            case 'symbol':
                button.addEventListener('click', ()=>{
                    display.textContent += ` ${buttonTextContent} `;
                })
                break;
            case 'ENTER':
                button.addEventListener('click', ()=>{
                    startCalculations(display.textContent);
                })
                break;
        }

    });
}

function evil(fn){
    return new Function('return '+fn)();
}

activateCalculator();

function startCalculations(displayText){
    const displayArray = displayText.split(' ');
    let initial = parseInt(displayArray[0]);
    let temporaryNumber = 0;
    let temporarySymbol = '';
    for(let i = 1; i < displayArray.length; i++){
        if(i%2 !== 0){
            temporarySymbol = displayArray[i];
        } else {
            temporaryNumber = parseInt(displayArray[i]);
            initial = calculate(temporarySymbol, initial, temporaryNumber);
        }
    }
    console.log(initial);
}
