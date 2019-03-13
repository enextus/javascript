// The slice() method returns the selected elements in an array, 
// as a new array object.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' 4 ']; // seed array
var startElemNum = null;
var endElemNum = null;

function mySliceFunc(arr, startElemNum, endElemNum) {
  var myNewArray = [];
  var end = null;
  var start = null;

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

    for (var index = start; index < arr.length; ++index) {
      myNewArray.push(arr[index]);

      if (index === end) {
        break;
      }
    }

    return myNewArray;

  } else if (!startElemNum && !endElemNum) {
    myNewArray = [];
  }

  return myNewArray;
}

var result = mySliceFunc(myArr, 1, 4);
console.log(result);