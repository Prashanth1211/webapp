const api = {
  key: "b6fae34e9a98c917999a7c03172c208f",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  console.log( weather_el.innerText);
  switch(weather_el.innerText){
    case "Thunderstorm":
      document.body.style.backgroundImage = "url('img/thunderstrom')";
      break;
    case "Rain":
      document.body.style.backgroundImage = "url('img/rain.jpg')";
      break;
    case "Sunny":
      document.body.style.backgroundImage = "url('img/Sunny.jpg')";
      break;
    case "Drizzle":
      document.body.style.backgroundImage = "url('img/Drizzle.jpg')";
      break;
    case "Snow":
      document.body.style.backgroundImage = "url('img/snow.jpg')";
      break;
    case "Mist":
      document.body.style.backgroundImage = "url('img/bg.jpg')";
      break;
    case "Smoke":
      document.body.style.backgroundImage = "url('img/smoke.jpg')";
      break;
    case "Haze":
      document.body.style.backgroundImage = "url('img/hazeee.jpg')";
      break;	
    case "Dust":
      document.body.style.backgroundImage = "url('img/dusty.jpg')";
      break;	
    case "Fog":
      document.body.style.backgroundImage = "url('img/fog.jpg')";
      break;	
    case "Sand":
      document.body.style.backgroundImage = "url('img/dusty.jpg')";
      break;	
    case "Ash":
      document.body.style.backgroundImage = "url('img/ash.jpg')";
      break;	
    case "Squall":
      document.body.style.backgroundImage = "url('img/squali.jpg')";
      break;	
    case "Tornado":
      document.body.style.backgroundImage = "url('img/tornado.jpg')";
      break;
    case "Clear":
      document.body.style.backgroundImage = "url('img/clear.jpg')";
      break;
    case "Clouds":
      document.body.style.backgroundImage = "url('img/cloudy.jpg')";
      break;
  }

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

function changeImage(){
  let weather_el = document.querySelector('.current .weather');
  if (weather_el.innerText=="Clear"){
    document.body.style.backgroundImage = "url('D:\girlscript\sunny.jpg')";
  }
}