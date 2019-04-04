var mainHead = document.querySelector('.main__title');
var personInfo = document.querySelector('.person-info');
var Btn = document.querySelector('.button');
var formData = document.querySelector('.form');
var CheckBox = document.querySelector('#offspring');
var Amount = document.querySelector('.form__elements-amount');


function Person(name, surname, age, sex, children) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
    this.children = children || this.noDataMessage;
}

var person = new Person();

function getData() {
    if (formData.name.value) {
        person.name = formData.name.value;
    }
    if (formData.surname.value) {
        person.surname = formData.surname.value;
    }
    if (formData.age.value) {
        person.age = formData.age.value;
    }
    if (formData.sex.value) {
        person.sex = formData.sex.value;
    }
    if (formData.children.value) {
        person.children = formData.children.value;
    }
}

function showData() {
    getData();

    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;
    personInfo.querySelector('.person-info__children').textContent = person.children;

    mainHead.classList.add('main__title--visibility');
    personInfo.classList.add('person-info--visibility');
}

function showAmount() {
    Amount.classList.toggle('form__elements-amount--visibility');
}

Btn.addEventListener('click', showData);
CheckBox.addEventListener('change', showAmount);