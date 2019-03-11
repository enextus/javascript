var strOne = null;
var strTwo = null;

function isEndEqual(strOne, strTwo) {

  strOne = strOne.toLowerCase();
  strTwo = strTwo.toLowerCase();

  var lengthOfStrOne = strOne.length;
  var lengthOfStrTwo = strTwo.length;

  if (lengthOfStrOne >= lengthOfStrTwo) {

    var arrOneEnd = [];
    var begin = lengthOfStrOne - lengthOfStrTwo;
    var strOneArr = strOne.split("");

    for (var i = 0; i < lengthOfStrTwo; i++) {
      arrOneEnd.push(strOneArr[begin + i]);
    }

    var strOneEnd = arrOneEnd.join("");

    if (strOneEnd === strTwo) {
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }
}

var strOne = prompt("Please enter the first word/words to check the end.");
var strTwo = prompt("Please enter the second word/words to check the end.");

var result = isEndEqual(strOne, strTwo);

console.log(result);