var strOne = null;
var strTwo = null;

function isEndEqual( strOne, strTwo ) {

  var lengthOfStrOne = strOne.length;
  var lengthOfStrTwo = strTwo.length;
  var arrOneEnd = [];

  if ( lengthOfStrOne >= lengthOfStrTwo ) {

    var begin = lengthOfStrOne - lengthOfStrTwo;
    var strOneArr = strOne.split("");

    for ( var i = 0; i < lengthOfStrTwo; i++ ) {
      arrOneEnd.push(strOneArr[begin + i]);
    }

    var strOneEnd = arrOneEnd.join("");

    if ( strOneEnd === strTwo) {
      return true;
      } else {
        return false;
    }

  } else {
    return false;
  }
}

var strOne = prompt("Please enter the first word/words to check the end.").toLowerCase();
var strTwo = prompt("Please enter the second word/words to check the end.").toLowerCase();

var result = isEndEqual( strOne, strTwo );

console.log(result);
