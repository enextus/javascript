// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' abc ']; // seed  array

function mySpliceFunc(arr, ...args) {
    var begin = null;
    var deleteCount = null;
    var myAddArray = [];
    var myOutputArr = [];

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

    function showOutput(arr) {
        return console.log(arr);
    }

    function deleteElementsFromMyArray() {
        var myTempStartArr = [];
        var myTempArr = [];
        var myTempEndArr = [];
        var myArrAfterSplice = [];

        if (deleteCount === 0) {
            myArrAfterSplice;
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
        myArr = myArr.concat(myAddArray);
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

    myArr = myArr;
    return showOutput(myOutputArr);
}

mySpliceFunc(myArr, 1, 1, "dfg", "dfg", "dfg", "dfg", "dfg", "dfg", "dfg", "dfg");