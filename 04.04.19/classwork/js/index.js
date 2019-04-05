var inputElem = document.querySelector('.main__input');
var button = document.querySelector('.main__reverse-btn');
var paragraph = document.querySelector('.main__entered');

// button.addEventListener('click', function(e) {
//     var reversedText = inputElem.value.split('').reverse().join();
//     paragraph.textContent = reversedText;
// });


// ENTER must be pressed
inputElem.addEventListener('keyup', function(e) {

    if (e.keyCode === 13) {
        var reversedText = e.target.value.split('').reverse().join('');
        paragraph.textContent = reversedText;
    }
});


// KEYLOGGER
// document.addEventListener('keyup', function(e) {
//     console.log(e)
// });
