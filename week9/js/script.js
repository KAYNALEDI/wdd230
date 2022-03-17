//Last Modified Function
window.addEventListener('load', (event) => {
        document.getElementById("lastModifiedDate").innerText = "Last time modified: " + document.lastModified;
});

//Callable Functions
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hide");
}
function hideAlert() {
    document.getElementById("alert").classList.toggle("hidden");
}

function loadDirectory() {
    fetch("directory.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['business'];
        for (let i = 0; i < directory.length; i++ ) {
            //Creating html elements
            let card = document.createElement('section');
            let div = document.createElement('div');
            let img = document.createElement('img');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let a = document.createElement('a');

            //Filling the elements
            card.setAttribute('class', "card");
            img.setAttribute('src', directory[i].logo);
            img.setAttribute('alt', directory[i].name + " logo");
            h2.textContent = directory[i].name;
            p.textContent = directory[i].phone;
            a.textContent = directory[i].name + " Website";
            a.setAttribute("href", directory[i].link);
            //Appending card elements as children of card
            card.appendChild(img);
            card.appendChild(div);
            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(a);
            //Appending card as child of the generic div
            document.querySelector('main#directory').appendChild(card);
        }
    });
}

function gridView() {
    document.getElementById("directory").classList.add("grid");
}
function listView() {
    document.getElementById("directory").classList.remove("grid");
}

function weather() {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    //Set days in 3-day forecast
    let dayInForecast = document.getElementById("forecastDays").children;
    for (i = 0; i < 3; i++) {
        dayInForecast[i].textContent = days[new Date().getDay() + i];
    }
    //OneCall (Weather API)
    const apiURLOneCall =  "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&appid=5365d734eac5ba605c1bf24c08670adf&units=imperial";

    fetch(apiURLOneCall)
    .then((response) => response.json())
    .then((jsObject) => {
        let forecastList = document.getElementById("forecast").children;
        let day = 0;
        console.log(jsObject);
        document.getElementById("temp").textContent = "Current Tempurature: " + jsObject.current.temp + "  \xB0F";
        document.getElementById("desc").textContent = "Currently: " + jsObject.current.weather[0].description;
        document.getElementById("humidity").textContent = "Humidity: " + jsObject.current.humidity + "%";
        if (typeof(jsObject.alert) != "undefined"){
        document.getElementById("alert").textContent = jsObject.alert.sender_name + ": " + jsObject.alert.event;
        }
        else {
            document.getElementById("alert").textContent = "No current weather alerts. Click to hide."
        }
        for(i = 0; i < 3; i++) {
            let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
            let desc = jsObject.daily[i].weather[0].description;
            let img = document.createElement("img");
            forecastList[day].textContent = jsObject.daily[i].temp.day.toFixed(0) + "\xB0F";
            forecastList[day].appendChild(img);
            img.setAttribute('src', imagesrc);
            img.setAttribute('alt', desc); 
            day++;
        }
    });
}
