let mainHead = document.querySelector('.main__title');
let personInfo = document.querySelector('.person-info');

let saveBtn = document.querySelector('#button-save');
let showBtn = document.querySelector('#button-show');

let formData = document.querySelector('.form');
let checkBox = document.querySelector('#offspring');
let amountField = document.querySelector('.form__elements-amount');
let numberBox = document.querySelector('#childrenamount');

let numberOfFields = 0;
let noDataMessage = "no data";

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
    let shiftCoefficient = 2 + (num * 4);

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

    if (numberOfFields > 0) {
        for (let i = 0; i < numberOfFields; i++) {
            let child = new Child();
            child = getChildDataFromInput(i + 1, child);
            person.children.push(child);
        }
    }
    showShowButton();
}

function viewChildDivElement(childnumber) {

    let child = childnumber + 1;

    // name

    let childDivShowLabelNameData = document.createElement('div');
    childDivShowLabelNameData.classList.add('person-info__field');
    let textNameLabel = document.createTextNode("child name");
    childDivShowLabelNameData.appendChild(textNameLabel);

    let childDivShowNameData = document.createElement('div');
    childDivShowNameData.classList.add('person-info__childname');
    let textName = document.createTextNode(person.children[childnumber].name);
    childDivShowNameData.appendChild(textName);

    // surname

    let childDivShowLabelSurnameData = document.createElement('div');
    childDivShowLabelSurnameData.classList.add('person-info__field');
    let textSurnameLabel = document.createTextNode("child surname");
    childDivShowLabelSurnameData.appendChild(textSurnameLabel);

    let childDivShowSurnameData = document.createElement('div');
    childDivShowSurnameData.classList.add('person-info__childsurname');
    let textSurname = document.createTextNode(person.children[childnumber].surname);
    childDivShowSurnameData.appendChild(textSurname);

    // age

    let childDivShowLabelAgeData = document.createElement('div');
    childDivShowLabelAgeData.classList.add('person-info__field');
    let textAgeLabel = document.createTextNode("child age");
    childDivShowLabelAgeData.appendChild(textAgeLabel);

    let childDivShowAgeData = document.createElement('div');
    childDivShowAgeData.classList.add('person-info__childage');
    let textAge = document.createTextNode(person.children[childnumber].age);
    childDivShowAgeData.appendChild(textAge);

    // sex

    let childDivShowLabelSexData = document.createElement('div');
    childDivShowLabelSexData.classList.add('person-info__field');
    let textSexLabel = document.createTextNode("child sex");
    childDivShowLabelSexData.appendChild(textSexLabel);

    let childDivShowSexData = document.createElement('div');
    childDivShowSexData.classList.add('person-info__childsex');
    let textSex = document.createTextNode(person.children[childnumber].sex);
    childDivShowSexData.appendChild(textSex);

    return [childDivShowLabelNameData, childDivShowNameData, childDivShowLabelSurnameData, childDivShowSurnameData, childDivShowLabelAgeData, childDivShowAgeData, childDivShowLabelSexData, childDivShowSexData];
}

function showData() {
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
    personInfo.classList.add('person-info--visibility');
}

function hideData() {
    mainHead.classList.remove('main__title--visible');
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
    return numberBox.value;
}

