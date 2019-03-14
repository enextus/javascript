

var calculator = {
  getSum: function() {
    var sum = this.firstOperand + this.lastOperand;
    return 'The Sum of ' + this.firstOperand + ' and ' + this.lastOperand + ' is: ' + sum;
  },
  getValues: function(firstOperand, lastOperand) {
    this.firstOperand = firstOperand;
    this.lastOperand = lastOperand;
  }
}



calculator.firstOperand = parseInt(prompt("firstOperand"), 10);
calculator.lastOperand = parseInt(prompt("lastOperand"), 10);

// calculator.getValues(42, 42);
console.log(calculator.getSum());