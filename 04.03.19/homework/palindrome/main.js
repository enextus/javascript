var strOne = null;
var strTwo = null;
var str = null;

function delSpaces(str){
  str = str.replace(/\s/g, ''); //delete the spaces
  return str
}

function getRevert(str) {
  str = delSpaces(str);
	return str.split("").str.reverse().str.join("");
}

function getCheckPalindrome(strOne, strTwo) {
  strOne = delSpaces(strOne);
  if (strOne == strTwo){
    return true;
    } else {
      return false;
    }
}

var userInput = prompt("Please enter the word/words to check palindrome.");
var revertInput = getRevert(userInput);

if (getCheckPalindrome(userInput, revertInput)){
    alert(":) This was a palindrome!");
    } else {
      alert(":( This was't a palindrome!");
}