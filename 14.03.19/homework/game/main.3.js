function func(x) {
    var tmp = 'sdasdasd';
    console.log(tmp); // ReferenceError: tmp is not defined
    if (x < 0) {

        ( function () { // IIFE
            var tmp = 100 - x;
            console.log(tmp);
        }) ();

    }
}