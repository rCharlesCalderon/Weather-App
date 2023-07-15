const { truncate } = require("lodash");

async function getData(location) {
  let url = `http://api.weatherapi.com/v1/current.json?key=154bc563fa33473cb2f81254231307&q=${location}`;
  let text = document.querySelector(".text");
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      //Write the functions that process the JSON data you’re
      // getting from the API and return an object with only the data you require for your app.
    });
}

getData("Paris");
