const mainHead = document.querySelector('.main__title');
const cityInfo = document.querySelector('.city-info');
const saveBtn = document.querySelector('#button-save');
const showBtn = document.querySelector('#button-show');
const formData = document.querySelector('.form');
const noDataMessage = "undefinned";
const token = '4d65d788982dca64aefc93b76839fa60';
const units = "metric";

let city = new City();

function City(name) {
    this.name = name || noDataMessage;
}

let data = new Data();

function Data(d) {
    this.json = d || 'undefinned';
}

function getCityDataFromInput() {
    if (formData.name.value) {
        city.name = formData.name.value;
    }
    return city;
}

function saveData() {
    hideData();
    city = getCityDataFromInput();
    getTheWeather();
    showShowButton();
}

function getTheWeather() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        'https://api.openweathermap.org/data/2.5/weather?q=' + city.name + '&APPID=' + token + '&units=' + units,
        true
    );

    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {
            return
        }
        if (this.status === 200) {
            return data.json = JSON.parse(this.responseText);
        } else {
            return data.json = false;
        }
    };
}

function showShowButton() {
    showBtn.classList.add('button_show--visible');
}

function showData() {
    hideInput();
    hideButtonShowData();
    cityInfo.querySelector('.city-info__name').textContent = data.json.name + ', ' + data.json.sys.country;

    cityInfo.querySelector('.city-info__temp').textContent = data.json.main.temp + ' \xB0C';
    cityInfo.querySelector('.city-info__pressure').textContent = data.json.main.pressure + ' \mb';
    cityInfo.querySelector('.city-info__humidity').textContent = data.json.main.humidity + ' \%';
    cityInfo.querySelector('.city-info__temp_min').textContent = data.json.main.temp_min + ' \xB0C';
    cityInfo.querySelector('.city-info__temp_max').textContent = data.json.main.temp_max + ' \xB0C';

    mainHead.classList.add('main__title--visible');
    cityInfo.classList.add('city-info--visible');
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
    cityInfo.classList.remove('city-info--visible');
    mainHead.classList.add('main__title');
    cityInfo.classList.add('city-info');
}


saveBtn.addEventListener('click', saveData);
showBtn.addEventListener('click', showData);