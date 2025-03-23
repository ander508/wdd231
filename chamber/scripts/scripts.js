document.addEventListener("DOMContentLoaded", async () => {
  const member = document.querySelector('.members');
  const button = document.querySelector('.button');

  let membersData = [];

  try {
      const response = await fetch('../chamber/data/members.json');
      if (!response.ok) {
          throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      membersData = data.members;

      renderMembers();

  } catch (error) {
      console.error('Error fetching JSON:', error);
  }

  button.addEventListener('click', () => {
      button.classList.toggle('open');
      member.classList.toggle('open')
      renderMembers(); 
  });

  function renderMembers() {
      member.innerHTML = ""; 
      membersData.forEach(mem => {
          if (button.classList.contains('open')) {
              member.innerHTML += `
              <div class="list">
                  <h2>${mem.name}</h2>
                  <p>${mem.address}</p>
                  <div>${mem.phone}</div>
                  <div>${mem.url}</div>
              </div>`;
          } else {
              member.innerHTML += `
              <div class="card">
                  <section class="company-name">
                      <h2>Company Name: ${mem.name}</h2>
                      <p>${mem.line}</p>
                  </section>
                  <section class="company-img">
                      <img src="${mem.imageurl}" alt="${mem.name}" loading="lazy" width="100" height="100">
                      <div class="company-contact">
                          <div>Email: ${mem.email}</div>
                          <div>Phone: ${mem.phone}</div>
                          <div>Url: ${mem.url}</div>
                      </div>
                  </section>
              </div>`;
          }
      });
  }
});
