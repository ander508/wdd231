const menu = document.querySelector('.menu');
const ul = document.querySelector('nav');

menu.addEventListener('click', () =>{
    ul.classList.toggle('open');
    menu.classList.toggle('open');
})