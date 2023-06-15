function formatDate(){
let date = new Date();
let hours=date.getHours();
        if(hours<10){
            hours = `0${hours}`;
        }
        let minutes=date.getMinutes();
        if(minutes<10){
            minutes = `0${minutes}`;
        }
  let dayIndex=date.getDay();
        let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let day=days[dayIndex];
        return `${day} ${hours}:${minutes}`;
}
function displayForecast(response){
  console.log(response);
  let forecastElement = document.querySelector("#forecast");
  
  let forecastHTML = `<div class="row">`;
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  days.forEach(function (day){
    forecastHTML = forecastHTML +
   `
   <div class="col-2">
    <div class="weather-forecast-date">${day}</div>
      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="42"/>
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">21º</span>  
        <span class="weather-forecast-temperature-min">10º</span>
        </div>
    </div> 
    `;
  });
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates){
  console.log(coordinates);
  let apiKey = "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.lon}&lat=${coordinates.lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}
function displayTemperature(response){
    console.log(response)  ;
        let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    
    temperatureElement.innerHTML = `${temperature}ºC`;
    description.innerHTML = response.data.condition.description;
    document.querySelector("#city").innerHTML = response.data.city;
    document.querySelector("#humidity").innerHTML = response.data.temperature.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#temp").innerHTML = Math.round(response.data.temperature.feels_like);
    dateElement.innerHTML = formatDate(response.time);
    iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
  getForecast(response.data.coordinates);
  }
  
  function search(city){
 
  let apiKey = "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
    let country = "";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city},${country}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);    
  }
  function handleSubmit(event){
    event.preventDefault();
    let searchTextInput = document.querySelector("#search-text-input");
    search(searchTextInput.value);
  }
  function displayFahrenheitTemperature(event){
event.preventDefault();
alert("click link");

  }
 
  let apiKey = "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let city = "Bilbao"
    let country = "";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city},${country}&key=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature); 

  let form = document.querySelector("#search-form");
        form.addEventListener("submit", handleSubmit);

        let fahrenheitLink = document.querySelector("#fahrenheit-link");
        fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

 displayForecast();