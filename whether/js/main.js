const mainHead = document.querySelector('.main__title');
const personInfo = document.querySelector('.person-info');

const saveBtn = document.querySelector('#button-save');
const showBtn = document.querySelector('#button-show');

const formData = document.querySelector('.form');

const noDataMessage = "no data";

let fieldNumber = 0;
let number = 0;

let person = new Person();

function Person(name) {
    this.name = name || noDataMessage;
}

function getPersonDataFromInput() {
    if (formData.name.value) {
        person.name = formData.name.value;
    }
    return person;
}

function showShowButton() {
    showBtn.classList.add('button_show--visible');
}

function saveData() {
    hideData();
    person = getPersonDataFromInput();
    showShowButton();
}

function showData() {
    hideInput();
    hideButtonShowData();

    personInfo.querySelector('.person-info__name').textContent = person.name;

    mainHead.classList.add('main__title--visible');
    personInfo.classList.add('person-info--visible');
}

function hideInput() {
    formData.classList.remove('form');
    formData.classList.add('form--hidden');
}

function hideButtonShowData() {
    showBtn.classList.remove('button_show--visible');
    showBtn.classList.add('button_show');
}

function hideData() {
    mainHead.classList.remove('main__title--visible');
    personInfo.classList.remove('person-info--visible');
    mainHead.classList.add('main__title');
    personInfo.classList.add('person-info');
}

function showAmountField() {
    hideData();
    amountField.classList.toggle('form__elements-amount--visible');
}

saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);