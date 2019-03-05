var strOne = null;
var strTwo = null;
var str = null;

function delSpaces(str){
  str = str.replace(/\s/g, ''); //delete the spaces
  return str
}

function getRevert(str) {
  str = delSpaces(str);
  str = str.split(""); //convert str to array
  str = str.reverse(); //revers the arrays elements
  str = str.join(""); //join the values together
	return str;
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