var myArr = [1, 2, 3, 'a', 'b', 'c', NaN, true, [false, true, 1, 3]];

function myFunction ( elem, index ) {
  console.log( index + ". element of array is " + elem );
  }

function myforEachFunc( myArr, myFunction ) {

  var result = myArr.forEach(myFunction);

  return result;
  }

console.log( myforEachFunc( myArr, myFunction ) );
