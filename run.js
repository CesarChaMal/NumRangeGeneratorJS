// Import the range functions from the rangeFunctions.js file
const { range, rangeRecursive, rangeArrayFrom, rangeGenerator } = require('./src/rangeFunctions');

// Execute and log the results of each range function
console.log('Range:', range(1, 50));
console.log('Range Recursive:', rangeRecursive(1, 50));
console.log('Range Array From:', rangeArrayFrom(1, 50));
console.log('Range Generator:', [...rangeGenerator(1, 50)]);
