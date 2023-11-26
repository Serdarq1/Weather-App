const apiKey = "91c9de07c81bb9435d9463f2c98a72dd"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-icon")

async function checkWeather(city) { 
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await res.json()
    console.log(data.weather)
    

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main === "Clear"){
        weatherImg.setAttribute("src", "./images-2/clear.png")
    }else if(data.weather[0].main === "Clouds"){
        weatherImg.setAttribute("src", "./images-2/clouds.png")
    }else if(data.weather[0].main === "Drizzle"){
        weatherImg.setAttribute("src", "./images-2/drizzle.png")
    }else if(data.weather[0].main === "Mist"){
        weatherImg.setAttribute("src", "./images-2/mist.png")
    }else if(data.weather[0].main === "Rain"){
        weatherImg.setAttribute("src", "./images-2/rain.png")
    }else if(data.weather[0].main === "Snow"){
        weatherImg.setAttribute("src", "./images-2/clouds.png")
    }


    searchBtn.addEventListener("click", function(){
        checkWeather(searchBox.value)
    })
}
 checkWeather("New York")