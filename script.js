 // forward geocoding - enter city, get lat and long
 fetch("http://api.positionstack.com/v1/forward?access_key=826f1ac393c4931d61713771643eac12&query=atlanta&limit=1&output=json")
 .then(function (response) {
   return response.json();
 })
 .then(function (data) {
       console.log(data)
 });


// need to put lat/long from position stack into this fetch
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.7698&lon=-84.4145&appid=3b143d5aec8fa14dd06be97585fc0e4c")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
        console.log(data)
  });


// fetches 5+ days
 fetch("https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&units=imperial&appid=3b143d5aec8fa14dd06be97585fc0e4c")
 .then(function (response) {
   return response.json();
 })
 .then(function (data) {
       console.log(data)
 });