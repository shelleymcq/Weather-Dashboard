const psAPIKey = "826f1ac393c4931d61713771643eac12";
const owAPIKey = "3b143d5aec8fa14dd06be97585fc0e4c";

const cityInput = document.getElementById("city-input")
const searchBtn = document.getElementById("search-button");














// // input city added to local storage on button click
$("#search-button").click(function () {
  let cityEntered = $(this).siblings(".input").val();
  localStorage.setItem("city", cityEntered)
  getCityWeather(cityEntered)
})

// fetches 5+ days
function getCityWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < 5; i++) {
        console.log(data.list[i].dt_txt);
        console.log(data.list[i].weather[0].icon);
        console.log(data.list[i].main.temp);
        console.log(data.list[i].wind.speed);
        console.log(data.list[i].main.humidity);

      }
    });

}






// // store previous searches (up to 5?) in an array and store the array in localStorage??
// const storedCities = [];

// const getCity = $().val(localStorage.getItem("city"))








// forward geocoding - enter city, get lat and long
//  fetch("http://api.positionstack.com/v1/forward?access_key=826f1ac393c4931d61713771643eac12&query=atlanta&limit=1&output=json")
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (data) {
//        console.log(data)
//  });


// need to put lat/long from position stack into this fetch
// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.7698&lon=-84.4145&appid=3b143d5aec8fa14dd06be97585fc0e4c")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//         console.log(data)
//   });



