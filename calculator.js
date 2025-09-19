// Calculator module with basic arithmetic operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function sqrt(num) {
    if (num < 0) {
        throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(num);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt
};