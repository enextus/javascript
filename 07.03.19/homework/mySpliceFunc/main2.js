// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' abc ']; // seed  array

function mySpliceFunc(arr, ...args) {

    var begin = null;
    var deleteCount = null;
    var myAddArray = [];

    walkThroughParameters(args);

    if (begin || begin === 0) {

        // begin = 0 delete all elements
        // begin = 1.. delete all from 0 (begin) to the begin 1
        // begin = -1 delete from the end
        // begin = -10 and its lenght > myArr.lenght then begin = 0 and it will be delete all elements
        // begin = 100 and its lenght > myArr.lenght then it will be nothing deleted from myArray

        deleteElementsFromMyArray();
    }

    if (myAddArray.length) {
        addMyAddArray();
    }

    function deleteElementsFromMyArray() {

        var myTempStartArr = [];
        var myTempArr = [];
        var myTempEndArr = [];

        if (deleteCount === 0) {
            // if deleteCount = 0  then it will be nothing deleted and the programm will go to stop
            return myArrAfterSplice;
        }

        var delEnd = begin + deleteCount;

        if (delEnd > arr.length) {
            delEnd === arr.length;
        }

        for (var index = 0; index < arr.length; index++) {
            if (index < begin) {
                myTempStartArr.push(arr[index]);
            }

            if (index >= begin && index < delEnd) {
                myTempArr.push(arr[index]);
            }

            if (index >= delEnd) {
                myTempEndArr.push(arr[index]);
            }
        }
        return myArr = myTempStartArr.concat(myTempEndArr);
    }

    function addMyAddArray() {
        return myArr = myArr.concat(myAddArray);
    }

    function walkThroughParameters(args) {
        for (i = 0; i < args.length; i++) {
            // console.log("args = " + i + "-й , " + args[i]);
            if (!isNaN(Number(args[0])) && typeof Number(args[0]) === 'number') {
                begin = Number(args[0]);
            } else {
                // begin = 0;
                // if deleteCount = 0  then it will be nothing deleted and the programm will go to stop
                console.log("!!! begin has not a numerical worth !!!");
                return myArr;
            }

            if (!isNaN(Number(args[1])) && typeof Number(args[1]) === 'number') {
                // console.log(" args[1] = " + args[1] + " typeof args[1] = " + typeof args[1]);
                deleteCount = Number(args[1]);
            } else if (typeof args[1] === 'string') {
                console.log("!!! deleteCount has not a numerical worth !!!");
                deleteCount = 0;
            }
            // else if we don't have second element then  deleteCount = null; see on top
            if (i > 1) {
                myAddArray.push(args[i]);
            }
        }
    }
    return myArr = myArr;
}

console.log('BEGIN myArr = ' + myArr + "\n  ");
mySpliceFunc(myArr, 2, 2, "сдфд", "8", 9);
console.log("RESULT myArr = " + myArr);
