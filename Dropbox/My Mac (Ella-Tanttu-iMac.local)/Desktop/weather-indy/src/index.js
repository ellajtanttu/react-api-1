import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import convertTemp from './js/ferService.js';
import WeatherService from './js/weather-service.js';

/*
1. button is submitted
2. value of "city" is turned into a variable
3. fields are all cleared (clearFields function)
4. makeAPIcall is called --->
  a. response variable is await declared, holding json object. (this invokes the service logic, with the promise, try catch, and fetch)
  b. json is parsed and values added to dom via the (getElements function)
*/

function clearFields() {
  $('#location').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showDesc').text("");
  $('.showWind').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature in Fahrenheit is ${convertTemp(response.main.temp)} degrees.`);
    $('.showDesc').text(`The weather description is ${response.weather[0].description}.`);
    $('.showWind').text(`The wind speed is is ${response.wind.speed} mph.`);
  } else {
    $('.showErrors').text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    // --------------------------------------------------------
    // IIFE Example:
    // --------------------------------------------------------
    // (async function() {
    //   const response = await WeatherService.getWeather(city);
    //   getElements(response);
    // })();
    // --------------------------------------------------------
    makeApiCall(city);

    // let promise = WeatherService.getWeather(city);
    // let request = new XMLHttpRequest();
    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;

    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // }

    // request.open("GET", url, true);
    // request.send();

    // function getElements(response) {
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Fahrenheit is ${convertTemp(response.main.temp)} degrees.`);
    //   $('.showDesc').text(`The weather description is ${response.weather[0].description}.`);
    //   $('.showWind').text(`The wind speed is is ${response.wind.speed} mph.`);
    // }
  });
});