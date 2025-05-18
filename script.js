const apiKey = "561f7d01fe657ce0030b02f3b2851321";

const searchBox = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".search-button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.floor(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Images/rain.svg"
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "Images/drizzle.svg"
    } else if ( data.weather[0].main == "Clouds") {
        weatherIcon.src = "Images/cloud.svg"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Images/sun.svg"
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Images/mist.svg"
    }
}

checkWeather("Bogura");

searchBtn.addEventListener("click", ()=> {
    const city = searchBox.value;
    
    checkWeather(city);
})

