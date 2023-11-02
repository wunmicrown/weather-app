document.getElementById("weatherForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const info = document.getElementById("info");
  const show = document.getElementById("show");

  const fetchInfo = () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let date = month + "/" + day + "/" + year;
    let apiKey = "ecc186d41c49de2167179a38ba4c12c7";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${info.value}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        let mainTemp = result.main.temp;
        show.innerHTML = `
          <div class="otherItem">
            <h1 class="deg">${mainTemp.toFixed(0)}<span>&#8451</span></h1>
            <h3>${result.name},${result.sys.country}</h3>
            <small>${result.weather[0].description}
              <img src="https://openweathermap.org/img/wn/${result.weather[0].icon}.png" alt="image">
            </small>
          </div>
        `
        document.getElementById("name").innerHTML = result.name;
        document.getElementById("description").innerHTML = result.weather[0].description;
        document.getElementById("humidity").innerHTML = result.main.humidity + "%";
        document.getElementById("wind").innerHTML = result.wind.speed + "m/s";
        document.getElementById("temp").innerHTML = result.main.
          temp
          + "°C";
        ;
        document.getElementById("temp-min").innerHTML = result.main.
          temp_min

          + "°C";
        ;
        document.getElementById("temp-max").innerHTML = result.main.
          temp_max
          + "°C";
        document.getElementById("feels_like").innerHTML = result.main.
          feels_like
          + "°C";
        document.getElementById("pressure").innerHTML = result.main.pressure
        + "hPa";

        info.value = '';
      })
      .catch((err) => {
        console.log(err);
      });
  };
  fetchInfo();
});
document.getElementById("info").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.getElementById("weatherForm").dispatchEvent(new Event("submit"));
  }
});
