/* 
    Purpose here is to create that basic add, substract, multiply and divide functions.  Export them.  They will be called from app.js
*/


var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}

var divide = function(num1, num2) {
    if (num2 == 0) {
        return 0;
    }
    
    return num1 / num2;
}

var multiply = function(num1, num2) {
    return num1 * num2;
}

module.exports = {add, subtract, divide, multiply};