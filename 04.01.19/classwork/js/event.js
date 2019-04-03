var mainHead = document.querySelector('.main__title');
var toggleBtn = document.querySelector('.main__button');
var toggleScndBtn = document.querySelector('.main__second_button');
var toggleSbtl = document.querySelector('.main__subtitle');
var myownLi = document.getElementsByTagName("LI");

var  myownBr = document.getElementById("myBR");
var  myownBr2 = document.querySelector('br');

console.log(myownBr);
console.log("myownBr2 = " + myownBr2);

console.log(mainHead);
console.log(toggleBtn);
console.log(toggleScndBtn);
console.log(myownLi);


console.log(toggleSbtl);

function toggleMainHead() {
    mainHead.classList.toggle('main__title--show');
}

function toggleSecondButton() {
    toggleScndBtn.classList.toggle('main__second_button--color');
    toggleSbtl.classList.toggle('main__subtitle--color');
    myownLi[1].classList.toggle('main__li--color');
    myownBr.classList.toggle('main__br--size');
}

toggleBtn.addEventListener('click', toggleMainHead);
toggleScndBtn.addEventListener('click', toggleSecondButton);