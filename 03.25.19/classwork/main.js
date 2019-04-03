function createCalculator() {
    var calculation = 0;
  
    var calculator = {
      sum: function(num1, num2) {
        if (typeof num1 !== 'number' || isNaN(num1)) {
          throw new Error('Incorrect data type of num1');
        }
  
        if (typeof num2 !== 'number' || isNaN(num2)) {
          throw new Error('Incorrect data type of num2');
        }
  
        calculation = num1 + num2;
        return calculation;
      },
      diff: function(num1, num2) {
  
      },
      multiplication: function(num1, num2) {
  
      },
      division: function(num1, num2) {
  
      },
      getCalculation: function() {
        console.log(calculation);
        return calculation;
      },
    };
  
    return calculator;
  }
  
  var calculator = createCalculator();
  
  try {
    calculator.sum(42, 13);
    calculator.getCalculation();
    calculator.sum(13);
  } catch (e) {
    console.log('Handled error: ', e.message);
  } finally {
    console.log('FINALLY!');
  }