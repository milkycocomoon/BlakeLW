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

// RENDER SERVICES
const servicesDiv = document.querySelector('.services_div');
import servicesList from './js/dataServices.js';

function renderServicesHTML() {

    const html = servicesList.map((servicesList) => {
        return  `
                <a href="${servicesList.link}" class="c-wh b-r | services_item services_item-${servicesList.item}">
                  <div class="b-left">
                    <h3>${servicesList.name}</h3>
                    <p>${servicesList.description}</p>
                  </div>
                </a>
                `
    }).join('');
    servicesDiv.innerHTML = html;
};

renderServicesHTML();