function sumFunction(operator) {

    var currentSum = operator;
    console.log("0. currentSum = " + currentSum);

    // ..................................................

    function f(parameter) {

        if (parameter === undefined) {
            return "Result = " + currentSum;
        }

        console.log("1a. currentSum = " + currentSum);
        currentSum += parameter;
        console.log("1b. currentSum = " + currentSum);
        console.log("1. f = " + f);

        return f;
    }

    // ..................................................

    f.toString = function () {
        return currentSum;
    };

    return f;
}