class Calculator{ 
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }
    allClear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){
        if(this.currentOperand === '.' && this.currentOperand.includes('.') )return
        
        this.currentOperand = this.currentOperand + number;
    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDislay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}




const numButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const acButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
//Making an object calculator of class Calculator... 
const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

//Now telling buttons what to do on click
numButtons.forEach((button) =>{    //for every button
    button.addEventListener('click', () => { //when user clicks
        calculator.appendNumber(button.innerText); //append that operand
        calculator.updateDislay(); //update it to the display
    })
}) 
