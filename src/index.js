const { truncate } = require("lodash");
import "./style.css";
import { locationData } from "./weatherData";
import { temperatureDataF } from "./weatherData";
import { weatherCondition } from "./weatherData";
import { weatherFeelingF } from "./weatherData";
import { weatherFeelingC } from "./weatherData";
import { weatherHumidity } from "./weatherData";
import { windSpeed } from "./weatherData";
import { weatherGif } from "./weatherData";
import { temperatureDataC } from "./weatherData";
getData("Paris");

//Get API weather data with 4 day forcast because im poor and cant afford a subscription
async function getData(location) {
  let url = `https://api.weatherapi.com/v1/forecast.json?key=154bc563fa33473cb2f81254231307&q=${location}&days=4`;
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      responseData.weatherData = response;
      displayData();
    })
    .catch(function (err) {
      console.log();
    });
}


//storage for data received from weather API
let responseData = (() => {
  let weatherData;
  return { weatherData };
})();
//display data
function displayData() {
  let weatherData = responseData.weatherData
  locationData(weatherData);
  temperatureDataF(weatherData);
  weatherGif(weatherData);
  weatherCondition(weatherData);
  weatherFeelingF(weatherData);
  weatherHumidity(weatherData);
  windSpeed(weatherData);
  forecastData(weatherData)
}
//bottom 3 forecast data
function forecastData(weatherData){
  let dateArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
 for(let i = 1; i < weatherData.forecast.forecastday.length; i++){
  let day = new Date(weatherData.forecast.forecastday[i].date);
  let forecast = day.getDay()
  let forecastDay = document.querySelector(`.forecast-day${i}`)
  forecastDay.textContent = dateArray[forecast];
  let highestTemp = document.querySelector(`.highest-temp-${i}`);
  highestTemp.textContent = weatherData.forecast.forecastday[i].day.maxtemp_f;
  let lowestTemp = document.querySelector(`.lowest-temp-${i}`);
  lowestTemp.textContent = weatherData.forecast.forecastday[i].day.mintemp_f;
 }

  
  
}

 //EVENT LISTENERS for F AND C BUTTONS

const tempButtons = (() => {
  const fahrenheitButton = document.querySelector(".fahrenheit");
  fahrenheitButton.addEventListener("click", () => {
    temperatureDataF(responseData.weatherData);
    weatherFeelingF(responseData.weatherData);
  });

  const celsiusButton = document.querySelector(".celsius");
  celsiusButton.addEventListener("click", () => {
    temperatureDataC(responseData.weatherData);
    weatherFeelingC(responseData.weatherData);
  });
})();

let location = (() => {
  let locationValue = document.querySelector("#location");
  let submitLocation = document.querySelector(".search-icon");
  submitLocation.addEventListener("click", (event) => {
    getData(locationValue.value);
    event.preventDefault();
  });
})();



 // EVENT LISTENERS END