function createInputChildDivElement(i) {

    hideData();
    numberOfFields = i + 1;
    // numberOfFields = howManyChildren();

    // input div wrapper

    let childDiv = document.createElement('div');
    childDiv.classList.add('form__elements-child-wrapper');

    // input name

    let elemChildDiv = document.createElement('div');
    elemChildDiv.classList.add('form__elements-child');

    let inputLabelName = document.createElement("label");
    inputLabelName.classList.add('form__elements-label');
    inputLabelName.htmlFor = 'name' + numberOfFields;

    let textLabelName = document.createTextNode(numberOfFields + ". name");
    inputLabelName.appendChild(textLabelName);

    elemChildDiv.appendChild(inputLabelName);

    let inputChildName = document.createElement("input");
    inputChildName.className = "input__field";
    inputChildName.type = "text";
    inputChildName.name = "name" + numberOfFields;
    inputChildName.id = "name" + numberOfFields;

    elemChildDiv.appendChild(inputChildName);

    // input surname

    let elemChildDivSurname = document.createElement('div');
    elemChildDivSurname.classList.add('form__elements-child');

    let inputLabelSurname = document.createElement("label");
    inputLabelSurname.classList.add('form__elements-label');
    inputLabelSurname.htmlFor = 'surname' + numberOfFields;

    let textLabelSurame = document.createTextNode(numberOfFields + ". surname");
    inputLabelSurname.appendChild(textLabelSurame);

    elemChildDivSurname.appendChild(inputLabelSurname);

    let inputChildSurame = document.createElement("input");
    inputChildSurame.className = "input__field";
    inputChildSurame.type = "text";
    inputChildSurame.name = "surname" + numberOfFields;
    inputChildSurame.id = "surname" + numberOfFields;

    elemChildDivSurname.appendChild(inputChildSurame);

    // input age

    let elemChildDivAge = document.createElement('div');
    elemChildDivAge.classList.add('form__elements-child');

    let inputLabelAge = document.createElement("label");
    inputLabelAge.classList.add('form__elements-label');
    inputLabelAge.htmlFor = 'age' + numberOfFields;

    let textLabelAge = document.createTextNode(numberOfFields + ". age");
    inputLabelAge.appendChild(textLabelAge);

    elemChildDivAge.appendChild(inputLabelAge);

    let inputChildAge = document.createElement("input");
    inputChildAge.className = "input__field";
    inputChildAge.type = "text";
    inputChildAge.name = "age" + numberOfFields;
    inputChildAge.id = "age" + numberOfFields;

    elemChildDivAge.appendChild(inputChildAge);

    // input sex

    let elemChildDivSex = document.createElement('div');
    elemChildDivSex.classList.add('form__elements-child');

    let inputLabelSex = document.createElement("label");
    inputLabelSex.classList.add('form__elements-label');
    inputLabelSex.htmlFor = 'sex' + numberOfFields;

    let textLabelSex = document.createTextNode(numberOfFields + ". sex");
    inputLabelSex.appendChild(textLabelSex);

    elemChildDivSex.appendChild(inputLabelSex);

    let inputChildSex = document.createElement("input");
    inputChildSex.className = "input__field";
    inputChildSex.type = "text";
    inputChildSex.name = "sex" + numberOfFields;
    inputChildSex.id = "sex" + numberOfFields;

    elemChildDivSex.appendChild(inputChildSex);

    // apppend to DOM

    childDiv.appendChild(elemChildDiv);
    childDiv.appendChild(elemChildDivSurname);
    childDiv.appendChild(elemChildDivAge);
    childDiv.appendChild(elemChildDivSex);

    return childDiv;
}

function checkAddOrRemoveElement() {

    // сколько есть элементов?

    console.log(" document.querySelectorAll('.form__elements-child-wrapper').length = " + document.querySelectorAll('.form__elements-child-wrapper').length);

    let howManyChildrenInputsAreThere = document.querySelectorAll('.form__elements-child-wrapper').length;


    if (howManyChildrenInputsAreThere) {
        for (let i = 0; i < howManyChildrenInputsAreThere; i++) {
            document.querySelector('.form__elements-child-wrapper').remove();
        }
    }



    // и смотрим сколько выбрано детей в поле ввода

    numberOfInputFields = howManyChildren();


    // перерисовываем панель ввода для детей в зависимости от количества

    let lastElement = formData.querySelector('#div__button-save');
    let childDiv = createInputChildDivElement();

    console.log("numberOfInputFields = " + numberOfInputFields);



    for (let i = 0; i < numberOfInputFields; i++) {

        lastElement.insertAdjacentElement("beforebegin", createInputChildDivElement(i));
    }


}

function addElement() {
    //
    let childDiv = createInputChildDivElement();
    let lastElement = formData.querySelector('#div__button-save');
}

function RemoveElement() {
    // 
}

checkBox.addEventListener('change', showAmountField);
numberBox.addEventListener('change', checkAddOrRemoveElement);
saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);