function sum(firstOperand) {

    var currentSum = firstOperand;
    console.log("1. currentSum = " + currentSum);

    function f(secondOperand) {

        currentSum += secondOperand;
        console.log("2. currentSum = " + currentSum);
        console.log("2. f = " + f);

        return f;
    }

    f.toString = function () {

        console.log("3. currentSum = " + currentSum);
        return currentSum;
    };
    console.log("3. f = " + f);
    return f;
}

console.log(sum(0)(1)(2)(3)(4)(5));
console.log(sum(1)(2)(5)(44));
