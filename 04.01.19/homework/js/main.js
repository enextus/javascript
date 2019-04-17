const mainHead = document.querySelector('.main__title');
const personInfo = document.querySelector('.person-info');

const saveBtn = document.querySelector('#button-save');
const showBtn = document.querySelector('#button-show');

const formData = document.querySelector('.form');
const checkBox = document.querySelector('#offspring');
const amountField = document.querySelector('.form__elements-amount');
const numberBox = document.querySelector('#childrenamount');

const noDataMessage = "no data";

let fieldNumber = 0;
let number = 0;
let childrenamount = 0;

let howManyChildInputBlocksArePresentNowLink;

function Person(name, surname, age, sex, children) {
    this.name = name || noDataMessage;
    this.surname = surname || noDataMessage;
    this.age = age || noDataMessage;
    this.sex = sex || noDataMessage;
    this.children = children || [];
}

let person = new Person();

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
    this.name = name || noDataMessage;
    this.surname = surname || noDataMessage;
    this.age = age || noDataMessage;
    this.sex = sex || noDataMessage;
}

function getChildDataFromInput(num, child) {
    let shiftCoefficient = (num * 4) + 2;

    if (formData.elements[shiftCoefficient + 0].value) {
        child.name = formData.elements[shiftCoefficient + 0].value;
    } else {
        child.name = noDataMessage;
    }
    if (child.surname = formData.elements[shiftCoefficient + 1].value) {
        child.surname = formData.elements[shiftCoefficient + 1].value;
    } else {
        child.surname = noDataMessage;
    }
    if (child.age = formData.elements[shiftCoefficient + 2].value) {
        child.age = formData.elements[shiftCoefficient + 2].value;
    } else {
        child.age = noDataMessage;
    }
    if (child.sex = formData.elements[shiftCoefficient + 3].value) {
        child.sex = formData.elements[shiftCoefficient + 3].value;
    } else {
        child.sex = noDataMessage;
    }
    return child;
}

function saveData() {
    hideData();
    person = getPersonDataFromInput();
    childrenamount = howManyChildren();

    if (childrenamount > 0) {
        for (let i = 0; i < childrenamount; i++) {
            let child = new Child();
            child = getChildDataFromInput(i + 1, child);
            person.children.push(child);
        }
    }
    showShowButton();
}

function viewChildDivElement(childnumber) {
    let childnumberForLabel = childnumber + 1;
    // name
    let childDivShowLabelNameData = document.createElement('div');
    childDivShowLabelNameData.classList.add('person-info__field');
    let textNameLabel = document.createTextNode(childnumberForLabel + ". child name");
    childDivShowLabelNameData.appendChild(textNameLabel);

    let childDivShowNameData = document.createElement('div');
    childDivShowNameData.classList.add('person-info__childname');
    let textName = document.createTextNode(person.children[childnumber].name);
    childDivShowNameData.appendChild(textName);

    // surname
    let childDivShowLabelSurnameData = document.createElement('div');
    childDivShowLabelSurnameData.classList.add('person-info__field');
    let textSurnameLabel = document.createTextNode(childnumberForLabel + ". child surname");
    childDivShowLabelSurnameData.appendChild(textSurnameLabel);

    let childDivShowSurnameData = document.createElement('div');
    childDivShowSurnameData.classList.add('person-info__childsurname');
    let textSurname = document.createTextNode(person.children[childnumber].surname);
    childDivShowSurnameData.appendChild(textSurname);

    // age
    let childDivShowLabelAgeData = document.createElement('div');
    childDivShowLabelAgeData.classList.add('person-info__field');
    let textAgeLabel = document.createTextNode(childnumberForLabel + ". child age");
    childDivShowLabelAgeData.appendChild(textAgeLabel);

    let childDivShowAgeData = document.createElement('div');
    childDivShowAgeData.classList.add('person-info__childage');
    let textAge = document.createTextNode(person.children[childnumber].age);
    childDivShowAgeData.appendChild(textAge);

    // sex
    let childDivShowLabelSexData = document.createElement('div');
    childDivShowLabelSexData.classList.add('person-info__field');
    let textSexLabel = document.createTextNode(childnumberForLabel + ". child sex");
    childDivShowLabelSexData.appendChild(textSexLabel);

    let childDivShowSexData = document.createElement('div');
    childDivShowSexData.classList.add('person-info__childsex');
    let textSex = document.createTextNode(person.children[childnumber].sex);
    childDivShowSexData.appendChild(textSex);

    return [childDivShowLabelNameData, childDivShowNameData, childDivShowLabelSurnameData, childDivShowSurnameData, childDivShowLabelAgeData, childDivShowAgeData, childDivShowLabelSexData, childDivShowSexData];
}

