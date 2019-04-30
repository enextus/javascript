/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// const container = document.querySelector('.container');
const weatherContainer = document.querySelector('.flex_item_weather_picture');
const weatherInstruments = document.querySelector('.flex_item_instruments');
const mainHead = document.querySelector('.main__title');
const cityInfo = document.querySelector('.city-info');
const saveBtn = document.querySelector('#button-save');
const formData = document.querySelector('.form');
const noDataMessage = 'undefinned';
const token = '4d65d788982dca64aefc93b76839fa60';
const units = 'metric';

// eslint-disable-next-line no-undef
const gauge_pressure = new Gauge({
	renderTo: 'gauge_pressure',
	width: 190,
	height: 190,
	glow: true,
	units: 'mP',
	title: 'Pressure',
	minValue: 970,
	maxValue: 1055,
	majorTicks: ['970', '980', '990', '1000', '1010', '1020', '1030', '1040', '1050'],
	minorTicks: 10,
	strokeTicks: false,
	highlights: [{
			from: 970,
			to: 1005,
			color: 'rgba(0, 0, 255, .3)'
		},
		{
			from: 1006,
			to: 1020,
			color: 'rgba(255, 0, 0, .3)'
		},
		{
			from: 1021,
			to: 1055,
			color: 'rgba(210, 210, 0, .3)'
		},
	],
	colors: {
		plate: '#f5f5f5',
		majorTicks: '#000',
		minorTicks: '#222',
		title: '#222',
		units: '#666',
		numbers: '#222',
		needle: {
			start: 'rgba(240, 128, 128, 1)',
			end: 'rgba(255, 160, 122, .9)'
		}
	},
	animation: {
		delay: 25,
		duration: 500,
		fn: 'bounce'
	}
});

// eslint-disable-next-line no-undef
const gauge_temperature = new Gauge({
	renderTo: 'gauge_temperature',
	width: 190,
	height: 190,
	glow: true,
	units: '°C',
	title: 'Temperature',
	minValue: -50,
	maxValue: 50,
	majorTicks: ['-50', '-40', '-30', '-20', '-10', '0', '10', '20', '30', '40', '50'],
	minorTicks: 10,
	strokeTicks: false,
	highlights: [{
			from: -50,
			to: 16,
			color: 'rgba(0, 0, 255, .3)'
		},
		{
			from: 17,
			to: 24,
			color: 'rgba(153, 204, 0, .3)'
		},
		{
			from: 25,
			to: 50,
			color: 'rgba(255, 0, 0, .3)'
		},
	],
	colors: {
		plate: '#f5f5f5',
		majorTicks: '#000',
		minorTicks: '#222',
		title: '#222',
		units: '#666',
		numbers: '#222',
		needle: {
			start: 'rgba(240, 128, 128, 1)',
			end: 'rgba(255, 160, 122, .9)'
		}
	},
	animation: {
		delay: 25,
		duration: 500,
		fn: 'bounce'
	}
});

// eslint-disable-next-line no-undef
const gauge_humidity = new Gauge({
	renderTo: 'gauge_humidity',
	width: 190,
	height: 190,
	glow: true,
	units: 'mP',
	title: 'Humidity',
	minValue: 0,
	maxValue: 100,
	majorTicks: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
	minorTicks: 10,
	strokeTicks: false,
	highlights: [{
			from: 0,
			to: 35,
			color: 'rgba(255, 128, 0, .3)'
		},
		{
			from: 36,
			to: 60,
			color: 'rgba(0, 128, 0, .3)'
		},
		{
			from: 61,
			to: 65,
			color: 'rgba(153, 204, 0, .3)'
		},
		{
			from: 66,
			to: 100,
			color: 'rgba(255, 0, 0, .3)'
		},
	],
	colors: {
		plate: '#f5f5f5',
		majorTicks: '#000',
		minorTicks: '#222',
		title: '#222',
		units: '#666',
		numbers: '#222',
		needle: {
			start: 'rgba(240, 128, 128, 1)',
			end: 'rgba(255, 160, 122, .9)'
		}
	},
	animation: {
		delay: 25,
		duration: 500,
		fn: 'bounce'
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

function showInstrumentArrow() {
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
	xhr.send();
}

function getNeedlePressureColor(d) {
	if (d >= 970 && d <= 1005) {
		const needleColor = '0, 0, 255, .3';
		return needleColor;
	}
	if (d > 1005 && d <= 1020) {
		const needleColor = '255, 0, 0, .3';
		return needleColor;
	}
	if (d > 1020 && d <= 1055) {
		const needleColor = '210, 210, 0, .3';
		return needleColor;
	}
	return false;
}

function getNeedleTemperatureColor(d) {
	if (d >= -50 && d <= 17) {
		const needleColor = '0, 0, 255, .3';
		return needleColor;
	}
	if (d > 17 && d <= 23) {
		const needleColor = '153, 204, 0, .3';
		return needleColor;
	}
	if (d > 23 && d <= 50) {
		const needleColor = '255, 0, 0, .3';
		return needleColor;
	}
	return false;
}

function getNeedleHumidityColor(d) {
	if (d >= 0 && d <= 35) {
		const needleColor = '255, 128, 0, .3';
		return needleColor;
	}
	if (d > 35 && d <= 60) {
		const needleColor = '0, 128, 0, .3';
		return needleColor;
	}
	if (d > 60 && d <= 65) {
		const needleColor = '153, 204, 0, .3';
		return needleColor;
	}
	if (d > 65 && d <= 100) {
		const needleColor = '255, 0, 0, .3';
		return needleColor;
	}
	return false;
}

function visualizeData() {
	getCityDataFromInput();

	if (city.name === 'undefinned') {
		showWarning();
	} else {
		getTheWeather();

		gauge_pressure.onready = function () {
			setInterval(function () {
				gauge_pressure.setValue(Math.round(data.json.main.pressure));
				gauge_pressure.config.colors.needle.start = `rgba(${getNeedlePressureColor(Math.round(data.json.main.pressure))})`;
				gauge_pressure.config.colors.needle.end = `rgba(${getNeedlePressureColor(Math.round(data.json.main.pressure))})`;
			}, 500);
		}
		gauge_temperature.onready = function () {
			setInterval(function () {
					gauge_temperature.setValue(Math.round(data.json.main.temp));
					gauge_temperature.config.colors.needle.start = `rgba(${getNeedleTemperatureColor(Math.round(data.json.main.temp))})`;
					gauge_temperature.config.colors.needle.end = `rgba(${getNeedleTemperatureColor(Math.round(data.json.main.temp))})`;
				}, 500);
		};
		gauge_humidity.onready = function () {
			setInterval(function () {
					gauge_humidity.setValue(Math.round(data.json.main.humidity));
					gauge_humidity.config.colors.needle.start = `rgba(${getNeedleHumidityColor(Math.round(data.json.main.humidity))})`;
					gauge_humidity.config.colors.needle.end = `rgba(${getNeedleHumidityColor(Math.round(data.json.main.humidity))})`;
			}, 500);
		};
		gauge_temperature.draw();
		gauge_pressure.draw();
		gauge_humidity.draw();
	}
}
saveBtn.addEventListener('click', visualizeData);
