// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ']; // seed  array
var result = null;

function mySpliceFunc(myArr, ...args) {

    var myTempStartArr = [];
    var myTempEndArr = [];
    var myResultSpliceArr = [];
    var myArrAfterSplice = [];
    var begin = null;
    var myAddArray = [];

    console.log("All args = " + args);
    walkThroughParameters(args);

    function walkThroughParameters(args) {
        for (i = 0; i < args.length; i++) {

            console.log("args = " + i + "-й , " + args[i]);

            if (  !isNaN(Number(args[0])) && typeof Number(args[0]) === 'number'  ) {
                begin = Number(args[0]);
            } else {
                begin = 0;
            }

            if (  !isNaN(Number(args[1])) && typeof Number(args[1]) === 'number'  ) {
                deleteCount = Number(args[1]);
            } else {
                deleteCount = 0;
            }

            if (i > 1) {
                myAddArray.push(args[i]);
            }



        }

        if (deleteCount === 0) {
            return myArrAfterSplice;
        }
        console.log("begin = " + begin);
        console.log("deleteCount = " + deleteCount);
        console.log("myAddArray = " + myAddArray);
        console.log("myArrAfterSplice = " + myArrAfterSplice);
    }










    function walkThroughArray(start, end) {
        var arr = [];

        for (var index = start; index < myArr.length; index++) {
            arr.push(myArr[index]);

            if (index === (end - 1)) {
                break;
            }
        }

        return arr;
    }


    // if (!isNaN(start) && !isNaN(deleteCount) && (typeof start === 'number') && (typeof deleteCount === 'number')) {

    //     console.log('myArrAfterSplice = ' + myArrAfterSplice);
    //     return myResultSpliceArr;

    // } else if (!startElemNum && !endElemNum) {

    //     myArr = [];
    // }
}

console.log('myArr = ' + myArr);

result = mySpliceFunc(myArr, "1", "1");
console.log("result = " + result);