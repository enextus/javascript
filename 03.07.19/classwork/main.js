// function expression

var doSomething = function() {
 // 
}

var doSomething;

var getRectArea = function(width, height) {
    return width * height;
}

console.log(getRectArea(3,4));
// expected output: 12


// Hoisting von Funktionsausdrücken

notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};