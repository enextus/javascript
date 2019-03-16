function sum(firstOperand) {

    var currentSum = firstOperand;
    console.log("1. currentSum = " + currentSum);

    function f(secondOperand) {

        currentSum += secondOperand;
        console.log("2. currentSum = " + currentSum);

        return f;
    }

    f.toString = function () {

        console.log("3. currentSum = " + currentSum);
        return currentSum;
    };

    return f;
}

console.log(sum(0)(1)(2)(3)(4)(5));
console.log(sum(1)(2)(5)(44));
