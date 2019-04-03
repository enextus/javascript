function mySplice (arr, start, deleteCount, ...items) {
  var resultArray = [];
  var temporaryArray = [];
  
  if (start > arr.length) {
    start = arr.length;
  } else if (start < 0) {
    start = animals.length - - start;
    if (start < 0) {
      start = 0;
      }
  } else if (start === -0) {
    start = 0;
  }
  
  if (deleteCount > arr.length - start) {
    deleteCount = arr.length - start;
  } else if (deleteCount < 0) {
    deleteCount = 0;
  }

  if (deleteCount === 0 && arguments.length <= 3) {
    return resultArray;

  } else if (deleteCount > 0 && arguments.length <= 3) {
    
    for (var i = 0, a = start; i < deleteCount; i++, a++) {
      resultArray.push(arr[a]);
    }
    for (var a = start + deleteCount; a < arr.length; a++) {
      arr[a - deleteCount] = arr[a];
    }
    arr.length = arr.length - deleteCount;
    return resultArray;

  } else if (deleteCount > 0 && arguments.length > 3) {
    
    for (var i = start; i < start + deleteCount; i++) {
      resultArray.push(arr[i]);
    }
    for (var i = start + deleteCount; i < arr.length; i++) {
      temporaryArray.push(arr[i]);
    }
    if (deleteCount === arr.length - start) {
      arr.length = start;
    }
    for (var i = 3, a = start; i < arguments.length; i++, a++) {
      arr[a] = arguments[i];
    }
    if (temporaryArray[0]) {
      for (var i = start + arguments.length - 3, a = 0; a < temporaryArray.length; i++, a++) {
        arr[i] = temporaryArray[a];
      }
    }
    return resultArray;
  
  } else if (deleteCount === 0 && arguments.length > 3) {
    
    for (var i = start; i < arr.length; i++) {
      temporaryArray.push(arr[i]);
    }
    arr.length = start;
    for (var i = 3; i < arguments.length; i++) {  
      arr.push(arguments[i]);
    }
    for (var i = 0; i < temporaryArray.length; i++) {
      arr.push(temporaryArray[i]);
    }
    return resultArray;
  
  }
}

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
mySplice(animals, " 3 ");