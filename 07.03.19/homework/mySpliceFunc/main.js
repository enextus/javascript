// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = ['a0', 'b1', 'c2', 'd3']; // seed array

function mySpliceFunc( start, deleteCount ) {

    var myNewArray = [];

    var begin = null;
    var end = null;

    if ( !isNaN( start ) && !isNaN( deleteCount ) && ( ( typeof start && typeof deleteCount ) === 'number' ) ) {
    
        begin = start;
        end = begin + deleteCount;


        for ( var index = begin; index < myArr.length; ++index) {
      
            myNewArray.push( myArr[index] );
      
            if ( index === end ) {
              break;
            }
        }

          console.log( " myArr = " + myArr );
          console.log( " myNewArray = " + myNewArray );

        return myNewArray;

    } else if ( !startElemNum && !endElemNum ) {
  
        myArr = [];
    }

}

var result = mySpliceFunc( 0, 2);
console.log( result );
