/*
    The exercise here is to call each of the methods defined in calculator.js.
*/

var calc = require('./calculator');

var addResult = calc.add(1, 2);
console.log("Addition result: " + addResult);

var subtractResult = calc.subtract(20, 10);
console.log("Subtraction result: " + subtractResult);

var multipleResult = calc.multiply(10, 10);
console.log("Multiplication result: " + multipleResult);

var divisionResult = calc.divide(100, 20);
console.log("Division result: " + divisionResult);

var divideByZeroResult = calc.divide(20, 0);
console.log("Divide by zero result: " + divideByZeroResult);