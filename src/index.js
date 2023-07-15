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

function checkZipCodes(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

let submitLocation = (() => {
  let locationValue = document.querySelector(".location");
  let submitLocation = document.querySelector(".submit");
  submitLocation.addEventListener("click", (event) => {
    console.log(checkZipCodes(locationValue.value));
    event.preventDefault();
  });
})();

