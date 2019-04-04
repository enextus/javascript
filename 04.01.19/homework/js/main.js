var mainHead = document.querySelector('.main__title');
var contentArea = document.querySelector('.person-info');
var toggleBtn = document.querySelector('.button');

var formData = document.querySelector('.form');

function Person(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
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
}

function showData() {
    getData();
    mainHead.classList.add('main__title--visibility');
    
    contentArea.classList.add('person-info--visibility');

    contentArea.getElementsByClassName("person-info__name")["0"].innerHTML = person.name;
    contentArea.getElementsByClassName("person-info__surname")["0"].innerHTML = person.surname;
    contentArea.getElementsByClassName("person-info__age")["0"].innerHTML = person.age;
    contentArea.getElementsByClassName("person-info__sex")["0"].innerHTML = person.sex;
}

toggleBtn.addEventListener('click', showData);