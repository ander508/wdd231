const threeDaysForcast = document.querySelector('.threeDaysForcast');
const tempDesc = document.querySelector('.temp-desc');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');

localStorage.setItem("weatherApiKey", "7688ab275a3f26de661a3491c41fec9b");
const apiId = localStorage.getItem("weatherApiKey");
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=4.98&lon=8.34&cnt=40&units=metric&appid=${apiId}`;

async function getWeatherForecast() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Extract daily data
        const dailyData = {};
        data.list.forEach(item => {
            const dayName = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
            if (!dailyData[dayName] || item.dt_txt.includes("12:00:00")) {
                dailyData[dayName] = item;
            }
        });

        const forecast = Object.entries(dailyData).slice(0, 3); // Get first 3 days

        console.log(forecast);
        displayIcon(forecast);
    } catch (error) {
        console.error("Error fetching forecast:", error);
    }
}

function displayIcon(forecast) {
    threeDaysForcast.innerHTML = ""; // Clear previous content

    forecast.forEach(([dayName, data]) => {
        const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const description = data.weather[0].description;
        const temperature = data.main.temp;

        // Create a forecast card
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `
            <h3>${dayName}</h3>
            <img src="${iconSrc}" alt="${description}" loading="lazy">
            <p>Description: ${description}</p>
            <p>Temp: ${temperature}°C</p>
        `;

        threeDaysForcast.appendChild(forecastItem);
    });
}

getWeatherForecast();
