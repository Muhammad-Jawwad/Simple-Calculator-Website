class Calculator{ 
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
    }
    allClear(){
        this.previousOperandTextElement = ' ';
        this.currentOperandTextElement = ' ';
        this.operation = undefined;
    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDislay(){
        
    }
}




const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const acButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
//Making an object calculator of class Calculator... 
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);
//Now telling buttons what to do on click
numButton.forEach(button=>{ //for every button
    button.addEventListener('click',()=>{ //when user clicks
        calculator.appendNumber(button.innerHTML); //append that operand
        calculator.updateDislay(); //update it to the display
    })
}) 
