const { truncate } = require("lodash");
import "./style.css";
import { locationData } from "./weatherData";
import { temperatureData } from "./weatherData";
import { weatherCondition } from "./weatherData";
import { weatherFeeling } from "./weatherData";
import { weatherHumidity } from "./weatherData";
import { windSpeed } from "./weatherData";
import { weatherGif } from "./weatherData";

async function getData(location) {
  let url = `https://api.weatherapi.com/v1/current.json?key=154bc563fa33473cb2f81254231307&q=${location}`;
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      displayData(response);
    })
    .catch(function (err) {
      console.log();
    });
}

function displayData(response) {
  locationData(response);
  temperatureData(response);
  weatherGif(response);
  weatherCondition(response);
  weatherFeeling(response);
  weatherHumidity(response);
  windSpeed(response);
}

let submitLocation = (() => {
  let locationValue = document.querySelector("#location");
  let submitLocation = document.querySelector(".search-icon");
  submitLocation.addEventListener("click", (event) => {
    console.log(getData(locationValue.value));
    event.preventDefault();
  });
})();

 