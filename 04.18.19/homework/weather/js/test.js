let arr = [1, 6, 4, 8, 54, 3, 444, 9, -4, 0, 12];
function bubbleSortConcept1(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }

  }
  return arr;
}

bubbleSortConcept1(arr);