// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = ['a0', 'b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7']; // seed array

function mySpliceFunc( start, deleteCount ) {

    var myNewArray = [];
    var myTempArray = [];
    var begin = null;

    if ( !isNaN( start ) && !isNaN( deleteCount ) && ( ( typeof start && typeof deleteCount ) === 'number' ) ) {
    
        if ( ( start === 0 && deleteCount === 0 ) || deleteCount <= 0  ) {

            return myNewArray; 
        }

        if ( start < 0 ) {

            begin = myArr.length + start;

        } else {

            begin = start;
        }

        var end = begin + deleteCount;

        for ( var index = begin; index < myArr.length; index++ ) {
      
            myNewArray.push( myArr[index] );

            if ( index === ( end - 1 ) ) {
              break;
            }
        }

        var otherBegin = begin + deleteCount;
        var otherEnd = myArr.length;

        for ( var index = otherBegin; index < myArr.length; index++) {

            myTempEndArray.push( myArr[index] );
      
            if ( index === otherEnd ) {
              break;
            }
        }

          console.log( " myArr.length = " + myArr.length );
          console.log( " myArr = " + myArr );
          console.log( " myNewArray = " + myNewArray );
          console.log( " myTempEndArray = " + myTempEndArray );

        return myNewArray;

    } else if ( !startElemNum && !endElemNum ) {
  
        myArr = [];
    }
}

var result = mySpliceFunc( 1, 5 );
console.log( result );
