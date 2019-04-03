var paragraph = document.createElement('p');

paragraph.textContent = 'lorem ipsum dolor';
paragraph.style.backgroundColor = 'yellow';
paragraph.style.textAlign = 'center';
paragraph.style.fontSize = '30px';

var main = document.querySelector('.main');

if (main) {
    main.appendChild(paragraph);
}

var mainHead = main.querySelector('.main-title');

var time = 2000;

function showH1() {
    mainHead.classList.add('show-main-title');
}

//setTimeout(showH1, time);

// setTimeout(function() {
//    mainHead.classList.add('show-main-title');
// }, time);

function switchMainHead() {

    // if (mainHead.classList.contains('show-main-title')) {
    //     mainHead.classList.remove('show-main-title');
    // } else {
    //     mainHead.classList.add('show-main-title');
    // }

    mainHead.classList.toggle('show-main-title');
}

var mainhewadTsetToogleID = setInterval(switchMainHead, time);
console.log(mainhewadTsetToogleID);

// clearInterval(mainhewadTsetToogleID);

// setTimeout(function () {
//     clearInterval(mainhewadTsetToogleID);
// }, 5000);

// for (var i = 0, result = 0; i < 500000000; i++){
//     result +=i;
// }

