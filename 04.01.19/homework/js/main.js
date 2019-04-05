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

function Children(name, surname, age, sex) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
}

var person = new Person();

var children = new Children();


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
    if (formData.children.value) {
        person.children = formData.children.value;
    }
}

function saveData() {


    mainHead.classList.remove('main__title--visibility');
    personInfo.classList.remove('person-info--visibility');

    mainHead.classList.add('main__title');
    personInfo.classList.add('person-info');

    getData();

    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;
    personInfo.querySelector('.person-info__children').textContent = person.children;

}

function showData() {
    
    getData();

    mainHead.classList.add('main__title--visibility');
    personInfo.classList.add('person-info--visibility');
}


function showAmountField() {
    amountField.classList.toggle('form__elements-amount--visibility');
}

function howManyChildren() {

    var childrenAmount = formData.querySelector('#childrenamount').value;

    return childrenAmount;

    // проверяем сколько значение number OK
    // проверяем сколъко филдов уже есть
    // если нумбер больше кол-ва филдов то удаляем лишние с конца
    // если меньше то добавляем разницу в конец 
    // если нет ни одного то создаем по количеству нумбер
    // create new 
}

function addElement() {

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