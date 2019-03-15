var operationList = ["sum", "difference", "division", "multiply"];

function print_r(arr) {
  var dumped_text = "Default operation by uncorrect input will be a sum.\n\n";

  for (var item in arr) {
    var value = arr[item];
    dumped_text += "'" + item + "' for \"" + value + "\"\n";
  }
  return dumped_text;
}

var calculator = {
  getSum: function () {
    this.value = this.firstOperand + this.lastOperand;
  },
  getDifference: function () {
    this.value = this.firstOperand - this.lastOperand;
  },
  getDivision: function () {
    this.value = this.firstOperand / this.lastOperand;
  },
  getMultiply: function () {
    this.value = this.firstOperand * this.lastOperand;
  },
  getValues: function (firstOperand, lastOperand) {
    this.whichOperation = whichOperation;
    this.firstOperand = firstOperand;
    this.lastOperand = lastOperand;
    this.value = value;
  }
}

alert(print_r(operationList));

calculator.whichOperation = parseInt(prompt("which Operation?"), 10);
calculator.firstOperand = parseInt(prompt("firstOperand"), 10);
calculator.lastOperand = parseInt(prompt("lastOperand"), 10);

switch (calculator.whichOperation) {
  case 0:
    calculator.getSum();
    break;
  case 1:
    calculator.getDifference();
    break;
  case 2:
    calculator.getDivision();
    break;
  case 3:
    calculator.getMultiply();
    break;
  default:
    calculator.getSum();
    break;
}

alert(calculator.value);