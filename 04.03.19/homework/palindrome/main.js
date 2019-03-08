var strOne = null;
var strTwo = null;
var str = null;

function delSpaces(str) {
  str = str.replace(/\s/g, ''); //delete the spaces
  return str
}

/*
function getRevert(str) {
  str = delSpaces(str);
	return str.split("").str.reverse().str.join("");
}
*/

function getReverse(str) {
  str = delSpaces(str);
  var newStr = '';
  var i = 0;

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

function getCheckPalindrome(strOne, strTwo) {
  strOne = delSpaces(strOne);
  if ( strOne == strTwo ) {
    return true;
    } else {
      return false;
    }
}

var userInput = prompt("Please enter the word/words to check palindrome.");
var revertInput = getReverse(userInput);

if ( getCheckPalindrome(userInput, revertInput) ) {
    alert(":) This was a palindrome!");
    } else {
    alert(":( This was't a palindrome!");
}