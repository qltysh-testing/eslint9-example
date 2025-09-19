const calculator = require('./calculator');
const { formatNumber, parseUserInput } = require('./utils');
const userService = require('./userService');

// Main application entry point
async function main() {
    console.log('Welcome to the Calculator App!');

    // Get user data
    const user = await userService.getCurrentUser();
    console.log(`Hello, ${user.name}!`);

    // Perform some calculations
    const num1 = 10;
    const num2 = 5;

    const sum = calculator.add(num1, num2);
    const difference = calculator.subtract(num1, num2);
    const product = calculator.multiply(num1, num2);
    const quotient = calculator.divide(num1, num2);

    // Display results
    console.log(`${num1} + ${num2} = ${formatNumber(sum)}`);
    console.log(`${num1} - ${num2} = ${formatNumber(difference)}`);
    console.log(`${num1} × ${num2} = ${formatNumber(product)}`);
    console.log(`${num1} ÷ ${num2} = ${formatNumber(quotient)}`);

    // Unused variable (ESLint will detect this)
    const unusedVariable = 'This variable is never used';

    // Process user input
    const userInput = '42';
    const parsed = parseUserInput(userInput);
    console.log(`Parsed user input: ${parsed}`);
}

// Run the application
main().catch(error => {
    console.error('Application error:', error);
});