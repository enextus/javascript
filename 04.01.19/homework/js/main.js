var mainHead = document.querySelector('.main__title');
var contentArea = document.querySelector('.content__area');
var toggleBtn = document.querySelector('.button');

function Person(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}

var person = new Person();

function getData() {
    if (document.forms[0].textField__name.value) {
        person.name = document.forms[0].textField__name.value;
    }
    if (document.forms[0].textField__surname.value) {
        person.surname = document.forms[0].textField__surname.value;
    }
    if (document.forms[0].textField__age.value) {
        person.age = document.forms[0].textField__age.value;
    }
    if (document.forms[0].textField__sex.value) {
        person.sex = document.forms[0].textField__sex.value;
    }
}

function showData() {
    getData();
    mainHead.classList.add('main__title--visibility');
    contentArea.classList.add('content__area--visibility');
    contentArea.getElementsByClassName("article__content_name")["0"].innerHTML = person.name;
    contentArea.getElementsByClassName("article__content_surname")["0"].innerHTML = person.surname;
    contentArea.getElementsByClassName("article__content_age")["0"].innerHTML = person.age;
    contentArea.getElementsByClassName("article__content_sex")["0"].innerHTML = person.sex;
}

toggleBtn.addEventListener('click', showData);