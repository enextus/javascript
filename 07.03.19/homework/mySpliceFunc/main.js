// The splice() method adds/removes items to/from an array, and returns the removed item(s).
// Note: This method changes the original array.

var myArr = [' 0 ', ' 1 ', ' 2 ', ' 3 ', ' 4 ', ' 5 ']; // seed array

function mySpliceFunc( start, deleteCount ) {

    var myTempStartArr = [];
    var mySplicedArr = [];
    var myTempEndArr = [];
    var myArrAfterSplice = [];
    var begin = null;

    function walkThroughArray( start, end ) {

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

            myTempStartArr = walkThroughArray( arrBegin, beginPartEnd );
        }

        var end = begin + deleteCount;

        mySplicedArr = walkThroughArray( begin, end );

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

var result = mySpliceFunc( 3, 2 );
console.log( result );
