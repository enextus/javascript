// The slice() method returns the selected elements in an array, 
// as a new array object.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' 4 ']; // seed array
var startElemNum = null;
var endElemNum = null;

function mySliceFunc(arr, startElemNum, endElemNum) {
  var myNewArray = [];
  var end = null;
  var start = null;

  function checkRange() {
    if (startElemNum >= 0 && endElemNum > 0) {
      start = startElemNum;
      end = endElemNum - 1;

      if (start > end) {
        return myNewArray;
      }
    } else if (startElemNum >= 0 && endElemNum < 0) {
      start = startElemNum;
      end = arr.length + endElemNum - 1;

      if (start > end) {
        return myNewArray;
      }
    } else if (startElemNum < 0 && endElemNum > 0) {
      start = arr.length + startElemNum;
      end = endElemNum - 1;

      if (start < 0) {
        start = 0;
      }

      if (start > end) {
        return myNewArray;
      }
    } else if (startElemNum < 0 && endElemNum < 0) {
      start = arr.length + startElemNum;
      end = arr.length + endElemNum - 1;

      if (start < 0) {
        start = 0;
      }

      if (start > end) {
        return myNewArray;
      }
    }
  }

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

    if ((startElemNum === 0 && endElemNum === 0) || (startElemNum != 0 && endElemNum === 0)) {
      return myNewArray;
    } else {
      checkRange();
      myNewArray = myLoop(arr, start, end);
    }

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
    myNewArray = arr;
  }

  return myNewArray;
}

var result = mySliceFunc(myArr, 0, 1);
console.log(result);