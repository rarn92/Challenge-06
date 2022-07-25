var userButton = document.getElementById("userButton");
var userSearch = document.getElementById("userSearch");
var enterListen = document.getElementById("enterListen");
var cityName = document.getElementById("cityName");
var mainDate = document.getElementById("mainDate");
var temperature = document.getElementById("temp");
var uviColor = document.getElementById("uviColor");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvIndex = document.getElementById("uvIndex");
var todayIcon = document.getElementById("todayIcon");
var historyButtons = document.getElementById("historyButtonArea");
var dayOne = document.getElementById("dayOne");
var dayOneIcon = document.getElementById("dayOneIcon");
var dayOneTemp = document.getElementById("dayOneTemp");
var dayOneWind = document.getElementById("dayOneWind");
var dayOneHumidity = document.getElementById("dayOneHumidity");
var dayTwo = document.getElementById("dayTwo");
var dayTwoIcon = document.getElementById("dayTwoIcon");
var dayTwoTemp = document.getElementById("dayTwoTemp");
var dayTwoWind = document.getElementById("dayTwoWind");
var dayTwoHumidity = document.getElementById("dayTwoHumidity");
var dayThree = document.getElementById("dayThree");
var dayThreeIcon = document.getElementById("dayThreeIcon");
var dayThreeTemp = document.getElementById("dayThreeTemp");
var dayThreeWind = document.getElementById("dayThreeWind");
var dayThreeHumidity = document.getElementById("dayThreeHumidity");
var dayFour = document.getElementById("dayFour");
var dayFourIcon = document.getElementById("dayFourIcon");
var dayFourTemp = document.getElementById("dayFourTemp");
var dayFourWind = document.getElementById("dayFourWind");
var dayFourHumidity = document.getElementById("dayFourHumidity");
var dayFive = document.getElementById("dayFive");
var dayFiveIcon = document.getElementById("dayFiveIcon");
var dayFiveTemp = document.getElementById("dayFiveTemp");
var dayFiveWind = document.getElementById("dayFiveWind");
var dayFiveHumidity = document.getElementById("dayFiveHumidity");
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var myAPIKey = "d0bb8f219d5e0d87bf553cb23384eb1b"


