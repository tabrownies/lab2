document.getElementById("weatherSubmit").addEventListener("submit", (event) => {
    console.log("submited");
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    document.getElementById("currentCity").innerHTML = value;
    getCurrentWeather(value);
    getFiveDayForcast(value);
});
/* //If I have time
document.getElementsByTagName("body")[0].onload = (event) =>{
    console.log('loaded');
    event.preventDefault();
    let xCorord, yCorord;
    navigator.geolocation.getCurrentPosition((position)=> {
        xCorord = position.coords.latitude;
        yCorord = position.coords.longitude;
    });
    
    document.getElementById("currentCity").innerHTML = xCorord;
    getCurrentWeather(xCorord);
    getFiveDayForcast(xCorord);
};*/
function updateCurrentWeatherDiv(currentWeather) {
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
    //console.log(moment())
    document.getElementById("currentWeatherDate").innerHTML = `: ${moment(currentWeather.dt_txt).format('MMMM Do')}`;
    document.getElementById('currentTemp').innerHTML = `: ${currentWeather.main.temp} F`;
    document.getElementById('currentFeelsLike').innerHTML = `: ${currentWeather.main.feels_like} F`;
    document.getElementById('currentHigh').innerHTML = `: ${currentWeather.main.temp_max} F`;
    document.getElementById('currentLow').innerHTML = `: ${currentWeather.main.temp_min} F`;
    //console.log(currentWeather.weather[0].icon); //To check if icon works
    document.getElementById('currentIconBox').innerHTML = `<img src="http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png">`;
    document.getElementById('currentDescription').innerHTML = currentWeather.weather[0].description;
    document.getElementById('currentHumidity').innerHTML = `${currentWeather.main.humidity}%`;
    document.getElementById('currentVisibility').innerHTML = `${currentWeather.visibility} ft`;
    //document.getElementById('currentSunriseSunsetBox').innerHTML = `Sunrise: ${moment(currentWeather.sys.sunrise)}---Sunset: ${moment(currentWeather.sys.sunset)}`;
    document.getElementById("currentSunrise").innerHTML = moment(currentWeather.sys.sunrise).format('h:mm a');
    document.getElementById("currentSunset").innerHTML = moment(currentWeather.sys.sunset).format('h:mm a');
  }

function getCurrentWeather(place) {
    let currentWeather;
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + place + ",US&units=imperial" + "&APPID=6ac1005487fd66a76c6b028559aeaf9c";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            currentWeather = json;
            //console.log(currentWeather);
            updateCurrentWeatherDiv(currentWeather);
        });

}
function resetFiveDayForcastLayout(){
    document.getElementById('fiveDayForcast2').innerHTML = `
            <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
    <div class="five-day-forcast-date">
      <h3>
        Date
      </h3>
      <div class="five-day-info">
        <table>
          <tr>
            <th>
              Time
            </th>
            <th>
              Temp.
            </th>
            <th class="hidden">
              Feels Like
            </th>
            <th class="hidden">
              Description
            </th>
            <th class="hidden">
              High
            </th>
            <th class="hidden">
              Low
            </th>
          </tr>
        </table>
      </div>
    </div>
            
            `;
}
function updateFiveDayForcastDiv(fiveDayForcast) {
    //newFormat
    /*document.getElementById("fiveDayForcast").innerHTML='';
    for(day of fiveDayForcast){
        //console.log(day);
        let div = document.createElement("div");
        div.className="five-day-forcast-day";
        let title = document.createElement("h3");
        title.innerHTML = day.date;
        div.appendChild(title);
        let list = document.createElement("ul");
        for(time of day.times){
            let listItem = document.createElement('li');
            //console.log(time.dt_txt);
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
        div.append(list);
        document.getElementById("fiveDayForcast").appendChild(div);
    }*/
    resetFiveDayForcastLayout();
    for (let i = 0; i < document.getElementsByClassName('five-day-forcast-date').length; ++i) {
        //console.log(info);
        let dateDiv = document.getElementsByClassName('five-day-forcast-date')[i];

        let table = dateDiv.children[1].children[0];
        let tr = document.createElement('tr');
        for (time of fiveDayForcast[i].times) {
            dateDiv.children[0].innerHTML = fiveDayForcast[i].date;
            //console.log(time);
            let tr = document.createElement('tr');

            let td = document.createElement('td');
            td.innerHTML = `${moment(time.dt_txt).format('h')}:00`;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `${time.main.temp} F`;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `${time.main.feels_like} F`;
            td.className = 'hidden';
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `${time.weather[0].description}`;
            td.className = 'hidden';
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `${time.main.temp_max} F`;
            td.className = 'hidden';
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = `${time.main.temp_min} F`;
            td.className = 'hidden';
            tr.appendChild(td);

            table.appendChild(tr);

        }
        /*dateDiv.addEventListener('mouseover', function () {
            parent = dateDiv.parentElement;
            dateDiv.parentElement.innerHTML = '';

            parent.appendChild(dateDiv);
            let tableHeadNode = dateDiv.children[1].children[0].children[0].children[0].children
            console.log(tableHeadNode);
            for (column of tableHeadNode) {
                console.log(column.className = '');
            }
            let rows = dateDiv.children[1].children[0].children;
            //console.log(rows);
            for (let i = 1; i < rows.length; ++i) {
                for (column of rows[i].children) {
                    console.log(column.className = '');
                }
            }
        });
        dateDiv.addEventListener('mouseleave', function () {
            resetFiveDayForcastLayout();
            getFiveDayForcast(document.getElementById('currentCity').innerHTML);
        });*/

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