var str = null;

function getRevert(str) {
  str = str.split(""); //convert str to array
  str = str.reverse(); //revers the arrays elements
  str = str.join(""); //join the values together
	return str;
}

var userInput = prompt("Please enter the word/words to revert its.");
var revertInput = getRevert(userInput);

alert("Here is your reverted thing: " + revertInput);
