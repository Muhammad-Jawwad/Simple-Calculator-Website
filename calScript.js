class Calculator{ 
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.allClear();
    }
    allClear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    compute(){
        const pre = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(pre) || isNaN(curr)) return
        switch (this.operation) {
            case "+":
                computation = pre + curr;
                break
            case '-':
                computation = pre - curr;
                break
            case 'x':
                computation = pre * curr
                break
            case '÷':
                computation = pre / curr
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    displayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
        integerDisplay = ''
        } 
        else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
        } 
        else {
        return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =
        this.displayNumber(this.currentOperand)
        if (this.operation != null) {
        this.previousOperandTextElement.innerText =
            `${this.displayNumber(this.previousOperand)} ${this.operation}`
        } 
        else {
        this.previousOperandTextElement.innerText = ''
        }
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
        calculator.updateDisplay(); //update it to the display
    })
}) 

operatorButtons.forEach((button) =>{    //for every button
    button.addEventListener('click', () => { //when user clicks
        calculator.chooseOperation(button.innerText); //append that operand
        calculator.updateDisplay(); //update it to the display
    })
}) 

equalsButton.addEventListener('click', (button) => {
    calculator.compute()
    calculator.updateDisplay()
  })

acButton.addEventListener('click', (button)=> {
    calculator.allClear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', (button)=> {
    calculator.delete();
    calculator.updateDisplay();
})
