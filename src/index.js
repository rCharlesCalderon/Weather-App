const { truncate } = require("lodash");
import "./style.css";
import { locationData } from "./weatherData";
import { temperatureDataF } from "./weatherData";
import { weatherCondition } from "./weatherData";
import { weatherFeelingF } from "./weatherData";
import { weatherFeelingC } from "./weatherData";
import { weatherHumidity } from "./weatherData";
import { windSpeed } from "./weatherData";
import { temperatureDataC } from "./weatherData";
import { weatherImage } from "./weatherData";
import { forecastData } from "./weatherData";
import { displayError } from "./weatherData";
import { forecastImages } from "./weatherData";
getData("91910");

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
        alert("ERROR,cannot find location!")
          displayError()
    });
}

//storage for data received from weather API
let responseData = (() => {
  let weatherData;
  return { weatherData };
})();
//display data
function displayData() {
  let weatherData = responseData.weatherData;
  locationData(weatherData);
  temperatureDataF(weatherData);
  weatherCondition(weatherData);
  weatherFeelingF(weatherData);
  weatherHumidity(weatherData);
  weatherImage(weatherData)
  windSpeed(weatherData);
  forecastData(weatherData);
  forecastImages(weatherData)
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