document.addEventListener("DOMContentLoaded", async() =>{
    
     const url = "../chamber/data/data.json";
    async function fetchData(url){
        
        const response = await fetch(url);
        if (response.ok) {
            const neededData = await response.json()
            console.log(neededData)
            buildCard(neededData)
        }
        
    }
    fetchData(url)
    
    function buildCard(neededData){
        const card = document.querySelector('.cad')
        // card.classList.add('.serial')
        
        
        neededData.forEach(function(item) {
            console.log(item)
            

            
            
            card.innerHTML +=`<div class="${item.serial}">
            <h2 class="heading">${item.name}</h2>
            <figure>
            <img class="img" src="${item.image}" alt="${item.name}" width="300" height="200" loading="lazy">
            </figure>
            <div class="layout">
                <p class="paragraph">${item.description}</p>
                <address class="figCaption">${item.address}</address>
            </div>
            <button class="button">Learn More</button>
           </div>`
        })
    }
    
})