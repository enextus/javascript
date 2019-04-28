/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const container = document.querySelector('.container');
const weatherContainer = document.querySelector('.flex_item_weather_picture');
const weatherInstruments = document.querySelector('.flex_item_instruments');
const mainHead = document.querySelector('.main__title');
const cityInfo = document.querySelector('.city-info');
const saveBtn = document.querySelector('#button-save');
const formData = document.querySelector('.form');
const noDataMessage = 'undefinned';
const token = '4d65d788982dca64aefc93b76839fa60';
const units = 'metric';
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
const arrowsSchadow = '2px 2px 2px #7B7B7B';

const gauge_temperature = new Gauge({
	renderTo    : 'gauge_temperature',
	width       : 190,
	height      : 190,
	glow        : true,
	units       : '°C',
	title       : 'Temperature',
	minValue    : -50,
	maxValue    : 50,
	majorTicks  : ['-50','-40','-30','-20','-10','0','10','20','30','40','50'],
	minorTicks  : 10,
	strokeTicks : false,
	highlights  : [
    { from : -50, to : 17, color : 'rgba(0,   0, 255, .3)' },
    { from : 18, to : 23, color : 'rgba(153,   204, 0, .3)' },
		{ from : 24, to : 50, color : 'rgba(255, 0, 0, .3)' },
	],
	colors      : {
		plate      : '#f5f5f5',
		majorTicks : '#000',
		minorTicks : '#222',
		title      : '#222',
		units      : '#666',
		numbers    : '#222',
		needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
	},
	animation : {
		delay : 25,
		duration: 500,
		fn : 'bounce'
	}
});

const gauge_pressure = new Gauge({
	renderTo    : 'gauge_pressure',
	width       : 190,
	height      : 190,
	glow        : true,
	units       : 'mP',
	title       : 'Pressure',
	minValue    : -50,
	maxValue    : 50,
	majorTicks  : ['-50','-40','-30','-20','-10','0','10','20','30','40','50'],
	minorTicks  : 10,
	strokeTicks : false,
	highlights  : [
		{ from : -50, to : 0, color : 'rgba(0,   0, 255, .3)' },
		{ from : 0, to : 50, color : 'rgba(255, 0, 0, .3)' }
	],
	colors      : {
		plate      : '#f5f5f5',
		majorTicks : '#000',
		minorTicks : '#222',
		title      : '#222',
		units      : '#666',
		numbers    : '#222',
		needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
	},
	animation : {
		delay : 25,
		duration: 500,
		fn : 'bounce'
	}
});

const gauge_humidity = new Gauge({
	renderTo    : 'gauge_humidity',
	width       : 190,
	height      : 190,
	glow        : true,
	units       : 'mP',
	title       : 'Humidity',
	minValue    : -50,
	maxValue    : 50,
	majorTicks  : ['-50','-40','-30','-20','-10','0','10','20','30','40','50'],
	minorTicks  : 10,
	strokeTicks : false,
	highlights  : [
		{ from : -50, to : 0, color : 'rgba(0,   0, 255, .3)' },
		{ from : 0, to : 50, color : 'rgba(255, 0, 0, .3)' }
	],
	colors      : {
		plate      : '#f5f5f5',
		majorTicks : '#000',
		minorTicks : '#222',
		title      : '#222',
		units      : '#666',
		numbers    : '#222',
		needle     : { start : 'rgba(240, 128, 128, 1)', end : 'rgba(255, 160, 122, .9)' }
	},
	animation : {
		delay : 25,
		duration: 500,
		fn : 'bounce'
	}
});

function City(name) {
  this.name = name || noDataMessage;
}

const city = new City();

function Data(d) {
  this.json = d || 'undefinned';
}

const data = new Data();

function getCityDataFromInput() {
  if (formData.name.value) {
    city.name = formData.name.value;
  }
}

function showWarning() {
  // eslint-disable-next-line no-alert
  alert('Please enter a valid city name.');
  formData.name.focus();
  return false;
}

function calculatePressureColor(p) {
  let value;
  if (p < 1005) {
    value = 'dodgerblue';
  }
  if (p >= 1005 && p <= 1020) {
    value = 'orangered';
  }
  if (p > 1020) {
    value = 'gold';
  }
  return value;
}

function calculateTemperatureColor(t) {
  let value;
  if (t < 17) {
    value = 'dodgerblue';
  }
  if (t >= 17 && t <= 23) {
    value = 'green';
  }
  if (t > 23) {
    value = 'orangered';
  }
  return value;
}

