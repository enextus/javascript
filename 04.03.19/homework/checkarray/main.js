//var array = [ 1, 2, 3 ];
var array = ["a", 2, 3];

function checkArray(array) {
  for ( i = 0; i < array.length; i++){
    if (typeof array[i] != "number"){
      return false;
    } else {
      return true;
    }
  }
}

var check = checkArray(array);