// forEach() method list each item in the array

var myArr = [1, 2, 3, 'a', 'b', 'c', NaN, true, [false, true, 1, 3]];

function myOwnFunction(elem, index) {
  console.log((index + 1) + ". element of array is " + elem);
}

function myforEachFunc(myArr, myOwnFunction) {

  for (var index = 0; index < myArr.length; ++index) {
    myOwnFunction(myArr[index], index);
  }
}

console.log(myforEachFunc(myArr, myOwnFunction));