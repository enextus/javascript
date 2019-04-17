var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var startArr = [];
var tempArr = [];
var endArr = [];

for (i = 0; i < arr.length; i++) {
    if (i >= 0 && i <= 2) {
        startArr.push(arr[i]);
    }

    if (i >= 3 && i <= 5) {
        tempArr.push(arr[i]);
    }

    if (i >= 6) {
        endArr.push(arr[i]);
    }
}

startArr.push(tempArr);
arr = startArr.concat(endArr);

console.log("startArr = " + startArr);
console.log("tempArr = " + tempArr);
console.log("endArr = " + endArr);
console.log("arr = " + arr);