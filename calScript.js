class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
    }
    allClear(){

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperator(){
        
    }

}




const numButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const acButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

