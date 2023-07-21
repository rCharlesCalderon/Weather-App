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

export function weatherGif(weatherData) {
  let img = document.querySelector(".weather-gif");
  img.src = weatherData.current.condition.icon;
}