function showData() {
    hideInput();
    hideButtonShowData();

    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;

    if (person.children.length && !personInfo.querySelector('.person-info__childname')) {
        for (let i = 0; i < person.children.length; i++) {
            let divs = viewChildDivElement(i);
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

function showShowButton() {
    showBtn.classList.add('button_show--visible');
}

function howManyChildren() {
    if (numberBox.value !== "") {
        return numberBox.value;
    } else {
        return 0;
    }
}

function createInputChildDivElement(number) {
    hideData();
    fieldNumber = number + 1;

    // input div wrapper
    let childDiv = document.createElement('div');
    childDiv.classList.add('form__elements-child-wrapper');

    // input name
    let elemChildDiv = document.createElement('div');
    elemChildDiv.classList.add('form__elements-child');

    let inputLabelName = document.createElement("label");
    inputLabelName.classList.add('form__elements-label');
    inputLabelName.htmlFor = 'name' + fieldNumber;

    let textLabelName = document.createTextNode(fieldNumber + ". name");
    inputLabelName.appendChild(textLabelName);
    elemChildDiv.appendChild(inputLabelName);

    let inputChildName = document.createElement("input");
    inputChildName.className = "input__field";
    inputChildName.type = "text";
    inputChildName.name = "name" + fieldNumber;
    inputChildName.id = "name" + fieldNumber;
    elemChildDiv.appendChild(inputChildName);

    // input surname
    let elemChildDivSurname = document.createElement('div');
    elemChildDivSurname.classList.add('form__elements-child');

    let inputLabelSurname = document.createElement("label");
    inputLabelSurname.classList.add('form__elements-label');
    inputLabelSurname.htmlFor = 'surname' + fieldNumber;

    let textLabelSurame = document.createTextNode(fieldNumber + ". surname");
    inputLabelSurname.appendChild(textLabelSurame);
    elemChildDivSurname.appendChild(inputLabelSurname);

    let inputChildSurame = document.createElement("input");
    inputChildSurame.className = "input__field";
    inputChildSurame.type = "text";
    inputChildSurame.name = "surname" + fieldNumber;
    inputChildSurame.id = "surname" + fieldNumber;
    elemChildDivSurname.appendChild(inputChildSurame);

    // input age
    let elemChildDivAge = document.createElement('div');
    elemChildDivAge.classList.add('form__elements-child');

    let inputLabelAge = document.createElement("label");
    inputLabelAge.classList.add('form__elements-label');
    inputLabelAge.htmlFor = 'age' + fieldNumber;

    let textLabelAge = document.createTextNode(fieldNumber + ". age");
    inputLabelAge.appendChild(textLabelAge);
    elemChildDivAge.appendChild(inputLabelAge);

    let inputChildAge = document.createElement("input");
    inputChildAge.className = "input__field";
    inputChildAge.type = "text";
    inputChildAge.name = "age" + fieldNumber;
    inputChildAge.id = "age" + fieldNumber;
    elemChildDivAge.appendChild(inputChildAge);

    // input sex
    let elemChildDivSex = document.createElement('div');
    elemChildDivSex.classList.add('form__elements-child');

    let inputLabelSex = document.createElement("label");
    inputLabelSex.classList.add('form__elements-label');
    inputLabelSex.htmlFor = 'sex' + fieldNumber;

    let textLabelSex = document.createTextNode(fieldNumber + ". sex");
    inputLabelSex.appendChild(textLabelSex);
    elemChildDivSex.appendChild(inputLabelSex);

    let inputChildSex = document.createElement("input");
    inputChildSex.className = "input__field";
    inputChildSex.type = "text";
    inputChildSex.name = "sex" + fieldNumber;
    inputChildSex.id = "sex" + fieldNumber;
    elemChildDivSex.appendChild(inputChildSex);

    // apppend to DOM
    childDiv.appendChild(elemChildDiv);
    childDiv.appendChild(elemChildDivSurname);
    childDiv.appendChild(elemChildDivAge);
    childDiv.appendChild(elemChildDivSex);

    return childDiv;
}

function checkAddOrRemoveElement() {
    let howManyChildrenInputsAreThere = document.querySelectorAll('.form__elements-child-wrapper').length;

    if (howManyChildrenInputsAreThere) {
        for (let i = 0; i < howManyChildrenInputsAreThere; i++) {
            document.querySelector('.form__elements-child-wrapper').remove();
        }
    }

    numberOfInputFields = howManyChildren();

    let lastElement = formData.querySelector('#div__button-save');
    let childDiv = createInputChildDivElement();

    for (let i = 0; i < numberOfInputFields; i++) {
        lastElement.insertAdjacentElement("beforebegin", createInputChildDivElement(i));
    }
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', checkAddOrRemoveElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);