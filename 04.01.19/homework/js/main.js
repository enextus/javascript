let mainHead = document.querySelector('.main__title');
let personInfo = document.querySelector('.person-info');

let saveBtn = document.querySelector('#button-save');
let showBtn = document.querySelector('#button-show');

let formData = document.querySelector('.form');
let checkBox = document.querySelector('#offspring');
let amountField = document.querySelector('.form__elements-amount');
let numberBox = document.querySelector('#childrenamount');
let numberOfFields = 0;

function Person(name, surname, age, sex, children) {
    this.noDataMessage = "no data";

    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
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
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}

function getChildDataFromInput(num, child) {
    let shiftCoefficient = 2 + (num * 4);
    let noData = "no data";

    if (formData.elements[shiftCoefficient + 0].value) {
        child.name = formData.elements[shiftCoefficient + 0].value;
    } else {
        child.name = noData;
    }
    if (child.surname = formData.elements[shiftCoefficient + 1].value) {
        child.surname = formData.elements[shiftCoefficient + 1].value;
    } else {
        child.surname = noData;
    }
    if (child.age = formData.elements[shiftCoefficient + 2].value) {
        child.age = formData.elements[shiftCoefficient + 2].value;
    } else {
        child.age = noData;
    }
    if (child.sex = formData.elements[shiftCoefficient + 3].value) {
        child.sex = formData.elements[shiftCoefficient + 3].value;
    } else {
        child.sex = noData;
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

function createShowChildDivElement(childnumber) {

    let child = childnumber + 1;

    let childivshow = document.createElement('div');
    childivshow.classList.add('person-info__field');
    let textNameLabel = document.createTextNode("child name");
    childivshow.appendChild(textNameLabel);

    let childivshow2 = document.createElement('div');
    childivshow2.classList.add('person-info__childname');
    let textName = document.createTextNode(person.children[childnumber].name);
    childivshow2.appendChild(textName);

    // name

    let childivshow3 = document.createElement('div');
    childivshow3.classList.add('person-info__field');
    let textSurnameLabel = document.createTextNode("child surname");
    childivshow3.appendChild(textSurnameLabel);

    let childivshow4 = document.createElement('div');
    childivshow4.classList.add('person-info__childsurname');
    let textSurname = document.createTextNode(person.children[childnumber].surname);
    childivshow4.appendChild(textSurname);

    // surname

    let childivshow5 = document.createElement('div');
    childivshow5.classList.add('person-info__field');
    let textAgeLabel = document.createTextNode("child age");
    childivshow5.appendChild(textAgeLabel);

    let childivshow6 = document.createElement('div');
    childivshow6.classList.add('person-info__childage');
    let textAge = document.createTextNode(person.children[childnumber].age);
    childivshow6.appendChild(textAge);

    // age

    let childivshow7 = document.createElement('div');
    childivshow7.classList.add('person-info__field');
    let textSexLabel = document.createTextNode("child sex");
    childivshow7.appendChild(textSexLabel);

    let childivshow8 = document.createElement('div');
    childivshow8.classList.add('person-info__childsex');
    let textSex = document.createTextNode(person.children[childnumber].sex);
    childivshow8.appendChild(textSex);

    // sex

    return [childivshow, childivshow2, childivshow3, childivshow4, childivshow5, childivshow6, childivshow7, childivshow8];
}

function showData() {
    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;

    if (person.children.length && !personInfo.querySelector('.person-info__childname')) {
        for (i = 0; i < person.children.length; i++) {
            let divs = createShowChildDivElement(i);
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

function createInputChildDivElement() {

    hideData();
    numberOfFields += 1;
    // numberOfFields = howManyChildren();

    // input div wrapper

    let childDiv = document.createElement('div');
    childDiv.classList.add('form__elements-child');

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

    // hier wird entschieden was soll gemacht werden
    // проверяем сколько естъ уже елементов?
    let howManyElementsArePresent;

    // и смотрим сколько выбрано в поле ввода
    // возвращаем true если добавитъ
    // false если убрать


    numberOfInputFields = howManyChildren();
    console.log("numberOfInputFields = " + numberOfInputFields);

    // for (i = 0; i < numberOfInputFields; i++) {

    //     // console.log(i);
    //     lastElement.insertAdjacentElement("beforebegin", childDiv);
    // }

    console.log("HIER");
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