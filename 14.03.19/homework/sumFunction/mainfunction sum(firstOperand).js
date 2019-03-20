function sum(firstOperand) {



		if (firstOperand === undefined) {
test1();
		    return "Please input the first operator! "
		}

	var varsum = firstOperand;


	var test1 = (function () {

		console.log("firstOperand " + firstOperand);
		console.log("typeof firstOperand " + typeof firstOperand);

	})();



	function f(secondOperand) {
	
		console.log("secondOperand " + secondOperand);
		console.log("typeof secondOperand " + typeof secondOperand);

		if (secondOperand === undefined) {
		    return "Result = " + varsum;
		}

	       	varsum += secondOperand;

		return f;

		}

	f.toString = function() {

		return varsum;
	};

	return f;
}