const container = document.querySelector('.container');
const weatherContainer = document.querySelector('.flex_item_weather_picture');
const weatherInstruments = document.querySelector('.flex_item_instruments');
const mainHead = document.querySelector('.main__title');
const cityInfo = document.querySelector('.city-info');
const saveBtn = document.querySelector('#button-save');
const showBtn = document.querySelector('#button-show');
const formData = document.querySelector('.form');
const noDataMessage = "undefinned";
const token = '4d65d788982dca64aefc93b76839fa60';
const units = "metric";
const maxPosiblePressure = 1051;
const wholeRangePressure = 75; // max - min  +++ 976 - 1051
const coefficientScalePressure = 3.6; // 270grad/75 
const coefficientScalaBeginingPressure = 45;
const maxPosibleTemperature = 55;
const wholeRangeTemperature = 90; // max - min 55 - -35
const coefficientScaleTemperature = 2.78; // 250 grad/90
const coefficientScalaBeginingTemperature = 55;
const maxPosibleHumidity = 100;
const wholeRangeHumidity = 100; // max - min  100 - 0
const coefficientScaleHumidity = 2.7; // 208grad / 100
const coefficientScalaBeginingHumidity = 45;
const instrumntsArrowsSchadow = '2px 2px 0 grey';

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
        console.log('formData.name.value', formData.name.value);
        city.name = formData.name.value;
    }
}

function saveData() {
    hideData();
    getCityDataFromInput();

    if (city.name === "undefinned") {
        showWarning();
    } else {
        getTheWeather();
        showShowButton();
    }
}

function showWarning() {
    alert('Please enter a valid city name!');
    formData.name.focus();
    return false;
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

function calculateInstrumentsArrowAngle(...arguments) {
    return Math.round(((arguments[1] - (arguments[2] - arguments[0])) * arguments[3]) + arguments[4]);
}

function calculatePressureColor(p) {
    if (p < 1005) {
        return "dodgerblue";
    }
    if (p >= 1005 && p <= 1020) {
        return "red";
    }
    if (p > 1020) {
        return "gold";
    }
}

function calculateTemperatureColor(t) {
    if (t < 17) {
        return "dodgerblue";
    }
    if (t >= 17 && t <= 23) {
        return "green";
    }
    if (t > 23) {
        return "red";
    }
}

function calculateHumidityColor(h) {
    if (h < 35) {
        return "orange";
    }
    if (h >= 35 && h <= 60) {
        return "green";
    }
    if (h > 60 && h <= 65) {
        return "LightGreen";
    }
    if (h > 65) {
        return "dodgerblue";
    }
}

function showInstrumentArrow() {
    let rotatePressure = container.querySelector('.pointer_01').lastElementChild;
    let gradRotatePressure = calculateInstrumentsArrowAngle(data.json.main.pressure, wholeRangePressure, maxPosiblePressure, coefficientScalePressure, coefficientScalaBeginingPressure);
    rotatePressure.style.transform = 'rotateZ(' + gradRotatePressure + 'deg)';
    rotatePressure.style.color = calculatePressureColor(data.json.main.pressure);
    rotatePressure.style.textShadow = instrumntsArrowsSchadow;

    let rotateTemperature = container.querySelector('.pointer_02').lastElementChild;
    let gradTemperatureInstrument = calculateInstrumentsArrowAngle(data.json.main.temp, wholeRangeTemperature, maxPosibleTemperature, coefficientScaleTemperature, coefficientScalaBeginingTemperature);
    rotateTemperature.style.transform = 'rotateZ(' + gradTemperatureInstrument + 'deg)';
    rotateTemperature.style.color = calculateTemperatureColor(data.json.main.temp);
    rotateTemperature.style.textShadow = instrumntsArrowsSchadow;

    let rotateHumidity = container.querySelector('.pointer_03').lastElementChild;
    let procHumidityInstrument = calculateInstrumentsArrowAngle(data.json.main.humidity, wholeRangeHumidity, maxPosibleHumidity, coefficientScaleHumidity, coefficientScalaBeginingHumidity);
    rotateHumidity.style.transform = 'rotateZ(' + procHumidityInstrument + 'deg)';
    rotateHumidity.style.color = calculateHumidityColor(data.json.main.humidity);
    rotateHumidity.style.textShadow = instrumntsArrowsSchadow;

    weatherInstruments.classList.add('flex_item_instruments--visible');
}

function showData() {
    hideInput();
    hideButtonShowData();
    cityInfo.querySelector('.city-info__name').textContent = data.json.name + ', ' + data.json.sys.country;
    weatherContainer.querySelector('.content_weather_city').innerText = data.json.name + ', ' + data.json.sys.country;

    cityInfo.querySelector('.city-info__temp').textContent = data.json.main.temp + ' \xB0C';
    cityInfo.querySelector('.city-info__pressure').textContent = data.json.main.pressure + ' \mb';
    cityInfo.querySelector('.city-info__humidity').textContent = data.json.main.humidity + ' \%';
    cityInfo.querySelector('.city-info__temp_min').textContent = data.json.main.temp_min + ' \xB0C';
    cityInfo.querySelector('.city-info__temp_max').textContent = data.json.main.temp_max + ' \xB0C';

    mainHead.classList.add('main__title--visible');
    cityInfo.classList.add('city-info--visible');
    showInstrumentArrow();
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