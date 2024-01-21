var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var apiKey = "6b5067ae6d9f1c0419414dd73a0fd899";
var searchbox = document.querySelector(".search input")
var searchbtn = document.querySelector(".search button")
var weathericon = document.querySelector(".weathericon")


async function checkWeather(city) {
    var response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
 console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h ";
    if (data.weather[0].main === "sun") {
        weathericon.src = "storm_1146860.png cloudy_1163657.png sun_869869.png"
    }
    else if (data.weather[0].main === "cloudy") {
        weathericon.src = "cloudy_1163657.png"
    }
    else if (data.weather[0].main === "thunderstorm") {
        weathericon.src = "storm_1146860.png"
    }

    
}
searchbtn.addEventListener("click", function () {
    checkWeather(searchbox.value);
})



