function displayTemperature(response){
    console.log(response)  ;
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let description = document.querySelector("#temperature-description");
    temperatureElement.innerHTML = `${temperature}ºC`;
    description.innerHTML = response.data.condition.description;
    document.querySelector("#city").innerHTML = response.data.city;
    document.querySelector("#humidity").innerHTML = response.data.temperature.humidity;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector("#temp").innerHTML = Math.round(response.data.temperature.feels_like);
    
  }
  let apiKey = "0dbe3edd0f2e43o0a1f5a4d8b80t5af4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Bilbao&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);