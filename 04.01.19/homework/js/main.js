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

function Child(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}

var child = new Child();

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

function getChildData() {
    if (formData.name.value) {
        children.name = formData.name.value;
    }
    if (formData.surname.value) {
        children.surname = formData.surname.value;
    }
    if (formData.age.value) {
        children.age = formData.age.value;
    }
    if (formData.sex.value) {
        children.sex = formData.sex.value;
}

function saveData() {

    hideData();
    getPersonData();

    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;
    personInfo.querySelector('.person-info__children').textContent = person.children;

    // for ( var i = 0; i < ..console..console..lenght; i ++ ){
    // // ````
    // }

    personInfo.querySelector('.person-info__children').textContent = children.child1;
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

    var childrenDiv = document.createElement('div');
    childrenDiv.classList.add('form__elements-childrenamount');
    childrenDiv.innerHTML = '<label class="form__elements" for="children' + numberOfFileds + '">' + (numberOfFileds + 1) + '. Child:</label><input class="input__field" type=text name="children' + numberOfFileds + '">';

    var lastElement = formData.querySelector('#div__button-save');

    numberOfFileds += 1;

    console.log(howManyChildren());
    console.log("numberOfFileds = " + numberOfFileds);

    lastElement.insertAdjacentElement("beforebegin", childrenDiv);
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', addElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);