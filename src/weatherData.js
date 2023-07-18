export function locationData(response) {
  console.log(response);
  let location = document.querySelector(".location");
  location.textContent = `${response.location.name}, ${response.location.country}`;
}
export function temperatureDataF(response) {
  let temperature = document.querySelector(".temperature");
  temperature.textContent = `${response.current.temp_f}°F`;
}
export function weatherCondition(response) {
  let condition = document.querySelector(".condition");
  condition.textContent = `${response.current.condition.text}`;
}
export function weatherFeeling(response) {
  let feeling = document.querySelector(".feeling");
  feeling.textContent = `${response.current.feelslike_f}°F`;
}
export function weatherHumidity(response) {
  let humidity = document.querySelector(".humidity");
  humidity.textContent = `${response.current.humidity}%`;
}
export function windSpeed(response) {
  let speed = document.querySelector(".wind-speed");
  speed.textContent = `${response.current.wind_mph} mph`;
}

export function weatherGif(response) {
  let img = document.querySelector(".weather-gif");
}
