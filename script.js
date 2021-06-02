const psAPIKey = "826f1ac393c4931d61713771643eac12";
const owAPIKey = "3b143d5aec8fa14dd06be97585fc0e4c";

const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-button");

const getCurrentHeader = document.getElementById("current-header");
const getCurrentTemp = document.getElementById("current-temp");
const getCurrentWind = document.getElementById("current-wind");
const getCurrentHumidity = document.getElementById("current-humidity");
const getCurrentUV = document.getElementById("uv-index");


$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered)
  getLatLong(cityEntered)
})


function getLatLong(cityInput) {
  // This api requires the city name to start with uppercase. And it's REALLY slow.
  fetch(`http://api.positionstack.com/v1/forward?access_key=826f1ac393c4931d61713771643eac12&query=${cityInput}&limit=1&output=json`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        let lati = (data.data[0].latitude)
        let longi = (data.data[0].longitude)
        localStorage.setItem("lat", lati);
        localStorage.setItem("long", longi);
        getCurrentWeather(lati, longi);
    });
  }

function getCurrentWeather(lat, lon) {
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3b143d5aec8fa14dd06be97585fc0e4c")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });

}



// // get data from localStorage
//   let latitude = JSON.parse(localStorage.getItem('lat'));
//   console.log(latitude)
//   let longitude = JSON.parse(localStorage.getItem('long'));
//   console.log(longitude)
//   let city = localStorage.getItem('city');
//   console.log(city)



    
  // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.7698&lon=-84.4145&appid=3b143d5aec8fa14dd06be97585fc0e4c")
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //       console.log(data)
  // });


// using 5-day forecast to practice before using one call
// $("#search-button").click(function () {
//   let cityEntered = $(this).siblings(".input").val();
//   localStorage.setItem("city", cityEntered)
//   getCurrentWeather(cityEntered)
// })

// function getCurrentWeather(city) {
//   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//         getCurrentHeader.textContent = (data.city.name + " (" + data.list[0].dt_txt + ") " + data.list[0].weather[0].icon);
//         getCurrentTemp.innerText += (data.list[0].main.temp);
//         getCurrentWind.innerText += (data.list[0].wind.speed);
//         getCurrentHumidity.innerText += (data.list[0].main.humidity);
//     });
//   }

  
// input city added to local storage on button click
// $("#search-button").click(function () {
//   let cityEntered = $(this).siblings(".input").val();
//   localStorage.setItem("city", cityEntered)
//   getCityForecast(cityEntered)
// })

// fetches 5+ days
// function getCityForecast(city) {
//   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (let i = 0; i < 5; i++) {
//         console.log(data.list[i].dt_txt);
//         console.log(data.list[i].weather[0].icon);
//         console.log(data.list[i].main.temp);
//         console.log(data.list[i].wind.speed);
//         console.log(data.list[i].main.humidity);

//       }
//     });

// }





// Still Need:
// 1. 
// 2. feed it to one call 
// 3. rework getCurrentWeather
// 4. print 5-day to 5 boxes !(*&^$(*&%))
// 5. store cities 
// 6. print 5-6 saved cities to previous buttons 
// 7. icons!!