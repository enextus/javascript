var i = 0;
var count = 0;
var obj = {};
var arr = ['Petya', 'Petya', 'str', 'Vasya', 'Vasya', 'Vasya', 'John', 'John'];

function getStringsFrequency(arr) {

  while (i < arr.length) {
    if ( obj[arr[i]] ) {
          obj[arr[i]] += 1;
        } else {
          obj[arr[i]] = 1;
        }

    i++;
  };
  return obj;
}

var check = getStringsFrequency(arr);
console.log(check);
