function sum(firstOperand) {

    var currentSum = firstOperand;

    function f(secondOperand) {
        currentSum += secondOperand;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(sum(0)(1)(2)(3)(4)(5)(6)); // 15
console.log(sum(1)(2)(5)(44)); // 
