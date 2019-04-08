var animals = ['ant', 'bison', 'camel', 'duck', 'elephant','panda','fish','dog','cat'];

function mySplice (arr, start, deleteCount) {
  var resultArray = [];
  var temporaryArray = [];

  function startingPointDetermination (start, arr) {
    var resultStart = start;
  
    if (typeof(resultStart) === 'string') {
      resultStart = parseInt (resultStart);
    } 
    
    if (resultStart > arr.length) {
      resultStart = arr.length;
      return resultStart;
    } else if (resultStart < 0) {
      resultStart = arr.length - - resultStart;
      if (resultStart < 0) {
        resultStart = 0;
        return resultStart;
        }
        return resultStart;
    } else if (resultStart === true) {
      resultStart = 1;
      return resultStart;
    } else if (isNaN (resultStart) || resultStart === false || resultStart === undefined || resultStart === null) {
      resultStart = 0;
      return resultStart;
    } 
    return resultStart;
  }

  function determinationQuantityDeletionElements (deleteCount, arr) {
    var resultDelete = deleteCount;

    if (typeof(resultDelete) === 'string') {
      resultDelete = parseInt(resultDelete);
    }

    if (resultDelete > arr.length - resultStart || typeof(resultDelete) === 'undefined') {
      resultDelete = arr.length - resultStart;
      return resultDelete;
    } else if (resultDelete < 0 || isNaN (resultDelete) || resultDelete === false) {
      resultDelete = 0;
      return resultDelete;
    } else if (resultDelete === true) {
      resultDelete = 1;
      return resultDelete;
    }
    return resultDelete;
  }

  resultStart = startingPointDetermination (start, arr);
  resultDelete = determinationQuantityDeletionElements (deleteCount, arr);
  
  function cuttingElements (arr, resultStart, resultDelete) {
    var resultArray = [];

    for (var i = resultStart, j = 0; j < resultDelete; i++, j++) {
      resultArray.push (arr[i]);
    }
    return resultArray;
  }

  function saveStartOfArray (arr, resultStart) {
    var storedArrayStart = [];

    for (var i = 0; i < resultStart; i++) {
      storedArrayStart.push (arr[i]);
    }
    return storedArrayStart;
  }

  function saveEndOfArray (arr, resultStart, resultDelete) {
    var savedEndOfArray = [];

    for (var i = resultStart + resultDelete; i < arr.length; i++) {
      savedEndOfArray.push (arr[i]);
    }
    return savedEndOfArray;
  }

  function addingItems (arguments) {
    var addedItems = [];

    for (var i = 3; i < arguments.length; i++) {
      addedItems.push (arguments[i]);
    }
    return addedItems;
  }

  function overwritingTheOriginalArray (arr, temporaryArray) {
    arr.length = 0;

    for (var i = 0; i < temporaryArray.length; i++) {
      arr.push (temporaryArray[i]);
    }
  }

  if (resultDelete === 0 && arguments.length <= 3) {
    return resultArray;

  } else if (resultDelete === 0 && arguments.length > 3) {
    temporaryArray = saveStartOfArray (arr, resultStart).concat (addingItems (arguments), saveEndOfArray (arr, resultStart, resultDelete));
    overwritingTheOriginalArray (arr, temporaryArray);
    return resultArray;

  } else if (resultDelete > 0 && arguments.length <= 3) {
    resultArray = cuttingElements (arr, resultStart, resultDelete);
    temporaryArray = saveStartOfArray (arr, resultStart).concat (saveEndOfArray (arr, resultStart, resultDelete));
    overwritingTheOriginalArray (arr, temporaryArray);
    return resultArray;

  } else if (resultDelete > 0 && arguments.length > 3) {
    resultArray = cuttingElements (arr, resultStart, resultDelete);
    temporaryArray = saveStartOfArray (arr, resultStart).concat (addingItems (arguments), saveEndOfArray (arr, resultStart, resultDelete));
    overwritingTheOriginalArray (arr, temporaryArray);
    return resultArray;
  }
}

mySplice(animals,'4',3,'Volvo',42);
