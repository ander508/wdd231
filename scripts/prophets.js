const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // Calls function to display cards
}

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        card.classList.add('card');

        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '250');
        
        const dateOfBirth = document.createElement('h6');
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`
        dateOfBirth.classList.add('margin-bottom')
        
        
        
         const placeOfBirth = document.createElement('h6');
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`
        

        // Append elements
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
        // cards.innerHTML+=
        // `<section class="card">
       
        // <h2>${prophet.name} ${prophet.lastname}</h2>
        // <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy" width="200" height="250">

      
        // </section>
        // `
    });
};

// Fetch the data and display
getProphetData();
