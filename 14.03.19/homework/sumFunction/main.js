function sumFunction(operator) {

    var currentSum = operator;

    function f(parameter) {

        if (parameter === undefined) {
            return "Result = " + currentSum;
        }

        currentSum += parameter;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}
