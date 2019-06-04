// import operations from './node_modules';
// operations.math

// const sum = require('./src/math-operations.js');
// const sumResult = sum(5, 100);
// console.log('sumResult = ', sumResult);

// const substr = require('./src/math-operations.js');
// const substrResult = substr(20, 5);
// console.log('substrResult = ', substrResult);

const mathOperations = require('./src/math-operations.js');

const sumResult = mathOperations.sum(5, 100);
console.log('sumResult = ', sumResult);

const substrResult = mathOperations.substr(20, 5);
console.log('substrResult = ', substrResult);

const divisionResult = mathOperations.division(20, 5);
console.log('divisionResult = ', divisionResult);
