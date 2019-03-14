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
    for (var index = start; index < arr.length; index++) {
      myNewArray.push(arr[index]);

      if (index === end) {
        break;
      }
    }
    return myNewArray;
  }

  if (!isNaN(startElemNum) && !isNaN(endElemNum) && (typeof startElemNum === 'number') && (typeof endElemNum === 'number')) {

    //1. case: (myArr, 0, 1) (myArr, 0, 0) (myArr, 1, 0) (myArr, 1, -1) (myArr, -1, 1)  (myArr, 1, 1) (myArr, -1, -1) OK

    console.log('//1. case, (myArr, 1, -1) (myArr, -1, 1)  (myArr, 1, 1) (myArr, -1, -1)');

    if (endElemNum > 0) {
      end = endElemNum - 1;
    } else if (endElemNum < 0 && (arr.length + endElemNum) > 0) {

      console.log('here1');
      end = arr.length + endElemNum;
      console.log('start = ' + start + ', end = ' + end);

    } else if (arr.length + endElemNum <= 0) {

      console.log('here2');

      return myNewArray;
    }

    if (startElemNum >= 0 && !(startElemNum >= endElemNum)) {
      start = startElemNum;
    } else {
      return myNewArray;
    }

    console.log('start = ' + start + 'end = ' + end);
    myNewArray = myLoop(arr, start, end);
    return myNewArray;

  } else if (typeof startElemNum === 'undefined' && typeof endElemNum === 'undefined') {

    // 2. case: (myArr) OK
    console.log('2. case: (myArr)');
    myNewArray = arr;

  } else if ( !isNaN(startElemNum) && (typeof startElemNum === 'number') && !endElemNum ) {

    // 3. case: (myArr, 0) (myArr, 1) (myArr, -1)
    console.log('3. case: (myArr, 0) (myArr, 1) (myArr, -1)');
    if (startElemNum >= 0) {
      start = startElemNum;
    } else if  (startElemNum < 0) {
      arr.length + startElemNum >= 0 ? start = arr.length + startElemNum : start = 0;
    }

    for (var index = start; index < arr.length; index++) {
      myNewArray.push(arr[index]);

      if (index === arr.length) {
        break;
      }
    }
  }

  // case: (myArr, "sdfsdf") (myArr, "sdfsdf", "sdfsdf") ОК
  console.log('myArr = ' + myArr);
  return myArr;
}

var result = mySliceFunc(myArr, -1);
console.log(result);