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
    var noData = "no data";

    if (formData.elements[shiftcoefficient + 0].value) {
        child.name = formData.elements[shiftcoefficient + 0].value;
    } else {
        child.name = noData;
    }
    if (child.surname = formData.elements[shiftcoefficient + 1].value) {
        child.surname = formData.elements[shiftcoefficient + 1].value;
    } else {
        child.surname = noData;
    }
    if (child.age = formData.elements[shiftcoefficient + 2].value) {
        child.age = formData.elements[shiftcoefficient + 2].value;
    } else {
        child.age = noData;
    }
    if (child.sex = formData.elements[shiftcoefficient + 3].value) {
        child.sex = formData.elements[shiftcoefficient + 3].value;
    } else {
        child.sex = noData;
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
    showShowButton();
}

function createShowChildDivElement(childnumber) {
    var child = childnumber + 1;

    var childivshow = document.createElement('div');
    childivshow.classList.add('person-info__field');
    var text = document.createTextNode("child name");
    childivshow.appendChild(text);

    var childivshow2 = document.createElement('div');
    childivshow2.classList.add('person-info__childname');
    var text = document.createTextNode(person.children[childnumber].name);
    childivshow2.appendChild(text);

    var childivshow3 = document.createElement('div');
    childivshow3.classList.add('person-info__field');
    var text = document.createTextNode("child surname");
    childivshow3.appendChild(text);

    var childivshow4 = document.createElement('div');
    childivshow4.classList.add('person-info__childsurname');
    var text = document.createTextNode(person.children[childnumber].surname);
    childivshow4.appendChild(text);

    var childivshow5 = document.createElement('div');
    childivshow5.classList.add('person-info__field');
    var text = document.createTextNode("child age");
    childivshow5.appendChild(text);

    var childivshow6 = document.createElement('div');
    childivshow6.classList.add('person-info__childage');
    var text = document.createTextNode(person.children[childnumber].age);
    childivshow6.appendChild(text);

    var childivshow7 = document.createElement('div');
    childivshow7.classList.add('person-info__field');
    var text = document.createTextNode("child sex");
    childivshow7.appendChild(text);

    var childivshow8 = document.createElement('div');
    childivshow8.classList.add('person-info__childsex');
    var text = document.createTextNode(person.children[childnumber].sex);
    childivshow8.appendChild(text);

    return [childivshow, childivshow2, childivshow3, childivshow4, childivshow5, childivshow6, childivshow7, childivshow8];
}

function showData() {
    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;

    if (person.children.length) {
        for (i = 0; i < person.children.length; i++) {
            var divs = createShowChildDivElement(i);
            personInfo.appendChild(divs[0]);
            personInfo.appendChild(divs[1]);
            personInfo.appendChild(divs[2]);
            personInfo.appendChild(divs[3]);
            personInfo.appendChild(divs[4]);
            personInfo.appendChild(divs[5]);
            personInfo.appendChild(divs[6]);
            personInfo.appendChild(divs[7]);
        }
    }
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


function showShowButton() {
    showBtn.classList.add('button_show--visibility');
}

function howManyChildren() {
    var childrenAmount = formData.querySelector('#childrenamount').value;
    return childrenAmount;
}

function createInputChildDivElement() {
    hideData();
    numberOfFields += 1;

    var childiv = document.createElement('div');
    childiv.classList.add('form__elements-child');

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

    childiv.appendChild(elemchildiv);
    childiv.appendChild(elemchildiv2);
    childiv.appendChild(elemchildiv3);
    childiv.appendChild(elemchildiv4);

    return childiv;
}

function addElement() {
    var childiv = createInputChildDivElement();
    var lastElement = formData.querySelector('#div__button-save');
    lastElement.insertAdjacentElement("beforebegin", childiv);
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', addElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);