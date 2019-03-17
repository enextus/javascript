function createCalculator() {
    var calculation;

    var calculator = {

        sum: function (a, b) {
            if (typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b)) {
                param = a + b;
                this.setCalculation(param);
                return param;
            } else {
                return alert('Input error.');
            }
        },
        difference: function (a, b) {
            if (typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b)) {
                param = a - b;
                this.setCalculation(param);
                return param;
            } else {
                return alert('Input error.');
            }
        },
        division: function (a, b) {
            if (typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b)) {
                param = a / b;
                this.setCalculation(param);
                return param;
            } else {
                return alert('Input error.');
            }
        },
        multiply: function (a, b) {
            if (typeof (a) === 'number' && typeof (b) === 'number' && !isNaN(a) && !isNaN(b)) {
                param = a * b;
                this.setCalculation(param);
                return param;
            } else {
                return alert('Input error.');
            }
        },
        setCalculation: function (param) {
            calculation = param;
            return calculation;
        },
        getCalculation: function () {
            return calculation;
        }
    }
    return calculator;
}