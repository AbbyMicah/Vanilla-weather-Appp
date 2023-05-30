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
    iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png${response.condition.icon}`);
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
  let apiKey = "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let city="paris";
  let country="France";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city},${country}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
let form = document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);
