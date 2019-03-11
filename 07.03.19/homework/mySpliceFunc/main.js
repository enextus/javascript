// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = ['a0', 'b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7']; // seed array

function mySpliceFunc( start, deleteCount ) {

    var myTempStartArr = [];
    var mySplicedArr = [];
    var myTempEndArr = [];
    var myArrAfterSplice = [];
    var begin = null;

    function loopThroughArray( start, end ) {

        var arr = [];
        
        for ( var index = start; index < myArr.length; index++) {

            arr.push( myArr[index] );
    
            if ( index === ( end - 1 ) ) {
            break;
            }
        }

        return arr;
    }

    if ( !isNaN( start ) && !isNaN( deleteCount ) && ( ( typeof start && typeof deleteCount ) === 'number' ) ) {
    
        if ( ( start === 0 && deleteCount === 0 ) || deleteCount <= 0  ) {

            return mySplicedArr; 
        }

        if ( start < 0 ) {

            begin = myArr.length + start;
            console.log('begin = ' + begin );

        } else {

            begin = start;
        }

        if ( begin != 0 ) {

            var arrBegin = 0;
            var beginPartEnd = begin;

            myTempStartArr = loopThroughArray( arrBegin, beginPartEnd );

        }

        var end = begin + deleteCount;

        for ( var index = begin; index < myArr.length; index++ ) {
      
            mySplicedArr.push( myArr[index] );

            if ( index === ( end - 1 ) ) {
              break;
            }
        }

        var otherBegin = begin + deleteCount;
        var otherEnd = myArr.length;

        for ( var index = otherBegin; index < myArr.length; index++) {

            myTempEndArr.push( myArr[index] );
      
            if ( index === otherEnd ) {
              break;
            }
        }

        myArrAfterSplice = myTempStartArr.concat(myTempEndArr);

        console.log('myArrAfterSplice = ' + myArrAfterSplice );

        return mySplicedArr;

    } else if ( !startElemNum && !endElemNum ) {
  
        myArr = [];
    }
}

var result = mySpliceFunc( 2, 2 );
console.log( result );
