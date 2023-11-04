document.addEventListener("DOMContentLoaded", function () {
  // Function to fetch weather information
  const fetchWeather = (city) => {
    let apiKey = "ecc186d41c49de2167179a38ba4c12c7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        // Display the weather information for the city
        updateWeatherInfo(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to update the weather information on the page
  const updateWeatherInfo = (result) => {
    const show = document.getElementById("show");
    let date = new Date();
    const mainTemp = result.main.temp.toFixed(0);

    show.innerHTML = `
          <div class="otherItem">
              <h1 class="deg">${mainTemp}<span>&#8451</span></h1>
              <h3>${result.name}, ${result.sys.country}</h3>
              <small>${result.weather[0].description}
                  <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="image">
              </small>
              <h2>${date.toLocaleDateString()}</h2>
              <h2>${date.toLocaleTimeString()}</h2>
          </div>
      `;
    nam.innerHTML = `${result.name} , ${result.sys.country}`;
    description.innerHTML = `${result.weather[0].description}`;
    humidity.innerHTML =`${ result.main.humidity} %`;
    wind.innerHTML = `${result.wind.speed} m/s`;
    temp.innerHTML = `${result.main.temp}  °C`;
    temp_min.innerHTML = `${result.main.temp_min}  °C`;
    temp_max.innerHTML = `${result.main.temp_max }°C`;
    feels_like.innerHTML = `${result.main.feels_like }°Cd`;
    pressure.innerHTML =`${ result.main.pressure } hPa`;
  };

  // to set Lagos as my default city
  fetchWeather("Lagos");

  // i add event listener for weatherform submission
  document.getElementById("weatherForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const info = document.getElementById("info");
    fetchWeather(info.value);
    info.value = '';
  });

  // i add event listener for my enter key press on the input 
  document.getElementById("info").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      document.getElementById("weatherForm").dispatchEvent(new Event("submit"));
    }
  });
});