userButton.onclick = function(){
  // store city in local storage
    localStorage.setItem('CityName', userSearch.value);
    // Get city lat/lon
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + userSearch.value + "&appid=" + myAPIKey;

    var searchCity = localStorage.getItem("CityName")
    const history = `<div><button data-city="${searchCity}" class="btn btn-secondary btn-block" id="historyButton" style="width: 80%; margin:5px;">${localStorage.getItem("CityName")}</button></div>`;
    historyButtons.insertAdjacentHTML('beforeend', history);

    // Clear old data on new search
    cityName.innerHTML = "Weather in: ";
    mainDate.innerHTML = "";
    temperature.innerHTML = "Temperature: ";
    wind.innerHTML = "Wind: ";
    humidity.innerHTML = "Humidity: ";
    uvIndex.innerHTML = "UV Index: ";

    dayOne.innerHTML = "";
    dayOneTemp.innerHTML = "Temp: ";
    dayOneWind.innerHTML = "Wind: ";
    dayOneHumidity.innerHTML = "Humidity: ";

    dayTwo.innerHTML = "";
    dayTwoTemp.innerHTML = "Temp: ";
    dayTwoWind.innerHTML = "Wind: ";
    dayTwoHumidity.innerHTML = "Humidity: ";

    dayThree.innerHTML = "";
    dayThreeTemp.innerHTML = "Temp: ";
    dayThreeWind.innerHTML = "Wind: ";
    dayThreeHumidity.innerHTML = "Humidity: ";

    dayFour.innerHTML = "";
    dayFourTemp.innerHTML = "Temp: ";
    dayFourWind.innerHTML = "Wind: ";
    dayFourHumidity.innerHTML = "Humidity: ";

    dayFive.innerHTML = "";
    dayFiveTemp.innerHTML = "Temp: ";
    dayFiveWind.innerHTML = "Wind: ";
    dayFiveHumidity.innerHTML = "Humidity: ";

  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data[0].lon);
        var userLon = data[0].lon;
        console.log(data[0].lat)
        var userLat = data[0].lat;

        var requestUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + userLat + "&lon=" + userLon + "&units=imperial&appid=" + myAPIKey;
        
        fetch(requestUrl2)
        .then(function (response) { 
          return response.json();
        })
        .then(function (data2) {
          console.log(data2)
          // City search Today
          cityName.append(data[0].name);
          var todayDate = new Date((data2.current.dt*1000)).toLocaleString("en-US", options)
          mainDate.append(todayDate);
          todayIcon.src = "https://openweathermap.org/img/wn/" + data2.current.weather[0].icon + "@2x.png"
          temperature.append(data2.current.temp + "°F")
          wind.append(data2.current.wind_speed + " MPH")
          humidity.append(data2.current.humidity + "%")
          uvIndex.append(data2.current.uvi)
          // Day One
          var dayOneDate = new Date((data2.daily[1].dt*1000)).toLocaleString("en-US", options)
          dayOne.append(dayOneDate);
          dayOneIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[1].weather[0].icon + "@2x.png"
          dayOneTemp.append(data2.daily[1].temp.day + "°F")
          dayOneWind.append(data2.daily[1].wind_speed + " MPH")
          dayOneHumidity.append(data2.daily[1].humidity + "%")
          // Day Two
          var dayTwoDate = new Date((data2.daily[2].dt*1000)).toLocaleString("en-US", options)
          dayTwo.append(dayTwoDate);
          dayTwoIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[2].weather[0].icon + "@2x.png"
          dayTwoTemp.append(data2.daily[2].temp.day + "°F")
          dayTwoWind.append(data2.daily[2].wind_speed + " MPH")
          dayTwoHumidity.append(data2.daily[2].humidity + "%")
          // Day Three
          var dayThreeDate = new Date((data2.daily[3].dt*1000)).toLocaleString("en-US", options)
          dayThree.append(dayThreeDate);
          dayThreeIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[3].weather[0].icon + "@2x.png"
          dayThreeTemp.append(data2.daily[3].temp.day + "°F")
          dayThreeWind.append(data2.daily[3].wind_speed + " MPH")
          dayThreeHumidity.append(data2.daily[3].humidity + "%")
          // Day Four
          var dayFourDate = new Date((data2.daily[4].dt*1000)).toLocaleString("en-US", options)
          dayFour.append(dayFourDate);
          dayFourIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[4].weather[0].icon + "@2x.png"
          dayFourTemp.append(data2.daily[4].temp.day + "°F")
          dayFourWind.append(data2.daily[4].wind_speed + " MPH")
          dayFourHumidity.append(data2.daily[4].humidity + "%")
          // Day Five
          var dayFiveDate = new Date((data2.daily[5].dt*1000)).toLocaleString("en-US", options)
          dayFive.append(dayFiveDate);
          dayFiveIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[5].weather[0].icon + "@2x.png"
          dayFiveTemp.append(data2.daily[5].temp.day + "°F")
          dayFiveWind.append(data2.daily[5].wind_speed + " MPH")
          dayFiveHumidity.append(data2.daily[5].humidity + "%")

          if (data2.current.uvi <= 6) {
            uviColor.style.backgroundColor = "lightblue";
          } else if (data2.current.uvi > 6 && data2.current.uvi <= 7) {
            uviColor.style.backgroundColor = "yellow";
          } else if (data2.current.uvi > 7 && data2.current.uvi <= 8) {
            uviColor.style.backgroundColor = "orange";
          } else {
            uviColor.style.backgroundColor = "red";
          }    
        });
      });  
};

