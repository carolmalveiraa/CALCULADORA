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
        if(digit === "." && this.currentOperation.includes(".")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Novo método para processar operações
    processOperation(operation) {
        // Antes
        let operationValue;
        let previous = +this.previousOperationText.innerText;
        let current = +this.currentOperationText.innerText;

        switch(operation) {
            case "+":
                operationValue = previous + current;
                break;
            case "-":
                operationValue = previous - current;
                break;
            case "x":
                operationValue = previous * current;
                break;
            case "÷":
                operationValue = previous / current;
                break;
        }
    }

    // Atualizando o display
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation;
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