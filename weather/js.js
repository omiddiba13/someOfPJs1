const apiKey = "834dcc582ed46dd163e94cb17247810f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
var weatherIcon = document.getElementById("weatherIcon");

async function ckeckWeather(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(+data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  console.log(data);
  let weatherMain = data.weather[0].main;
  console.log(weatherMain);
  if (weatherMain == "Clouds") {
    weatherIcon.src = "./images/clouds.png";
  } else if (weatherMain == "Clear") {
    weatherIcon.src = "./images/clear.png";
  } else if (weatherMain == "Drizzle") {
    weatherIcon.src = "./images/drizzle.png";
  } else if (weatherMain == "Rain") {
    weatherIcon.src = "./images/rain.png";
  } else if (weatherMain == "Snow") {
    weatherIcon.src = "./images/snow.png";
  } else if (weatherMain == "Mist") {
    weatherIcon.src = "./images/mist.png";
  }
}

const searchBox = document.getElementById("searchCity");
const searchBoxBtn = document.getElementById("btnId");
////
searchBoxBtn.addEventListener("click", () => {
  ckeckWeather(searchBox.value);
});
searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnId").click();
  }
});
