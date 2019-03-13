// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ']; // seed array

function mySpliceFunc(myArr, start, deleteCount) {
    var myTempStartArr = [];
    var myTempEndArr = [];
    var myResultSpliceArr = [];
    var myArrAfterSplice = [];
    var begin = null;

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
    if (!isNaN(start) && !isNaN(deleteCount) && (typeof start === 'number') && (typeof deleteCount === 'number')) {
        if ((start === 0 && deleteCount === 0) || deleteCount <= 0) {

            return myResultSpliceArr;
        }
        if (start < 0) {
            begin = myArr.length + start;

        } else {
            begin = start;
        }
        if (begin != 0) {
            var arrBegin = 0;
            var beginPartEnd = begin;
            myTempStartArr = walkThroughArray(arrBegin, beginPartEnd);
        }
        var end = begin + deleteCount;
        myResultSpliceArr = walkThroughArray(begin, end);

        var otherBegin = begin + deleteCount;
        var otherEnd = myArr.length + 1;
        myTempEndArr = walkThroughArray(otherBegin, otherEnd);
        myArrAfterSplice = myTempStartArr.concat(myTempEndArr);

        console.log('myArrAfterSplice = ' + myArrAfterSplice);

        return myResultSpliceArr;

    } else if (!startElemNum && !endElemNum) {
        myArr = [];
    }
}
console.log('myArr = ' + myArr);
var result = mySpliceFunc(myArr, 1, 2);
console.log(result);