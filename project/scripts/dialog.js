document.addEventListener('DOMContentLoaded', async () => {
    const url = "../project/data/data.json";
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
  
      const destinationSection = document.querySelector('.destination');
      const dialog = document.querySelector('.dialog');
  
      destinationSection.addEventListener('click', (e) => {
        if (e.target.classList.contains('more-info')) {
          const card = e.target.closest('.card');
          const name = card.querySelector('.name strong').textContent;
  
          const item = data.find(obj => obj.name === name);
          if (!item) return;
  
          dialog.innerHTML = `
            <button class="closeModal">X</button>
            <h2>${item.name}</h2>
            <p><strong>City:</strong> ${item.city}</p>
            <p><strong>Visit Period:</strong> ${item.period}</p>
            <p><strong>Latitude:</strong> ${item.latitude}</p>
            <p><strong>Longitude:</strong> ${item.longitude}</p>
            <img src="${item.image}" alt="${item.name}" width="300">
          `;
          dialog.showModal();
  
          dialog.querySelector('.closeModal').addEventListener('click', () => {
            dialog.close();
          });
        }
      });
  
    } catch (error) {
      console.error('Error loading dialog data:', error);
    }
  });
  