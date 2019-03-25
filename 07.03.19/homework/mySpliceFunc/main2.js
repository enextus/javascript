// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' abc ']; // seed array

function mySpliceFunc(arr, ...args) {
    var begin = null;
    var deleteCount = null;
    var myTempStartArr = [];
    var myTempArr = [];
    var myTempEndArr = [];
    var myArrAfterSplice = [];
    var myAddArray = [];
    var myOutputArr = [];

    walkThroughParameters(args);

    if (begin === 0 && deleteCount === null) {
        deleteCount = myArr.length;
    }
    if (begin > 0 && deleteCount === null) {
        begin = begin;
        deleteCount = myArr.length;
    }
    if (begin < 0 && deleteCount === null) {
        if (Math.abs(begin) > myArr.length) {
            begin = 0;
        } else {
            begin = myArr.length + begin;
        }
        deleteCount = myArr.length;
    }
    if (begin < 0 && deleteCount > 0) {
        if (Math.abs(begin) > myArr.length) {
            begin = 0;
        } else {
            begin = myArr.length + begin;
        }
    }

    deleteElementsFromMyArray();

    if (myAddArray.length) {
        addMyAddArray();
    }

    function showOutput(arr) {
        return console.log(arr);
    }

    function deleteElementsFromMyArray() {
        var delEnd = null;

        if (deleteCount === 0) {
            return myArrAfterSplice;
        }

        delEnd = begin + deleteCount;

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
        myOutputArr = myTempArr;
        myArr = myTempStartArr.concat(myTempEndArr);
    }

    function addMyAddArray() {
        myArr = (myTempStartArr.concat(myAddArray)).concat(myTempEndArr);
    }

    function walkThroughParameters(args) {
        for (i = 0; i < args.length; i++) {
            if (!isNaN(Number(args[0])) && typeof Number(args[0]) === 'number') {
                begin = Number(args[0]);
            } else {
                return myArr;
            }
            if (!isNaN(Number(args[1])) && typeof Number(args[1]) === 'number') {
                deleteCount = Number(args[1]);
            } else if (typeof args[1] === 'string') {
                deleteCount = 0;
            }
            if (i > 1) {
                myAddArray.push(args[i]);
            }
        }
    }
    return showOutput(myOutputArr);
}

mySpliceFunc(myArr, -2);