var array = [ 1, 2, 3, 4, 5, 6, "d" ];

function checkArray(array) {
  for ( var i = 0; i < array.length; i++){
    if (typeof array[i] != "number"){
      return false;
    }
  }
  return true;
}

var check = checkArray(array);