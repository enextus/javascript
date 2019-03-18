function sumFunction(firstOperand) {

    var currentSum = firstOperand;

    function funcSum(secondOperand) {

        if (secondOperand === undefined) {
            return "Result = " + currentSum;
        }

        currentSum += secondOperand;
        return funcSum;
    }

    funcSum.toString = function () {
        return currentSum;
    };

    return funcSum;
}