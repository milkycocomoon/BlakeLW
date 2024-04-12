// NAVBAR SCROLL COLOR CHANGE
const navbar = document.querySelector('nav');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function() {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// NAVBAR MOBILE
const burgerMenuBtn = document.querySelector('.nav-bar__burger-btn');
const navbarDiv = document.querySelector('.nav-bar');

burgerMenuBtn.addEventListener('click', toggleMenu);
navbarDiv.addEventListener('click', toggleMenu);

function toggleMenu() {
    navbarDiv.classList.toggle('nav-bar__active');
};