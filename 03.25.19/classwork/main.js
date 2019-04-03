function createCalculator() {
  var calculation;

  if (calculation === undefined) {
    calculation = 0;
  }

  var calculator = {
    sum: function (num1, num2) {
      if (typeof num1 !== 'number' || isNaN(num1)) {
        throw new Error('Incorrect data type of num1');
      }

      if (typeof num2 !== 'number' || isNaN(num2)) {
        throw new Error('Incorrect data type of num2');
      }

      calculation = num1 + num2;
      return calculation;
    },
    diff: function (num1, num2) {
      if (typeof num1 !== 'number' || isNaN(num1)) {
        throw new Error('Incorrect data type of num1');
      }

      if (typeof num2 !== 'number' || isNaN(num2)) {
        throw new Error('Incorrect data type of num2');
      }

      calculation = num1 - num2;
      return calculation;
    },
    multiplication: function (num1, num2) {
      if (typeof num1 !== 'number' || isNaN(num1)) {
        throw new Error('Incorrect data type of num1');
      }

      if (typeof num2 !== 'number' || isNaN(num2)) {
        throw new Error('Incorrect data type of num2');
      }

      calculation = num1 * num2;
      return calculation;
    },
    division: function (num1, num2) {
      if (typeof num1 !== 'number' || isNaN(num1)) {
        throw new Error('Incorrect data type of num1');
      }

      if (typeof num2 !== 'number' || isNaN(num2)) {
        throw new Error('Incorrect data type of num2');
      }

      calculation = num1 / num2;
      return calculation;
    },
    getCalculation: function () {
      return calculation;
    },
    showCalculation: function () {
      console.log(calculation);
      return calculation;
    },
  };

  return calculator;
}

var calculator = createCalculator();

var firstOperand;
var secondOperand;

try {
  firstOperand = parseInt(prompt("Please input a first operand here:"), 10);
} catch (e) {
  alert('Handled error: ', e.message);
} finally {
  console.log('--- ok ---');
}

try {
  secondOperand = parseInt(prompt("Please input a second operand here:"), 10);
} catch (e) {
  alert('Handled error: ', e.message);
} finally {
  console.log('--- ok ---');
}

calculator.diff(firstOperand, secondOperand);
calculator.showCalculation();