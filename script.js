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

function getCurrent(city, lat, lon) {

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${owAPIKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      let formatDate = moment.unix(data.current.dt).format("MMMM D, YYYY");

      getCurrentHeader.textContent = (city);
      getCurrentIcon.textContent = (data.current.weather[0].icon);
      getCurrentDate.textContent = (formatDate);
      getCurrentTemp.textContent = ("  " + data.current.temp + " \xB0F");
      getCurrentWind.textContent = ("  " + data.current.wind_speed + " mph");
      getCurrentHumidity.textContent = ("  " + data.current.humidity + "%");
      getCurrentUV.textContent = ("  " + data.current.uvi);
    })
}

function getLatLon(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${owAPIKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let lat = data.city.coord.lat;
        let lon = data.city.coord.lon;

        getCurrent(city, lat, lon);
    });
  }
  
$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered)
  getLatLon(cityEntered)
})


  // render 5 day forecast to cards
  // render icons

  // search history








