// The slice() method returns the selected elements in an array, 
// as a new array object.

var myArr = ['a0', 'b1', 'c2', 'd3', 'e4']; // seed array

var startElemNum = null;
var endElemNum = null;


function mySliceFunc(startElemNum, endElemNum) {

  var myNewArray = [];
  var end = null;
  var start = null;

  if (!isNaN(startElemNum) && !isNaN(endElemNum) && ((typeof startElemNum && typeof endElemNum) === 'number')) {

    if (endElemNum > 0) {

      end = endElemNum - 1;

    } else if (endElemNum < 0 && (myArr.length + endElemNum) > 0) {

      end = myArr.length - 1 + endElemNum;

    } else if (myArr.length + endElemNum <= 0) {

      return myNewArray;
    }

    if (startElemNum >= 0 && !(startElemNum >= endElemNum)) {

      start = startElemNum;

    } else {

      return myNewArray;
    }

    for (var index = start; index < myArr.length; ++index) {

      myNewArray.push(myArr[index]);

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

var result = mySliceFunc(0, 1);
console.log(result);