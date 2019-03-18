function sumFunction(operator) {

    console.log("operator = " + operator);

    var currentSum = operator;
    console.log("0. currentSum = " + currentSum);

    // ..................................................

    function f(parameter) {

        console.log("parameter = " + parameter);

        if (parameter === undefined) {
            return "Result = " + currentSum;
        }

        console.log("1a. currentSum = " + currentSum);
        currentSum += parameter;
        console.log("1b. currentSum = " + currentSum);

        console.log("f = " + f);

        return f;
    }

    // ..................................................

    f.toString = function () {
        return currentSum;
    };


    console.log("\n you are here \n\n\n");

    return f;
}

// function isObject(obj) {
//     return (typeof obj === "object" && obj !== null) || typeof obj === "function";
// }