var i = 0;
var count = 0;
var obj = {};
var arr = ['Petya', 'Petya', 'str', 'Vasya', 'Vasya', 'Vasya', 'John', 'John'];

function countArray(arr) {

  while (i < arr.length) {

    if (typeof (obj[arr[i]]) != 'undefined') {

      count = obj[arr[i]];
      count++;
      obj[arr[i]] = count;

      } else {

        obj[arr[i]] = 1;
      }

    i++;
  };

  return obj;
}

var check = countArray(arr);
console.log(check);