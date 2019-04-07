var mainHead = document.querySelector('.main__title');
var personInfo = document.querySelector('.person-info');

var saveBtn = document.querySelector('#button-save');
var showBtn = document.querySelector('#button-show');

var formData = document.querySelector('.form');
var checkBox = document.querySelector('#offspring');
var amountField = document.querySelector('.form__elements-amount');
var numberBox = document.querySelector('#childrenamount');
var numberOfFields = 0;

function Person(name, surname, age, sex, children) {
    this.noDataMessage = "no data";

    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
    this.children = children || [];
}
var person = new Person();

function getPersonDataFromInput() {
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
    return person;
}

function Child(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}

function getChildDataFromInput(num, child) {

    var shiftcoefficient = 2 + (num * 4);

    console.log("shiftcoefficient = " + shiftcoefficient);

    console.log(formData.elements[4].value);
    console.log(formData.elements[5].value);

    if (formData.elements[shiftcoefficient + 0].value) {
        child.name = formData.elements[shiftcoefficient + 0].value;
    }
    if (child.surname = formData.elements[shiftcoefficient + 1].value) {
        child.surname = formData.elements[shiftcoefficient + 1].value;
    }
    if (child.age = formData.elements[shiftcoefficient + 2].value) {
        child.age = formData.elements[shiftcoefficient + 2].value;
    }
    if (child.sex = formData.elements[shiftcoefficient + 3].value) {
        child.sex = formData.elements[shiftcoefficient + 3].value;
    }
    return child;
}

function saveData() {
    hideData();
    person = getPersonDataFromInput();

    if (numberOfFields > 0) {
        for (var i = 0; i < numberOfFields; i++) {
            var child = new Child();
            child = getChildDataFromInput(i + 1, child);
            person.children.push(child);
        }
    }

    console.log(person);
}

function showData() {

    getPersonDataFromInput();

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

function createChildDivElement() {

    hideData();
    numberOfFields += 1;

    // outer DIV start
    var childiv = document.createElement('div');
    childiv.classList.add('form__elements-child');

    // inner DIVs start

    var elemchildiv = document.createElement('div');
    elemchildiv.classList.add('form__elements-child');

    var label = document.createElement("label");
    label.classList.add('form__elements-label');
    label.htmlFor = 'name' + numberOfFields;
    var text = document.createTextNode(numberOfFields + ". name");
    label.appendChild(text);

    elemchildiv.appendChild(label);

    var input = document.createElement("input");
    input.className = "input__field";
    input.type = "text";
    input.name = "name" + numberOfFields;
    input.id = "name" + numberOfFields;

    elemchildiv.appendChild(input);

    var elemchildiv2 = document.createElement('div');
    elemchildiv2.classList.add('form__elements-child');

    var label2 = document.createElement("label");
    label2.classList.add('form__elements-label');
    label2.htmlFor = 'surname' + numberOfFields;
    var text2 = document.createTextNode(numberOfFields + ". surname");
    label2.appendChild(text2);

    elemchildiv2.appendChild(label2);

    var input2 = document.createElement("input");
    input2.className = "input__field";
    input2.type = "text";
    input2.name = "surname" + numberOfFields;
    input2.id = "surname" + numberOfFields;

    elemchildiv2.appendChild(input2);

    var elemchildiv3 = document.createElement('div');
    elemchildiv3.classList.add('form__elements-child');

    var label3 = document.createElement("label");
    label3.classList.add('form__elements-label');
    label3.htmlFor = 'age' + numberOfFields;
    var text3 = document.createTextNode(numberOfFields + ". age");
    label3.appendChild(text3);

    elemchildiv3.appendChild(label3);

    var input3 = document.createElement("input");
    input3.className = "input__field";
    input3.type = "text";
    input3.name = "age" + numberOfFields;
    input3.id = "age" + numberOfFields;

    elemchildiv3.appendChild(input3);

    var elemchildiv4 = document.createElement('div');
    elemchildiv4.classList.add('form__elements-child');

    var label4 = document.createElement("label");
    label4.classList.add('form__elements-label');
    label4.htmlFor = 'sex' + numberOfFields;
    var text4 = document.createTextNode(numberOfFields + ". sex");
    label4.appendChild(text4);

    elemchildiv4.appendChild(label4);

    var input4 = document.createElement("input");
    input4.className = "input__field";
    input4.type = "text";
    input4.name = "sex" + numberOfFields;
    input4.id = "sex" + numberOfFields;

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
    var childiv = createChildDivElement();
    var lastElement = formData.querySelector('#div__button-save');
    lastElement.insertAdjacentElement("beforebegin", childiv);
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', addElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);