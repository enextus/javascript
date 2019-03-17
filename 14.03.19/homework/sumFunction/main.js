function sumFunction(firstOperand) {

    var currentSum = firstOperand;

    function funcSum(secondOperand) {
        currentSum += secondOperand;
        return funcSum;
    }

    funcSum.toString = function () {
        return currentSum;
    };

    return funcSum;
}

