var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Please enter a number: ");
var num2 = readlineSync.questionInt("Please enter another number: ");

readlineSync.setDefaultOptions({limit: ['+', '-', '/', '*']});
var operator = readlineSync.question("Please enter an operator (+, -, /, *): ");

var result = 0;

switch (operator) {
    case "+":
        result = num1 + num2;
    break;
    case "-":
        result = num1 - num2;
    break;
    case "/":
        result = num1 / num2;
    break;
    case "*":
        result = num1 * num2;
    break;
}

console.log(num1 + " " + operator + " "  + num2 + " = " + result);
