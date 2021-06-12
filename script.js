const psAPIKey = "826f1ac393c4931d61713771643eac12";
const owAPIKey = "3b143d5aec8fa14dd06be97585fc0e4c";

const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-button");

const getCurrentHeader = document.getElementById("current-header");
const getCurrentTemp = document.getElementById("current-temp");
const getCurrentWind = document.getElementById("current-wind");
const getCurrentHumidity = document.getElementById("current-humidity");
const getCurrentUV = document.getElementById("uv-index");





// using 5-day forecast until I can fix one call, so missing UV index
$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered)
  getCurrentWeather(cityEntered)
})

function getCurrentWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        getCurrentHeader.textContent = (data.city.name + " (" + data.list[0].dt_txt + ") " + data.list[0].weather[0].icon);
        getCurrentTemp.innerText += (data.list[0].main.temp);
        getCurrentWind.innerText += (data.list[0].wind.speed);
        getCurrentHumidity.innerText += (data.list[0].main.humidity);
    });
  }


// get data from localStorage to use in search history
let latitude = JSON.parse(localStorage.getItem('lat'));
console.log(latitude)
let longitude = JSON.parse(localStorage.getItem('long'));
console.log(longitude)
let city = localStorage.getItem('city');
console.log(city)






// To Do Still

// fix date
// get the weather icons from https://openweathermap.org/img/wn/10d@2x.png

// // need to sort out the 5 days from the every 3-hour data returned. The first 5 elements are just a day and a half at 3 hour intervals

// // fetches 5+ days
// function getCityForecast(city) {
//   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//      for (let i = 0; i < 5; i++) {
//        console.log(data.list[i].dt_txt);
//        console.log(data.list[i].weather[0].icon);
//        console.log(data.list[i].main.temp);
//        console.log(data.list[i].wind.speed);
//        console.log(data.list[i].main.humidity);
//     });
//   }


// Successfully gets lat/long, but I can't get that into one call yet.

// $("#search-button").click(function () {
//   let cityEntered = $(this).siblings(".input").val();
//   localStorage.setItem("city", cityEntered)
//   getLatLong(cityEntered)
// })


// function getLatLong(cityInput) {
//   // This api requires the city name to start with uppercase. And it's REALLY slow.
//   fetch(`http://api.positionstack.com/v1/forward?access_key=826f1ac393c4931d61713771643eac12&query=${cityInput}&limit=1&output=json`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         let lati = (data.data[0].latitude)
//         let longi = (data.data[0].longitude)
//         localStorage.setItem("lat", lati);
//         localStorage.setItem("long", longi);
//         getCurrentWeather(lati, longi);
//     });
//   }

//   // Need this in jQuery land so the variables work??
// function getCurrentWeather(lat, lon) {
//   fetch("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3b143d5aec8fa14dd06be97585fc0e4c")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//   });
// }


// // input city added to local storage on button click
// $("#search-button").click(function () {
//   let cityEntered = $(this).siblings(".input").val();
//   localStorage.setItem("city", cityEntered)
//   getCityForecast(cityEntered)
//   //addCity(cityEntered)
// })

// // store previously searched cities in an array (not working yet)
// let addCity = function(city) {
//   let cityArray = []
//   cityArray.push(city);
//   console.log(cityArray);
// }

// stored cities on screen






