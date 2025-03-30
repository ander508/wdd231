const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption'); // Fixed selector

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.98&lon=8.34&units=metric&appid=7688ab275a3f26de661a3491c41fec9b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Debugging: Log entire response
            console.log(data.main.temp); // Log temperature
            
            displayResults(data); // Pass fetched data to displayResults()
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching:', error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // Fixed .png extension
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figCaption.textContent = `${desc}`;
}

// Call the function to fetch and display weather
apiFetch();
