/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// const container = document.querySelector('.container');
const weatherContainer = document.querySelector('.flex_item_weather_picture');
const weatherInstruments = document.querySelector('.flex_item_instruments');
const mainHead = document.querySelector('.main__title');
const cityInfo = document.querySelector('.city-info');
const searchBtn = document.querySelector('#button-search');
const formData = document.querySelector('.form');
const getCityNameForQuery = document.querySelector('#city__name');
const menuProposedCities = document.querySelector('#menu-proposed-cities');
const noDataMessage = 'undefinned';
// const token = 'nJ60nUuoOiQ555BzTZUIDqcruSObGSN4';
const token = 'KhtLWM0R2Rxuj95cJGzAu8y9pqPfawiJ';

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

const cityCodes = new Data();
const weatherData = new Data();

function getCityDataFromInput() {
	if (formData.name.value) {
		city.name = formData.name.value;
	}
}

function removeTheProposedListOfCities() {
	if (menuProposedCities) {
		if (menuProposedCities.childElementCount) {
			menuProposedCities.removeChild(menuProposedCities.childNodes[1]);
		}
	}
}

getCityNameForQuery.addEventListener('keyup', function () {
	removeTheProposedListOfCities();
	if (getCityNameForQuery.value.length > 2) {
		city.name = getCityNameForQuery.value;
		getListOfProposedCityNames();
	}
});

menuProposedCities.addEventListener('click', function () {
	getTheWeather(event.target.firstChild.parentElement.attributes.title.value, event.target.firstChild.parentElement.textContent);
});

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
	menuProposedCities.classList.remove('menu-proposed-cities--visible');
	menuProposedCities.classList.add('menu-proposed-cities');
}

function showData(n) {
	hideInput();
	visualizeData();
	cityInfo.querySelector('.city-info__name').textContent = n;
	weatherContainer.querySelector('.content_weather_city').innerText = n;
	cityInfo.querySelector('.city-info__temp').textContent = `${weatherData.json[0].ApparentTemperature.Metric.Value} \xB0C`;
	cityInfo.querySelector('.city-info__pressure').textContent = `${weatherData.json[0].Pressure.Metric.Value} mb`;
	cityInfo.querySelector('.city-info__humidity').textContent = `${weatherData.json[0].RelativeHumidity} %`;
	// cityInfo.querySelector('.city-info__temp_min').textContent = `${weatherData.json[0].TemperatureSummary.Past6HourRange.Minimum.Metric.Value} \xB0C`;
	// cityInfo.querySelector('.city-info__temp_max').textContent = `${weatherData.json[0].TemperatureSummary.Past6HourRange.Maximum.Metric.Value} \xB0C`;
	mainHead.classList.add('main__title--visible');
	cityInfo.classList.add('city-info--visible');
	showInstrumentArrow();
}

function showProposedListOfCities(a) {
	const menuBody = document.createElement('div');
	menuBody.classList.add('menu-body');
	const menuItems = document.createElement('ul');
	menuItems.classList.add('menu-items');

	for (let i = 0; i < a.length; i += 1) {
		const menuItem = document.createElement('li');
		const anchorForProposedCity = document.createElement('a');
		const anchorText = document.createTextNode(`${a[i].localizedName}, ${a[i].administrativeArea.LocalizedName}, ${a[i].country.LocalizedName}, ${a[i].country.ID}`);
		anchorForProposedCity.appendChild(anchorText);
		anchorForProposedCity.title = `${a[i].key}`;
		anchorForProposedCity.href = '#';
		menuItem.appendChild(anchorForProposedCity);
		menuItems.appendChild(menuItem);
	}

	menuBody.appendChild(menuItems);
	menuProposedCities.appendChild(menuBody);
	menuProposedCities.classList.remove('menu-proposed-cities');
	menuProposedCities.classList.add('menu-proposed-cities--visible');
}

function getListOfProposedCityNames() {
	const xhr = new XMLHttpRequest();
	xhr.open(
		'GET',
		`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${token}&q=${city.name}&language=en-us&details=false`,
		true,
	);
	xhr.onreadystatechange = function statement() {
		if (this.readyState !== 4) {
			return false;
		}
		if (this.status === 200) {
			cityCodes.json = JSON.parse(this.responseText);



			showProposedListOfCities(makeArrForCityCodes(cityCodes.json));
			return true;
		}
		cityCodes.json = false;
		showWarning();
		return false;
	};
	xhr.send();
}

function makeArrForCityCodes(d) {
	const arr = [];
	for (let i = 0; i < d.length; i += 1) {
		arr.push({
			administrativeArea: d[i].AdministrativeArea,
			country: d[i].Country,
			key: d[i].Key,
			localizedName: d[i].LocalizedName,
			rank: d[i].Rank,
			type: d[i].Type,
		});
	}
	return arr;
}

function getTheWeather(c, n) {
	const xhr = new XMLHttpRequest();
	xhr.open(
		'GET',
		`http://dataservice.accuweather.com/currentconditions/v1/${c}?apikey=${token}&language=ru-ru&details=true`,
		true,
	);
	xhr.onreadystatechange = function statement() {
		if (this.readyState !== 4) {
			return;
		}
		if (this.status === 200) {
			weatherData.json = JSON.parse(this.responseText);
			showData(n);
			return;
		}
		weatherData.json = false;
		showWarning();
	};
	xhr.send();
}

function getACityCodeForACityName() {
	const xhr = new XMLHttpRequest();
	xhr.open(
		'GET',
		`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${token}&q=${city.name}&language=en-us&details=false`,
		true,
	);
	xhr.onreadystatechange = function statement() {
		if (this.readyState !== 4) {
			return false;
		}
		if (this.status === 200) {
			cityCodes.json = JSON.parse(this.responseText);
			const arr = makeArrForCityCodes(cityCodes.json);
			getTheWeather(arr[0].key, city.name)
			return true;
		}
		cityCodes.json = false;
		showWarning();
		return false;
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
	gauge_pressure.onready = function () {
		setInterval(function () {
			const p = Math.round(weatherData.json[0].Pressure.Metric.Value);
			gauge_pressure.setValue(Math.round(p));
			gauge_pressure.config.colors.needle.start = `rgba(${getNeedlePressureColor(p)})`;
			gauge_pressure.config.colors.needle.end = `rgba(${getNeedlePressureColor(p)})`;
		}, 500);
	}
	gauge_temperature.onready = function () {
		setInterval(function () {
			const t = Math.round(weatherData.json[0].ApparentTemperature.Metric.Value);
			gauge_temperature.setValue(t);
			gauge_temperature.config.colors.needle.start = `rgba(${getNeedleTemperatureColor(t)})`;
			gauge_temperature.config.colors.needle.end = `rgba(${getNeedleTemperatureColor(t)})`;
		}, 500);
	};
	gauge_humidity.onready = function () {
		setInterval(function () {
			const h = Math.round(weatherData.json[0].RelativeHumidity);
			gauge_humidity.setValue(h);
			gauge_humidity.config.colors.needle.start = `rgba(${getNeedleHumidityColor(h)})`;
			gauge_humidity.config.colors.needle.end = `rgba(${getNeedleHumidityColor(h)})`;
		}, 500);
	};
	gauge_temperature.draw();
	gauge_pressure.draw();
	gauge_humidity.draw();
}
searchBtn.addEventListener('click', function () {
	getCityDataFromInput();
	getACityCodeForACityName();
});