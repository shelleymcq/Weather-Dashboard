const owAPIKey = "3b143d5aec8fa14dd06be97585fc0e4c";

const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-button");

const getCurrentHeader = document.getElementById("current-city");
const getCurrentIcon = document.getElementById("current-icon");
const getCurrentDate = document.getElementById("current-date");
const getCurrentTemp = document.getElementById("current-temp");
const getCurrentWind = document.getElementById("current-wind");
const getCurrentHumidity = document.getElementById("current-humi");
const getCurrentUV = document.getElementById("current-uvin");

$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered)
  getLatLon(cityEntered)
  getCurrent(cityEntered)
})

function getLatLon(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${owAPIKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        localStorage.setItem("lat", data.city.coord.lat);
        localStorage.setItem("lon", data.city.coord.lon);
    });
  }
  
  function getCurrent(city) {
    let lat = localStorage.getItem("lat");
    let lon = localStorage.getItem("lon");

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${owAPIKey}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)

        let formatDate = moment.unix(data.current.dt).format("MMMM D, YYYY");

        getCurrentHeader.textContent = (city);
        getCurrentIcon.textContent = (data.current.weather[0].icon);
        getCurrentDate.textContent = (formatDate);
        getCurrentTemp.innerText += (" " + data.current.temp + " ");
        getCurrentWind.innerText += (" " + data.current.wind_speed + " ");
        getCurrentHumidity.innerText += (" " + data.current.humidity + " ");
        getCurrentUV.innerText += (" " + data.current.uvi + " ");
      })
  }




  // clear current on new search
  // render 5 day forecast to cards
  // render icons

  // search history








