var mainHead = document.querySelector('.main__title');
var personInfo = document.querySelector('.person-info');

var saveBtn = document.querySelector('#button-save');
var showBtn = document.querySelector('#button-show');

var formData = document.querySelector('.form');
var checkBox = document.querySelector('#offspring');
var amountField = document.querySelector('.form__elements-amount');
var numberBox = document.querySelector('#childrenamount');
var numberOfFileds = 0;




function Person(name, surname, age, sex, children) {
    this.noDataMessage = "no data";

    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
    this.children = children || this.noDataMessage;
}
var person = new Person();

function getPersonData() {
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

function Child(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}
var child = new Child();

function getChildData() {
    if (formData.name.value) {
        child.name = formData.name.value;
    }
    if (formData.surname.value) {
        child.surname = formData.surname.value;
    }
    if (formData.age.value) {
        child.age = formData.age.value;
    }
    if (formData.sex.value) {
        child.sex = formData.sex.value;
    }
}

function saveData() {

    hideData();
    getPersonData();

    console.log(personInfo.querySelector('.person-info__name').textContent = person.name);
    console.log(personInfo.querySelector('.person-info__surname').textContent = person.surname);
    console.log(personInfo.querySelector('.person-info__age').textContent = person.age);
    console.log(personInfo.querySelector('.person-info__sex').textContent = person.sex);
    console.log(personInfo.querySelector('.person-info__children').textContent = person.children);

    // for ( var i = 0; i < ..console..console..lenght; i ++ ){
    // // ````
    // }

    // personInfo.querySelector('.person-info__children').textContent = children.child1;
}

function showData() {

    getPersonData();

    mainHead.classList.add('main__title--visibility');
    personInfo.classList.add('person-info--visibility');
}

function hideData() {

    mainHead.classList.remove('main__title--visibility');
    personInfo.classList.remove('person-info--visibility');

    mainHead.classList.add('main__title');
    personInfo.classList.add('person-info');
}

function showAmountField() {

    hideData();

    amountField.classList.toggle('form__elements-amount--visibility');
}

function howManyChildren() {
    var childrenAmount = formData.querySelector('#childrenamount').value;
    return childrenAmount;
}

// проверяем сколько значение number OK
// проверяем сколъко филдов уже есть
// если нумбер больше кол-ва филдов то удаляем лишние с конца
// если меньше то добавляем разницу в конец 
// если нет ни одного то создаем по количеству нумбер
// create new 

function addElement() {

    hideData();
    numberOfFileds += 1;


    var childiv = document.createElement('div');
    childiv.classList.add('form__elements-child');

    var label = document.createElement("label");
    label.classList.add('form__elements-label');
    label.htmlFor = 'child' + numberOfFileds;
    var text = document.createTextNode(numberOfFileds + ". Child");
    label.appendChild(text);

    childiv.appendChild(label);

    var input = document.createElement("input");
    input.className = "input__field";
    input.type = "text";
    input.name = "child" + numberOfFileds;
    input.id = "child" + numberOfFileds;

    childiv.appendChild(input);

    var lastElement = formData.querySelector('#div__button-save');

    console.log(howManyChildren());
    console.log("numberOfFileds = " + numberOfFileds);

    lastElement.insertAdjacentElement("beforebegin", childiv);
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', addElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);