function getWeather(){
    const apikey = 'd3b3d0ab8fbbd201eec384f6528164cc'
    const city = document.getElementById('city').value;

    if(!city) {
        alert('Please enter a city name');
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
}