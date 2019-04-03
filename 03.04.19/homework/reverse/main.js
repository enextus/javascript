var str = null;

/*
function getReverse(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
	return str;
}
*/

function getReverse(str) {
  var newStr = '';

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}


var userInput = prompt("Please enter the word/words to revert its.");
var reverseInput = getReverse(userInput);

alert("Here is your reverted thing: " + reverseInput);