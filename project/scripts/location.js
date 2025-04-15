

document.addEventListener("DOMContentLoaded", async () => {
    
  
  async function fetchJsonData(){
    try {
        const response = await fetch('../project/data/data.json');
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
            // console.log(data)
            weatherinfo(data)
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
  }
  
   async function weatherinfo(data){
    const destination = document.querySelector('.destination') 
       
           
    for (const item of data) {
        localStorage.setItem("weatherApiKey", "7688ab275a3f26de661a3491c41fec9b");
        const apiId = localStorage.getItem("weatherApiKey");
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${item.latitude}&lon=${item.longitude}&units=metric&appid=${apiId}`;
        
        try {
            const response = await fetch(url);
            if (response.ok){
                const data = await response.json()
                // console.log(data)
                
                const det = data.dt
                // console.log(det)

                
                const date = new Date(det *1000); 

                
                
                const formattedDate = date.toLocaleString()
                

                // console.log(formattedDate);

                destination.innerHTML += `
                <div class="card">
                    <div class="card-side-left">
                            <p class="name"><strong>${item.name}</strong></p>
                            <img src="${item.image}" width="200" height="150" alt="${data.weather[0].description}">
                            <p class="city">${item.city}, ${data.sys.country}</p>
                            <button class="more-info">More Info</button>
                    </div>
                  
                    <div class="weather-section">
                        <img class="destination-img" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png", alt="${data.weather[0].description}" loading="lazy" >
                        <div>
                        <p class="temp"><span>Temperature:</span> ${data.main.temp_max}°C</p>
                        <p><span>Weather:</span> ${data.weather[0].description}</p>
                        <p class="desc"> <span>Visit Period:</span> ${item.period}</p>
                        <p class="desc"> <span>Location Date:</span> ${formattedDate}</p>
                        </div>
                    </div>
                    
                </div>
              `;
            }
        }
        catch (error){
            console.error('Message', error)
        }
    }
        
 
  }
    fetchJsonData()
   
    })