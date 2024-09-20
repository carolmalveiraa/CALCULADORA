const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const button = document.querySelectorAll("#button-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // Adicionando números ao display
    addDigit(digit) {
        // Checando operção atual
        if(digit === "." && this.currentOperationText.innerText.includes(".")){
        return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Novo método para processar operações
    processOperation(operation) {

        // Checando se há um número no display
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        // Antes
        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch(operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "÷":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentlOperator();
                break;
            case "C":
                this.processClearOperator();
                break;
            case "=":
                this.processEqualOperator();
                break;
                default:
                    return;
        }
    }

    // Atualizando o display
    updateScreen(
        operationValue = null, 
        operation = null,
        current = null,
        previous = null
    ) {
        if (operantionValue === null ) {
            this.currentOperationText.innerText += this.currentOperation;
        }
        else {
            this.currentOperationText.innerText = operationValue;
            this.previousOperationText.innerText = `${previous} ${operation} ${current}`;
        }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});