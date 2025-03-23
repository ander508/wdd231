document.addEventListener('DOMContentLoaded', async () => {
    const membersContainer = document.getElementById('members');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    try {
        const response = await fetch('../data/members.json');
        const members = await response.json();

        displayMembers(members, 'grid');

        gridViewBtn.addEventListener('click', () => displayMembers(members, 'grid'));
        listViewBtn.addEventListener('click', () => displayMembers(members, 'list'));
    } catch (error) {
        console.error('Error fetching members:', error);
    }

    function displayMembers(members, viewType) {
        membersContainer.innerHTML = '';

        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.className = viewType === 'grid' ? 'member-card' : 'member-list-item';
            memberDiv.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }
});
