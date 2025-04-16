import { places } from "./destination-data.js";
console.log(places)

const destinationsContainer = document.querySelector('#destinations-container');
const regionFilter = document.querySelector('#region-filter');
const searchInput = document.querySelector('#search-input');



function displayDestinations(data) {
  destinationsContainer.innerHTML = '';
  data.forEach(dest => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" width="200" height="150">
      <h3>${dest.name}</h3>
      <p>${dest.city}, ${dest.state}</p>
      <p><strong>Best Time:</strong> ${dest.period}</p>
      <button class="more-info-btn" data-name="${dest.name}">More Info</button>
    `;
    destinationsContainer.appendChild(card);
  });
  setupMoreInfoButtons();
}

displayDestinations(places)

function applyFilters() {
  const selectedZone = regionFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  let filtered = places;

  if (selectedZone !== 'All') {
    filtered = filtered.filter(d => d.zone === selectedZone);
  }
  

  if (searchTerm) {
    filtered = filtered.filter(d => d.name.toLowerCase().includes(searchTerm));
  }

  displayDestinations(filtered);
}

regionFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);

function setupMoreInfoButtons() {
  const buttons = document.querySelectorAll('.more-info-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const destination = places.find(d => d.name === name);
      if (destination) {
        showDetails(destination);
        localStorage.setItem('lastViewed', JSON.stringify(destination));
      }
    });
  });
}

function showDetails(dest) {
  const modal = document.querySelector('#destination-dialog');
  modal.innerHTML = `
    <h2>${dest.name}</h2>
    <img src="${dest.image}" alt="${dest.name}">
    <p><strong>Address:</strong> ${dest.address}</p>
    <p><strong>Region:</strong> ${dest.zone}</p>
    <p><strong>Best Time to Visit:</strong> ${dest.period}</p>
    <button id="close-dialog">Close</button>
  `;
  modal.showModal();

  document.querySelector('#close-dialog').addEventListener('click', () => {
    modal.close();
  });
}