function calculateHumidityColor(h) {
  let value;
  if (h < 35) {
    value = 'orange';
  }
  if (h >= 35 && h <= 60) {
    value = 'yellowgreen';
  }
  if (h > 60 && h <= 65) {
    value = 'lightGreen';
  }
  if (h > 65) {
    value = 'dodgerblue';
  }
  return value;
}

function calculateInstrumentsArrowAngle(...args) {
  return Math.round(((args[1] - (args[2] - args[0])) * args[3]) + args[4]);
}

function showInstrumentArrow() {
  const rotatePressure = container.querySelector('.pointer_01').lastElementChild;
  const gradRotatePressure = calculateInstrumentsArrowAngle(data.json.main.pressure, wholeRangePressure, maxPosiblePressure, coefficientScalePressure, coefficientScalaBeginingPressure);
  rotatePressure.style.transform = `rotateZ(${gradRotatePressure}deg)`;
  rotatePressure.style.color = calculatePressureColor(data.json.main.pressure);
  rotatePressure.style.textShadow = arrowsSchadow;

  const rotateTemperature = container.querySelector('.pointer_02').lastElementChild;
  const gradTemperatureInstrument = calculateInstrumentsArrowAngle(data.json.main.temp, wholeRangeTemperature, maxPosibleTemperature, coefficientScaleTemperature, coefficientScalaBeginingTemperature);
  rotateTemperature.style.transform = `rotateZ(${gradTemperatureInstrument}deg)`;
  rotateTemperature.style.color = calculateTemperatureColor(data.json.main.temp);
  rotateTemperature.style.textShadow = arrowsSchadow;

  const rotateHumidity = container.querySelector('.pointer_03').lastElementChild;
  const procHumidityInstrument = calculateInstrumentsArrowAngle(data.json.main.humidity, wholeRangeHumidity, maxPosibleHumidity, coefficientScaleHumidity, coefficientScalaBeginingHumidity);
  rotateHumidity.style.transform = `rotateZ(${procHumidityInstrument}deg)`;
  rotateHumidity.style.color = calculateHumidityColor(data.json.main.humidity);
  rotateHumidity.style.textShadow = arrowsSchadow;

  weatherInstruments.classList.add('flex_item_instruments--visible');
}

function hideInput() {
  formData.classList.remove('form');
  formData.classList.add('form--hidden');
}

function showData() {
  hideInput();
  cityInfo.querySelector('.city-info__name').textContent = `${data.json.name}, ${data.json.sys.country}`;
  weatherContainer.querySelector('.content_weather_city').innerText = `${data.json.name}, ${data.json.sys.country}`;

  cityInfo.querySelector('.city-info__temp').textContent = `${data.json.main.temp} \xB0C`;
  cityInfo.querySelector('.city-info__pressure').textContent = `${data.json.main.pressure} mb`;
  cityInfo.querySelector('.city-info__humidity').textContent = `${data.json.main.humidity} %`;
  cityInfo.querySelector('.city-info__temp_min').textContent = `${data.json.main.temp_min} \xB0C`;
  cityInfo.querySelector('.city-info__temp_max').textContent = `${data.json.main.temp_max} \xB0C`;

  mainHead.classList.add('main__title--visible');
  cityInfo.classList.add('city-info--visible');
  showInstrumentArrow();
}

function getTheWeather() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&APPID=${token}&units=${units}`,
    true,
  );

  xhr.send();
  xhr.onreadystatechange = function statement() {
    if (this.readyState !== 4) {
      return;
    }
    if (this.status === 200) {
      data.json = JSON.parse(this.responseText);
      showData();
      return;
    }
    data.json = false;
    showWarning();
  };
}

function saveData() {
  getCityDataFromInput();
  if (city.name === 'undefinned') {
    showWarning();
  } else {
    getTheWeather();
  }
}

gauge_temperature.onready = function() {
	setInterval( function() {
		gauge_temperature.setValue( (Math.random() * 1 > .5 ? -1 : 1) * Math.random() * 50);
	}, 1000);
};

gauge_pressure.onready = function() {
	setInterval( function() {
		gauge_pressure.setValue( (Math.random() * 1 > .5 ? -1 : 1) * Math.random() * 50);
	}, 1000);
};

gauge_humidity.onready = function() {
	setInterval( function() {
		gauge_humidity.setValue( (Math.random() * 1 > .5 ? -1 : 1) * Math.random() * 50);
	}, 1000);
};

gauge_temperature.draw();
gauge_pressure.draw();
gauge_humidity.draw();

saveBtn.addEventListener('click', saveData);
