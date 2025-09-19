// Utility functions

function formatNumber(num) {
    return num.toLocaleString('en-US');
}

function parseUserInput(input) {
    // Using == instead of === (ESLint will detect this)
    if (input == null) {
        return 0;
    }

    const parsed = parseInt(input, 10);
    return isNaN(parsed) ? 0 : parsed;
}

// Format date for display
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Check if value is empty
function isEmpty(value) {
    return value === null || value === undefined || value === '';
}

module.exports = {
    formatNumber,
    parseUserInput,
    formatDate,
    isEmpty
};