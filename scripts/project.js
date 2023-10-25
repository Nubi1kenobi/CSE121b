//project.js
import apiKey from "./projectmodule1.js";
import { tempComment } from "./projectmodule2.js";

const cityInput = document.querySelector('#userCity');
const theButton = document.querySelector('#theButton')
let cityInputValue = '';
let yourWeather; 

theButton.addEventListener('click', function() {
    cityInputValue = cityInput.value;
    console.log(cityInputValue);
    getWeatherData(cityInputValue)
    cityInput.value = '';
  });

const displayWeather = (yourWeather) => {
   const textOut = `Temperature: ${yourWeather.temp}°F<br>
   Feels Like: ${yourWeather.feels_like}°F<br>
   Max. Temperature: ${yourWeather.max_temp}°F<br>
   Min. Temperature: ${yourWeather.min_temp}°F<br>
   Humidity: ${yourWeather.humidity}%rH<br>
   Wind Speed: ${yourWeather.wind_speed}mph<br>
   Wind Degrees: ${yourWeather.wind_degrees}<br>
   Cloud: ${yourWeather.cloud_pct}%<br>`;
   document.querySelector('#cityWeather').innerHTML = textOut;
   tempComment(yourWeather.temp, yourWeather);
};

const getWeatherData = async (city) => {
    const apiUrl = `https://api.api-ninjas.com/v1/weather?city=${cityInputValue}`;
    const response = await fetch(apiUrl, {method: 'GET', headers: {'X-Api-Key': apiKey}});
    if (response.ok) {
        yourWeather = await response.json();
        displayWeather(yourWeather)};
};
  