historyButtons.onclick = function(e) {
  console.log(e.target.dataset.city);
  var historySearchCity = e.target.dataset.city;

  // Get city lat/lon
  var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + historySearchCity + "&appid=" + myAPIKey;
          
  // Clear old data on new search
  cityName.innerHTML = "Today's Weather in: ";
  mainDate.innerHTML = "";
  temperature.innerHTML = "Temperature: ";
  wind.innerHTML = "Wind: ";
  humidity.innerHTML = "Humidity: ";
  uvIndex.innerHTML = "UV Index: ";

  dayOne.innerHTML = "";
  dayOneTemp.innerHTML = "Temp: ";
  dayOneWind.innerHTML = "Wind: ";
  dayOneHumidity.innerHTML = "Humidity: ";

  dayTwo.innerHTML = "";
  dayTwoTemp.innerHTML = "Temp: ";
  dayTwoWind.innerHTML = "Wind: ";
  dayTwoHumidity.innerHTML = "Humidity: ";

  dayThree.innerHTML = "";
  dayThreeTemp.innerHTML = "Temp: ";
  dayThreeWind.innerHTML = "Wind: ";
  dayThreeHumidity.innerHTML = "Humidity: ";

  dayFour.innerHTML = "";
  dayFourTemp.innerHTML = "Temp: ";
  dayFourWind.innerHTML = "Wind: ";
  dayFourHumidity.innerHTML = "Humidity: ";

  dayFive.innerHTML = "";
  dayFiveTemp.innerHTML = "Temp: ";
  dayFiveWind.innerHTML = "Wind: ";
  dayFiveHumidity.innerHTML = "Humidity: ";


  fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data[0].lon);
        var userLon = data[0].lon;
        console.log(data[0].lat)
        var userLat = data[0].lat;

        var requestUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + userLat + "&lon=" + userLon + "&units=imperial&appid=" + myAPIKey;
        
        fetch(requestUrl2)
        .then(function (response) { 
          return response.json();
        })
        .then(function (data2) {
          console.log(data2)
          // City search Today
          cityName.append(data[0].name);
          var todayDate = new Date((data2.current.dt*1000)).toLocaleString("en-US", options)
          mainDate.append(todayDate);
          todayIcon.src = "https://openweathermap.org/img/wn/" + data2.current.weather[0].icon + "@2x.png"
          temperature.append(data2.current.temp + "°F")
          wind.append(data2.current.wind_speed + " MPH")
          humidity.append(data2.current.humidity + "%")
          uvIndex.append(data2.current.uvi)
          // Day One
          var dayOneDate = new Date((data2.daily[1].dt*1000)).toLocaleString("en-US", options)
          dayOne.append(dayOneDate);
          dayOneIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[1].weather[0].icon + "@2x.png"
          dayOneTemp.append(data2.daily[1].temp.day + "°F")
          dayOneWind.append(data2.daily[1].wind_speed + " MPH")
          dayOneHumidity.append(data2.daily[1].humidity + "%")
          // Day Two
          var dayTwoDate = new Date((data2.daily[2].dt*1000)).toLocaleString("en-US", options)
          dayTwo.append(dayTwoDate);
          dayTwoIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[2].weather[0].icon + "@2x.png"
          dayTwoTemp.append(data2.daily[2].temp.day + "°F")
          dayTwoWind.append(data2.daily[2].wind_speed + " MPH")
          dayTwoHumidity.append(data2.daily[2].humidity + "%")
          // Day Three
          var dayThreeDate = new Date((data2.daily[3].dt*1000)).toLocaleString("en-US", options)
          dayThree.append(dayThreeDate);
          dayThreeIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[3].weather[0].icon + "@2x.png"
          dayThreeTemp.append(data2.daily[3].temp.day + "°F")
          dayThreeWind.append(data2.daily[3].wind_speed + " MPH")
          dayThreeHumidity.append(data2.daily[3].humidity + "%")
          // Day Four
          var dayFourDate = new Date((data2.daily[4].dt*1000)).toLocaleString("en-US", options)
          dayFour.append(dayFourDate);
          dayFourIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[4].weather[0].icon + "@2x.png"
          dayFourTemp.append(data2.daily[4].temp.day + "°F")
          dayFourWind.append(data2.daily[4].wind_speed + " MPH")
          dayFourHumidity.append(data2.daily[4].humidity + "%")
          // Day Five
          var dayFiveDate = new Date((data2.daily[5].dt*1000)).toLocaleString("en-US", options)
          dayFive.append(dayFiveDate);
          dayFiveIcon.src = "https://openweathermap.org/img/wn/" + data2.daily[5].weather[0].icon + "@2x.png"
          dayFiveTemp.append(data2.daily[5].temp.day + "°F")
          dayFiveWind.append(data2.daily[5].wind_speed + " MPH")
          dayFiveHumidity.append(data2.daily[5].humidity + "%")

          if (data2.current.uvi <= 6) {
            uviColor.style.backgroundColor = "lightblue";
          } else if (data2.current.uvi > 6 && data2.current.uvi <= 7) {
            uviColor.style.backgroundColor = "yellow";
          } else if (data2.current.uvi > 7 && data2.current.uvi <= 8) {
            uviColor.style.backgroundColor = "orange";
          } else {
            uviColor.style.backgroundColor = "red";
          }    
        });
      });  
};

// Search bar enter listener
enterListen.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    userButton.click();
  }
});