const hamburger = document.querySelector('.hamburger');
const list = document.querySelector('.list')
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('open');
    list.classList.toggle('open');
    
})


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const filePath = await fetch('../chamber/data/members.json');
        
        if (!filePath.ok) {
            throw new Error("Incorrect file path");
        }

        const listView = document.querySelector('.list-view');
        const member = document.querySelector('.members');

        const data = await filePath.json();
        const memberData = data.members;

        listView.addEventListener('click', () => {
            member.innerHTML = ""; 
            member.classList.add('open');
            memberData.forEach((mem) => {
                member.innerHTML += `
                    <div class="list">
                        <h2>${mem.name}</h2>
                        <p>${mem.address}</p>
                        <div>${mem.phone}</div>
                        <div><a href="${mem.url}">${mem.url}</a></div>
                    </div>
                `;
            });
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
});



document.addEventListener('DOMContentLoaded', async () => {
    try {
        const filePath = await fetch('../chamber/data/members.json');
        
        if (!filePath.ok) {
            throw new Error("Incorrect file path");
        }

        const gridView = document.querySelector('.grid-view');
        const member = document.querySelector('.members');

        const data = await filePath.json();
        const memberData = data.members;

        gridView.addEventListener('click', () => {
            member.innerHTML = ""; 
            // member.classList.add('open');
            memberData.forEach((mem) => {
                member.classList.add('view-grid')
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
            });
        });
    } catch (error) {
        console.error('Error fetching JSON:', error);
    }
});

