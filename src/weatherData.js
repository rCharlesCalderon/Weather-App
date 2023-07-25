export function locationData(weatherData) {
  let location = document.querySelector(".location");
  location.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;
  console.log(weatherData);
}
export function temperatureDataF(weatherData) {
  let temperature = document.querySelector(".temperature");
  temperature.textContent = `${weatherData.current.temp_f}°F`;
}
export function temperatureDataC(weatherData) {
  let temperature = document.querySelector(".temperature");
  temperature.textContent = `${weatherData.current.temp_c}°C`;
}
export function weatherCondition(weatherData) {
  let condition = document.querySelector(".condition");
  condition.textContent = `${weatherData.current.condition.text}`;
}
export function weatherFeelingF(weatherData) {
  let feeling = document.querySelector(".feeling");
  feeling.textContent = `${weatherData.current.feelslike_f}°F`;
}
export function weatherFeelingC(weatherData) {
  let feeling = document.querySelector(".feeling");
  feeling.textContent = `${weatherData.current.feelslike_c}°C`;
}
export function weatherHumidity(weatherData) {
  let humidity = document.querySelector(".humidity");
  humidity.textContent = `${weatherData.current.humidity}%`;
}
export function windSpeed(weatherData) {
  let speed = document.querySelector(".wind-speed");
  speed.textContent = `${weatherData.current.wind_mph} mph`;
}


export function weatherImage(weatherData) {
  let img = document.querySelectorAll(".weather-gif");
  let weatherType = returnWeather(weatherData.current.condition.code);
  for (let i = 0; i < 1; i++) {
    if (weatherType === "sunny") {
      img[0].src = "../src/images/day.png";
    } else if (weatherType === "cloudy") {
      img[0].src = "../src/images/cloudy.png";
    } else if (weatherType === "fog") {
      img[0].src = "../src/images/mist.png";
    } else if (weatherType === "rain") {
      img[0].src = "../src/images/rain.png";
    } else if (weatherType === "snow") {
      img[0].src = "../src/images/snowing.png";
    } else if (weatherType === "thunderstorm") {
      img[0].src = "../src/images/storm.png";
    }
  }
}

export function returnWeather(weatherData) {
  let conditions = [
    { sunny: [1000] },
    { cloudy: [1003, 1006, 1009] }, //partly cloudy
    { fog: [1030, 1135, 1147] },
    {
      rain: [
        1063, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201,
        1240, 1243, 1246,
      ],
    },
    {
      snow: [
        1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
        1249, 1252, 1255, 1258,
      ],
    },
    { thunderstorm: [1087, 1273, 1276, 1279, 1282] },
  ];

  for (let i = 0; i < conditions.length; i++) {
    for (const key in conditions[i]) {
      if (conditions[i][key].includes(weatherData)) {
        return key;
      }
    }
  }
}

export function forecastData(weatherData) {
  let forecastContainer = document.querySelectorAll(".forecast-day");
  let highestTemp = document.querySelectorAll(".highest-temp");
  let lowestTemp = document.querySelectorAll(".lowest-temp");
  let weatherPath = weatherData.forecast.forecastday;

  forecastContainer[0].textContent = new Date(
    weatherPath[2].date
  ).toDateString();
  highestTemp[0].textContent = `H:${weatherPath[1].day.maxtemp_f}F`;
  lowestTemp[0].textContent = `L:${weatherPath[1].day.mintemp_f}F`;

  forecastContainer[1].textContent = new Date(
    weatherPath[3].date
  ).toDateString();
  highestTemp[1].textContent = `H:${weatherPath[2].day.maxtemp_f}F`;
  lowestTemp[1].textContent = `L:${weatherPath[2].day.mintemp_f}F`;
}

export function displayError() {
  let locationInput = document.querySelector("#location");
  locationInput.value = "";
}

export function forecastImages(weatherData) {
  let img = document.querySelectorAll(".weather-gif");
  for (let i = 1; i < img.length; i++) {
    let weatherType = returnWeather(
      weatherData.forecast.forecastday[i].day.condition.code
    );
    if (weatherType === "sunny") {
      img[i].src = "../src/images/day.png";
    } else if (weatherType === "cloudy") {
      img[i].src = "../src/images/cloudy.png";
    } else if (weatherType === "fog") {
      img[i].src = "../src/images/mist.png";
    } else if (weatherType === "rain") {
      img[i].src = "../src/images/rain.png";
    } else if (weatherType === "snow") {
      img[i].src = "../src/images/snowing.png";
    } else if (weatherType === "thunderstorm") {
      img[i].src = "../src/images/storm.png";
    }
  }
}