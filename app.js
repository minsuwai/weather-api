//999317e8f1bc6030635987819d614a59

const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();
date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("searchBarInput").value;

    const weatherDataFetch = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=999317e8f1bc6030635987819d614a59&units=metric`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" />`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;

    tempMax.innerHTML = `${Math.round(weatherData.main.temp_max)}°C`;
    tempMin.innerHTML = `${Math.round(weatherData.main.temp_min)}°C`;
  } catch (error) {
    console.log(error);
  }
};
