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

    console.log("begin = " + begin);
    console.log("deleteCount = " + deleteCount);

    // begin = 0 delete all elements OK
    if (begin === 0 && deleteCount === null) {
        deleteCount = myArr.length;
    }

    // begin 1 
    if (begin > 0 && deleteCount === null) {
        begin = begin;
        deleteCount = myArr.length;
    }

    // begin = -1 delete all from with counting end
    if (begin < 0 && deleteCount === null) {
        if (Math.abs(begin) > myArr.length) {
            begin = 0;
        } else {
            begin = myArr.length + begin;
        }
        console.log("3 begin = " + begin);
        deleteCount = myArr.length;
        console.log("3 deleteCount = " + deleteCount);
    }

    // begin = -10 and its lenght > myArr.lenght then begin = 0 and it will be delete all elements
    // begin = 100 and its lenght > myArr.lenght then it will be nothing deleted from myArray

    deleteElementsFromMyArray();


    if (myAddArray.length) {
        addMyAddArray();
    }

    function showOutput(arr) {
        return console.log(arr);
    }

    function deleteElementsFromMyArray() {
        if (deleteCount === 0) {
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

mySpliceFunc(myArr, -10);