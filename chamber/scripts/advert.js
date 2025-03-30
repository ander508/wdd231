document.addEventListener("DOMContentLoaded", () => {
    const spotlightContainer = document.querySelector(".spotlight-container"); 

    async function loadSpotlightMembers() {
        try {
            const response = await fetch("../chamber/data/members.json"); 
            if (!response.ok) throw new Error("Failed to load members");

            const data = await response.json();
            const members = data.members;

            
            const spotlightMembers = members.filter(member => member.membership_level >= 2);

            
            const selectedSpotlights = getRandomMembers(spotlightMembers, 2, 3); 

           
            displaySpotlight(selectedSpotlights);
        } catch (error) {
            console.error("Error fetching spotlight members:", error);
        }
    }

    function getRandomMembers(array, min, max) {
        const shuffled = array.sort(() => 0.5 - Math.random()); 
        const count = Math.floor(Math.random() * (max - min + 1)) + min; 
        return shuffled.slice(0, count);
    }

    function displaySpotlight(members) {
        spotlightContainer.innerHTML = ""; 

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <img src="${member.imageurl}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.line}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Address:</strong> ${member.address}</p>
                <a href="${member.url}" target="_blank">Visit Website</a>
                <p class="membership-level">${member.membership_level === 3 ? "🌟 Gold Member" : "🥈 Silver Member"}</p>
            `;

            spotlightContainer.appendChild(card);
        });
    }

    loadSpotlightMembers(); 
});
