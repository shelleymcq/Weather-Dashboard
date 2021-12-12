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

const getDateOne = document.getElementById("day1-date");
const getIconOne = document.getElementById("day1-icon");
const getTempOne = document.getElementById("day1-temp");
const getWindOne = document.getElementById("day1-wind");
const getHumiOne = document.getElementById("day1-humi");

const getDateTwo = document.getElementById("day2-date");
const getIconTwo = document.getElementById("day2-icon");
const getTempTwo = document.getElementById("day2-temp");
const getWindTwo = document.getElementById("day2-wind");
const getHumiTwo = document.getElementById("day2-humi");

const getDateThree = document.getElementById("day3-date");
const getIconThree = document.getElementById("day3-icon");
const getTempThree = document.getElementById("day3-temp");
const getWindThree = document.getElementById("day3-wind");
const getHumiThree = document.getElementById("day3-humi");

const getDateFour = document.getElementById("day4-date");
const getIconFour = document.getElementById("day4-icon");
const getTempFour = document.getElementById("day4-temp");
const getWindFour = document.getElementById("day4-wind");
const getHumiFour = document.getElementById("day4-humi");

const getDateFive = document.getElementById("day5-date");
const getIconFive = document.getElementById("day5-icon");
const getTempFive = document.getElementById("day5-temp");
const getWindFive = document.getElementById("day5-wind");
const getHumiFive = document.getElementById("day5-humi");

function getWeather(city, lat, lon) {

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${owAPIKey}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      // render current weather
      let formatDate = moment.unix(data.current.dt).format("MMMM D, YYYY");
      let iconCurrent = data.current.weather[0].icon;

      getCurrentHeader.textContent = (city.charAt(0).toUpperCase() + city.slice(1));
      getCurrentIcon.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconCurrent}.png">`);
      getCurrentDate.textContent = (formatDate);
      getCurrentTemp.textContent = ("  " + data.current.temp + " \xB0F");
      getCurrentWind.textContent = ("  " + data.current.wind_speed + " mph");
      getCurrentHumidity.textContent = ("  " + data.current.humidity + "%");
      getCurrentUV.textContent = ("  " + data.current.uvi);

      // render 5-day forecast
      let formatDateOne = moment.unix(data.daily[1].dt).format("M/D/YY");
      let iconOne = data.daily[1].weather[0].icon;

      getDateOne.textContent = (formatDateOne);
      getIconOne.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconOne}.png">`);
      getTempOne.textContent = ("  " + data.daily[1].temp.max + " \xB0F");
      getWindOne.textContent = ("  " + data.daily[1].wind_speed + " mph");
      getHumiOne.textContent = ("  " + data.daily[1].humidity + "%");

      let formatDateTwo = moment.unix(data.daily[2].dt).format("M/D/YY");
      let iconTwo = data.daily[2].weather[0].icon;

      getDateTwo.textContent = (formatDateTwo);
      getIconTwo.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconTwo}.png">`);
      getTempTwo.textContent = ("  " + data.daily[2].temp.max + " \xB0F");
      getWindTwo.textContent = ("  " + data.daily[2].wind_speed + " mph");
      getHumiTwo.textContent = ("  " + data.daily[2].humidity + "%");

      let formatDateThree = moment.unix(data.daily[3].dt).format("M/D/YY");
      let iconThree = data.daily[3].weather[0].icon;

      getDateThree.textContent = (formatDateThree);
      getIconThree.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconThree}.png">`);
      getTempThree.textContent = ("  " + data.daily[3].temp.max + " \xB0F");
      getWindThree.textContent = ("  " + data.daily[3].wind_speed + " mph");
      getHumiThree.textContent = ("  " + data.daily[3].humidity + "%");
      
      let formatDateFour = moment.unix(data.daily[4].dt).format("M/D/YY");
      let iconFour = data.daily[4].weather[0].icon;

      getDateFour.textContent = (formatDateFour);
      getIconFour.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconFour}.png">`);
      getTempFour.textContent = ("  " + data.daily[4].temp.max + " \xB0F");
      getWindFour.textContent = ("  " + data.daily[4].wind_speed + " mph");
      getHumiFour.textContent = ("  " + data.daily[4].humidity + "%");
      
      let formatDateFive = moment.unix(data.daily[5].dt).format("M/D/YY");
      let iconFive = data.daily[5].weather[0].icon;

      getDateFive.textContent = (formatDateFive);
      getIconFive.innerHTML = (`<img src="http://openweathermap.org/img/w/${iconFive}.png">`);
      getTempFive.textContent = ("  " + data.daily[5].temp.max + " \xB0F");
      getWindFive.textContent = ("  " + data.daily[5].wind_speed + " mph");
      getHumiFive.textContent = ("  " + data.daily[5].humidity + "%");

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

        getWeather(city, lat, lon);
    });
  }
  
$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered.charAt(0).toUpperCase() + cityEntered.slice(1));
  getLatLon(cityEntered);
})


  // render 5 day forecast to cards

  // search history

  // bonus
  // add state
  // auto-populate current and forecast with most recent search







