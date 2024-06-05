const apiKey="2f031046ddf2cfaeba5cd465ff9a16d0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

const checkWeather = async()=>{
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".wind").innerHTML= data.wind.speed + "Km/hr";
}

checkWeather();