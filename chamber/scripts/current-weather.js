const currentWeather = document.querySelector('.current-weather');
const currentDescription= document.querySelector('.current-description');

localStorage.setItem("weatherApiKey", "7688ab275a3f26de661a3491c41fec9b");
const myApi = localStorage.getItem("weatherApiKey");
const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=4.98&lon=8.34&units=metric&appid=${myApi}`


async function fetchApi() {
    
    const response = await fetch(myUrl);
    try {
        if (!response.ok){
            console.log('Incorrect Url')
        }
        const data = await response.json();
        displayResults(data)
        console.log(data)
        
    }
    catch (error){
        console.error("Error", error);
    }
    
    
}
function displayResults(data){
    currentWeather.innerHTML = `<span>Current Temperature:</span> ${data.main.temp}&deg;C`
    currentDescription.innerHTML = `<span>Current Description:</span> ${data.weather[0].description}`
    
}


fetchApi()