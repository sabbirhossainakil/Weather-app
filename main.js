// const apiKey = "YOUR_API_KEY";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dhaka";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   let data = await response.json();
//   console.log(data);
// }
// checkWeather();

const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherIcon = document.querySelector(".weather-icon");
const apiKey = "4f1e2f03940b14238c2dabdb00ce92d0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("weather").style.display = "none";
  } else {
    let data = await response.json();
    // console.log(data);
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temperature").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("wind-speed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == " Clouds") {
      weatherIcon.src = "image/cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "image/sun.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "image/haze.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "image/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "image/snow.png";
    }
    document.querySelector(".weather").style.display = "flex";
    document.getElementById("error-message").style.display = "none";

  }
}

searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  checkWeather(city);
});
// checkWeather();
