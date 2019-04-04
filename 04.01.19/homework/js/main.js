var mainHead = document.querySelector('.main__title');
var personInfo = document.querySelector('.person-info');
var showBtn = document.querySelector('.button');
var formData = document.querySelector('.form');
var CheckBox = document.querySelector('#offspring');
var amountField = document.querySelector('.form__elements-amount');
var numberBox = document.querySelector('#childrenamount');


function Person(name, surname, age, sex, children) {
    this.noDataMessage = "no data";
    this.name = name || this.noDataMessage;
    this.surname = surname || this.noDataMessage;
    this.age = age || this.noDataMessage;
    this.sex = sex || this.noDataMessage;
    this.children = children || this.noDataMessage;
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
    if (formData.children.value) {
        person.children = formData.children.value;
    }
}

function showData() {
    getData();

    personInfo.querySelector('.person-info__name').textContent = person.name;
    personInfo.querySelector('.person-info__surname').textContent = person.surname;
    personInfo.querySelector('.person-info__age').textContent = person.age;
    personInfo.querySelector('.person-info__sex').textContent = person.sex;
    personInfo.querySelector('.person-info__children').textContent = person.children;

    mainHead.classList.add('main__title--visibility');
    personInfo.classList.add('person-info--visibility');
}

function showamountField() {
    amountField.classList.toggle('form__elements-amount--visibility');
}

function reloadData() {

    var childrenAmount = amountField.querySelector('#childrenamount').value;

    // проверяем сколько значение number
    // проверяем сколъко филдов уже есть
    // если нумбер больше кол-ва филдов то удаляем лишние с конца
    // если меньше то добавляем разницу в конец
    // если нет ни одного то создаем по количеству нумбер
    // create new 
    // formData.querySelector('#childrenamount');
    // console.log(formData);
    // var inputField = createElement('<div class="form__elements-childrenamount"><label class="form__elements-label" for="children">Children:</label><input class="input__field" type=text name="children" id="children"></div>');
    // formData.appendChild(inputField);
    // console.log(formData);

    // <div class="form__elements">
    //     <label class="form__elements-label" for="children">Children:</label>
    //     <input class="input__field" type=text name="children" id="children">
    // </div>
}

function addElement () { 
 
    // var currentDiv2 = formData.querySelector('.form__elements');

    var childrenDiv = document.createElement('div');
    childrenDiv.innerHTML = '<label class="form__elements-label" for="children">Children:</label><input class="input__field" type=text name="children" id="children">';
    formData.appendChild(childrenDiv);


  }

CheckBox.addEventListener('change', showamountField);
numberBox.addEventListener('change', addElement);
showBtn.addEventListener('click', showData);
