const button = document.querySelector('.hamburger');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    button.classList.toggle('open');
    list.classList.toggle('open')
    renderMembers(); 
});