let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
function getTime() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("time").innerHTML = days[new Date().getDay()] + ",";
    document.getElementById("time").innerHTML += " " + new Date().getDate();
    document.getElementById("time").innerHTML += " " + months[new Date().getMonth()];
    document.getElementById("time").innerHTML += " " + new Date().getFullYear();
}
//Banner Code. This way you can set whatever value you want in the JS.
window.addEventListener('load', (event) => {
    if (new Date().getDay() == 5)
    {
        document.getElementById("banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
    else
        document.getElementById("banner").style.display = "none";
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}

//Set days in 5-day forecast
let dayInForecast = document.getElementById("forecastDays").children;
for (i = 0; i < 5; i++) {
    dayInForecast[i].textContent = days[new Date().getDay() + i];
    console.log(dayInForecast[i]);
}

//Current Forecast (Weather API)
const apiURLCurrent = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5365d734eac5ba605c1bf24c08670adf&units=imperial";

fetch(apiURLCurrent)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp + " \xB0F";
    document.getElementById('max-temp').textContent = jsObject.main.temp_max + " \xB0F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(1) + " MPH";

    //Wind Chill Code
    let temp = parseFloat(jsObject.main.temp);
    let speed = parseFloat(jsObject.wind.speed);
    let chill = 35.74 + 0.6215 * temp - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * temp * (Math.pow(speed, 0.16));
    document.getElementById("chill").textContent = chill.toFixed(1) + " \xB0F";
});

//5 Day Forecast (Weather API)
const apiURLFiveDay =  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5365d734eac5ba605c1bf24c08670adf&units=imperial";

fetch(apiURLFiveDay)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let forecastList = document.getElementById("forecast").children;
    let day = 0;
    for(i = 0; i < jsObject.list.length; i++) {
        if(jsObject.list[i].dt_txt.includes("18:00:00") == true) {
            //Testing importing and reading
            //console.log(jsObject.list[i].main.temp);
            //console.log('https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
            //console.log(jsObject.list[i].weather[0].description);
            //console.log(forecastList);
            let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            let desc = jsObject.list[i].weather[0].description;
            let img = document.createElement("img");
            forecastList[day].textContent = jsObject.list[i].main.temp.toFixed(1) + "  \xB0F";
            forecastList[day].appendChild(img);
            img.setAttribute('src', imagesrc);
            img.setAttribute('alt', desc); 
            day++;
        }
    }
});
