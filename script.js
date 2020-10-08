/*document.getElementById("weatherSubmit").addEventListener("click", (event) => {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(createFiveDayForcastTree(document.getElementById("weatherInput").value));
    
});*/
function updateCurrentWeatherDiv(currentWeather){
    /*console.log(currentWeather);   //Old Format
    let result = '<ul>';
    for(item in currentWeather.main){
        result += `<li>${item}:  ${currentWeather.main[item]}</li>`;
    }
    for(item in currentWeather.weather[0]){
        result += `<li>${item}:  ${currentWeather.weather[0][item]}</li>`;
    }
    result += `<li>${moment(currentWeather.dt).format("MMMM Do YYYY")}</li>`;
    for(item in currentWeather.sys){
        result += `<li>${item}:  ${currentWeather.sys[item]}</li>`;
    }
    result += `<li>${currentWeather.wind.speed}</li>`;
    result += `<li>${currentWeather.wind.deg}</li>`;
    result += `<li>${currentWeather.visibility}</li>`;
    result += `</ul>`;
    document.getElementById("currentWeather").innerHTML = result;*/
    // new format
    document.getElementById("currentWeatherDate").innerHTML = moment(currentWeather.dt);
    document.getElementById('currentTempBox').innerHTML = currentWeather.main.temp;
    document.getElementById('currentFeelsLikeBox').innerHTML = currentWeather.main.feels_like;
    document.getElementById('currentHighBox').innerHTML = currentWeather.main.temp_max;
    document.getElementById('currentLowBox').innerHTML = currentWeather.main.temp_min;
    //console.log(currentWeather.weather[0].icon); //To check if icon works
    document.getElementById('currentIconBox').innerHTML = `<img src="http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png">`;
    document.getElementById('currentDescriptionBox').innerHTML = currentWeather.weather[0].description;
    document.getElementById('currentHumidityBox').innerHTML = currentWeather.main.humidity;
    document.getElementById('currentVisibilityBox').innerHTML = currentWeather.visibility;
    document.getElementById('currentSunriseSunsetBox').innerHTML = `Sunrise: ${moment(currentWeather.sys.sunrise)}---Sunset: ${moment(currentWeather.sys.sunset)}`;
}
function getCurrentWeather(place){
    let currentWeather;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + ",US&units=imperial" + "&APPID=6ac1005487fd66a76c6b028559aeaf9c";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            currentWeather = json;
            console.log(currentWeather);
            updateCurrentWeatherDiv(currentWeather);
        });
    
}
function updateFiveDayForcastDiv(fiveDayForcast){
    //newFormat
    for(day of fiveDayForcast){
        console.log(day);
        let div = document.createElement("div");
        div.className="five-day-forcast-day";
        let title = document.createElement("h3");
        title.innerHTML = day.date;
        div.appendChild(title);
        let list = document.createElement("ul");
        for(time of day.times){
            let listItem = document.createElement('li');
            console.log(time.dt_txt);
            let txt = document.createTextNode(`${moment(time.dt_txt).format('h')}:00: ${time.main.temp} F`); //(${time.main.temp_max} F/${time.main.temp_min} F)`);
            listItem.appendChild(txt);
            list.appendChild(listItem);
        }
        div.appendChild(list);
        /* //doesn't work
        let list = document.createElement("ul");
        let descriptionLi = document.createElement("li");
        let descriptionTxt = document.createTextNode(day.times[0].weather[0].description);
        let icon = document.createElement("img");
        icon.src = `http://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        descriptionLi.appendChild(descriptionTxt);
        descriptionLi.appendChild(icon);

    
        list.appendChild(descriptionLi);
        div.append(list);*/
        document.getElementById("fiveDayForcast").appendChild(div);
    }
    
    //old format
    /*let result = `<ul>`;
    console.log(fiveDayForcast.length);
    for(item in fiveDayForcast){
        result += `<li class="five-day-forcast-day"><div>`;
        for(value in fiveDayForcast[item]){
            result += ` ${value} `;
        }
        result+= `</div></li>`;
    }
    result += `</ul>`;
    console.log(result);
    document.getElementById("fiveDayForcast").innerHTML = result;*/
}
function getFiveDayForcast(place) {
    function Day(date) {
        this.date = date;
        this.times = [];
    };
    
    function Time(list) {
        this.info = list;
    }
    let fiveDayForcast = [];
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + place + ", US&units=imperial" + "&APPID=6ac1005487fd66a76c6b028559aeaf9c";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            for (let i = 0; i < json.list.length; ++i) {
                let currentDay = moment(json.list[i].dt_txt).format('MMMM Do');
                let inArray = false;
                let dayIndex = 0;
                for (j in fiveDayForcast) {
                    if (fiveDayForcast[j].date === currentDay) {
                        inArray = true;
                        dayIndex = j;
                    }
                }
                if (!inArray) {
                    fiveDayForcast.push(new Day(currentDay));
                    dayIndex = fiveDayForcast.length - 1;
                }
                fiveDayForcast[dayIndex].times.push(json.list[i]);
            }
            updateFiveDayForcastDiv(fiveDayForcast);
        });
}
getCurrentWeather("Provo");
getFiveDayForcast("Provo");



