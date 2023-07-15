const { truncate } = require("lodash");


async function getData(location) {
  let url = `http://api.weatherapi.com/v1/current.json?key=154bc563fa33473cb2f81254231307&q=${location}`;
  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}

getData("Paris");

