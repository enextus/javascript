// The slice() method returns the selected elements in an array, 
// as a new array object.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ']; // seed array
var startElemNum = null;
var endElemNum = null;

function mySliceFunc(arr, startElemNum, endElemNum) {
  var myNewArray = [];
  var end = null;
  var start = null;

  function myLoop(arr, start, end) {
    for (var index = start; index < arr.length; index++) {
      myNewArray.push(arr[index]);
      if (index === end) {
        break;
      }
    }
    return myNewArray;
  }

  if (!isNaN(startElemNum) && !isNaN(endElemNum) && (typeof startElemNum === 'number') && (typeof endElemNum === 'number')) {

    //1. case: (myArr, 0, 0 ОК) (myArr, 1, 0 ОК) (myArr, 0, 1 ОК)  (myArr, 1, 1 ОК) (myArr, 1, -1 ОК) (myArr, -1, 1 OK)
    //   (myArr, -1, -1) 
    if (endElemNum > 0) {
      end = endElemNum - 1;
    } else if (endElemNum < 0 && (arr.length + endElemNum) > 0) {

      end = arr.length + endElemNum - 1;
      start = startElemNum;
      myNewArray = myLoop(arr, start, end);

    } else if (arr.length + endElemNum <= 0) {
      return myNewArray;
    }

    if (startElemNum >= 0 && (startElemNum > endElemNum)) {

      if (startElemNum >= (arr.length + endElemNum)) {
        return myNewArray = [];
      }
      
      return myNewArray;
    } else if (startElemNum < 0 && (startElemNum < endElemNum)) {

      start = arr.length + startElemNum;

      if (start < 0) {
        start = 0;
      }

      if ((arr.length + startElemNum) >= endElemNum) {
        return myNewArray = [];
      }
    }

    myNewArray = myLoop(arr, start, end);
    return myNewArray;

  } else if (typeof startElemNum === 'undefined' && typeof endElemNum === 'undefined') {
    myNewArray = arr;

  } else if (!isNaN(startElemNum) && (typeof startElemNum === 'number') && !endElemNum) {

    if (startElemNum >= 0) {
      start = startElemNum;
    } else if (startElemNum < 0) {
      arr.length + startElemNum >= 0 ? start = arr.length + startElemNum : start = 0;
    }

    myNewArray = myLoop(arr, start, arr.length);

  } else if ((typeof startElemNum === 'string') && !endElemNum) {

    return myArr;
  }

  return myNewArray;
}

var result = mySliceFunc(myArr, -8, -3);
console.log(result);