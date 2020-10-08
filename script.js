/*document.getElementById("weatherSubmit").addEventListener("click", (event) => {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(createFiveDayForcastTree(document.getElementById("weatherInput").value));
    
});*/
function updateCurrentWeatherDiv(currentWeather){
    let result = '<ul>';
    for(item in currentWeather.main){
        result += `<li>${item}:  ${currentWeather.main[item]}</li>`;
    }
    for(item in currentWeather.weather[0]){
        result += `<li>${item}:  ${currentWeather.weather[0][item]}</li>`;
    }
    result += `</ul>`;
    document.getElementById("currentWeather").innerHTML = result;

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
    let result = `<ul>`;
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
    document.getElementById("fiveDayForcast").innerHTML = result;
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



