const buttonElement = document.querySelector('header button')
const nav = document.querySelector('nav ul')

buttonElement.addEventListener('click', function(){
    if (buttonElement.innerHTML === '☰'){
        buttonElement.innerHTML = 'X'
        nav.classList.remove('hide')
        nav.classList.add('open')
    }
    else{
        buttonElement.innerHTML = '☰'
        nav.classList.remove('open')
        nav.classList.add('hide')
    
    }
    // buttonElement.classList.add('color')
})

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const heading = document.querySelector('main h1');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            navLinks.forEach(link => link.classList.remove('active'));

            link.classList.add('active');

            if (heading) {
                heading.textContent = link.textContent;
            }

            if (!link.getAttribute("href") || link.getAttribute("href") === "#") {
                event.preventDefault(); 
            }
        });
    });
});
