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

function createChildDivElement() {

    hideData();
    numberOfFileds += 1;

    // outer DIV start
    var childiv = document.createElement('div');
    childiv.classList.add('form__elements-child');

    // inner DIVs start

    var elemchildiv = document.createElement('div');
    elemchildiv.classList.add('form__elements-child');

    var label = document.createElement("label");
    label.classList.add('form__elements-label');
    label.htmlFor = 'name' + numberOfFileds;
    var text = document.createTextNode("name");
    label.appendChild(text);

    elemchildiv.appendChild(label);

    var input = document.createElement("input");
    input.className = "input__field";
    input.type = "text";
    input.name = "name" + numberOfFileds;
    input.id = "name" + numberOfFileds;

    elemchildiv.appendChild(input);

    var elemchildiv2 = document.createElement('div');
    elemchildiv2.classList.add('form__elements-child');

    var label2 = document.createElement("label");
    label2.classList.add('form__elements-label');
    label2.htmlFor = 'surname' + numberOfFileds;
    var text2 = document.createTextNode("surname");
    label2.appendChild(text2);

    elemchildiv2.appendChild(label2);

    var input2 = document.createElement("input");
    input2.className = "input__field";
    input2.type = "text";
    input2.name = "surname" + numberOfFileds;
    input2.id = "surname" + numberOfFileds;

    elemchildiv2.appendChild(input2);

    var elemchildiv3 = document.createElement('div');
    elemchildiv3.classList.add('form__elements-child');

    var label3 = document.createElement("label");
    label3.classList.add('form__elements-label');
    label3.htmlFor = 'age' + numberOfFileds;
    var text3 = document.createTextNode("age");
    label3.appendChild(text3);

    elemchildiv3.appendChild(label3);

    var input3 = document.createElement("input");
    input3.className = "input__field";
    input3.type = "text";
    input3.name = "age" + numberOfFileds;
    input3.id = "age" + numberOfFileds;

    elemchildiv3.appendChild(input3);

    var elemchildiv4 = document.createElement('div');
    elemchildiv4.classList.add('form__elements-child');

    var label4 = document.createElement("label");
    label4.classList.add('form__elements-label');
    label4.htmlFor = 'sex' + numberOfFileds;
    var text4 = document.createTextNode("sex");
    label4.appendChild(text4);

    elemchildiv4.appendChild(label4);

    var input4 = document.createElement("input");
    input4.className = "input__field";
    input4.type = "text";
    input4.name = "sex" + numberOfFileds;
    input4.id = "sex" + numberOfFileds;

    elemchildiv4.appendChild(input4);

    // inner DIVs stop

    childiv.appendChild(elemchildiv);
    childiv.appendChild(elemchildiv2);
    childiv.appendChild(elemchildiv3);
    childiv.appendChild(elemchildiv4);

    // outer DIV stop

    return childiv;
}


function addElement() {
var   childiv =   createChildDivElement();
var lastElement = formData.querySelector('#div__button-save');

console.log(howManyChildren());
console.log("numberOfFileds = " + numberOfFileds);

lastElement.insertAdjacentElement("beforebegin", childiv);
}



checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', addElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);