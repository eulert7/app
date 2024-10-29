// script.js

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});