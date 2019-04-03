function myGame() {
    
    var num;
    console.log("num = " + num);

    var obj = {
        sum: function(a, b) {
           num = a + b;
        }
    };

    return function(dig) {
        console.log("1. num = " + num);
        num = dig;
        num++;
        console.log("2. num = " + num);
    };

}




