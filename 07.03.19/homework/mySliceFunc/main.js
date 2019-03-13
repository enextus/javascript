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
    // console.log('arr = ' + arr + ', ' + 'start = ' + start + ', ' + 'end = ' + end);
    for (var index = start; index < arr.length; ++index) {
      myNewArray.push(arr[index]);

      if (index === end) {
        break;
      }
    }
    return myNewArray;
  }

  if (!isNaN(startElemNum) && !isNaN(endElemNum) && (typeof startElemNum === 'number') && (typeof endElemNum === 'number')) {

    if (endElemNum > 0) {

      end = endElemNum - 1;

    } else if (endElemNum < 0 && (arr.length + endElemNum) > 0) {

      end = arr.length - 1 + endElemNum;

    } else if (arr.length + endElemNum <= 0) {

      return myNewArray;
    }

    if (startElemNum >= 0 && !(startElemNum >= endElemNum)) {
      start = startElemNum;
    } else {
      return myNewArray;
    }

    myNewArray = myLoop(arr, start, end);
    return myNewArray;

  } else if (typeof startElemNum === 'undefined' && typeof endElemNum === 'undefined') {

    myNewArray = arr;

  } else if ( !isNaN(startElemNum) && (typeof startElemNum === 'number') && !endElemNum ) {

    if (startElemNum >= 0) {
      start = startElemNum;
    } else if  (startElemNum < 0) {
      arr.length + startElemNum >= 0 ? start = arr.length + startElemNum : start = 0;
    }

    for (var index = start; index < arr.length; ++index) {
      myNewArray.push(arr[index]);

      if (index === arr.length) {
        break;
      }
    }
  }

  return myNewArray;
}

var result = mySliceFunc(myArr, 4, 18);
console.log(result);