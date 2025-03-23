
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
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