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
                <a href="#Contact" class="c-wh b-r | services_item services_item-${servicesList.item}" id="i" data="${servicesList.item}">
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

// RENDER CREDITS
const creditsDiv = document.querySelector('.credits_div');
import creditsList from './js/dataCredits.js';

function renderCreditsHTML() {

    const html = creditsList.map((creditsList) => {
        return  `
                <div class="b-r | credits_item">
                  <img class="b-r | credits_item-img" src="./assets/images/credits_${creditsList.item}.webp" alt="${creditsList.name} album cover">
                  <div class="credits_item_info">
                    <h4><i>${creditsList.band}</i></h4>
                    <h3>${creditsList.name}</h3>
                    <p class="item_info-p">${creditsList.role}</p>
                  </div>
                </div>
                `
    }).join('');
    creditsDiv.innerHTML = html;
};

renderCreditsHTML();

// SELECT INPUT
const select = document.querySelector('#service_type');
select.addEventListener('change', switchContactInfo);
let contactInfo = `
                  <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                  <li>Both wet and guitar signals, or if you would rather me craft the tone, just the DI files will be needed.</li>
                  <li>Drum and midi files if applicable. If you have any other VSTi elements such as synths or orchestra, please print them and send the audio file.</li>
                  <li>For the best results, please separate all elements e.g. if you have two synths, send them as two separate tracks.</li>
                  `;

function switchContactInfo() {
    switch (select.value) {
        case 'mixing_&_mastering':
            contactInfo = `
                        <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                        <li>Both wet and guitar signals, or if you would rather me craft the tone, just the DI files will be needed.</li>
                        <li>Drum and midi files if applicable. If you have any other VSTi elements such as synths or orchestra, please print them and send the audio file.</li>
                        <li>For the best results, please separate all elements e.g. if you have two synths, send them as two separate tracks.</li>
                        `;
            renderContactInfo('01', 'Mixing & Mastering', contactInfo);
            break;
        case 'post_production':
            contactInfo = `
                        <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                        <li>Note any specific parts you want to really pop, and explain what you would like to be added for the best result.</li>
                        <li>Note whether you want synths, choir, orchestra, or just simple impacts. If you want to just go crazy with it, let me know and we can work it out.</li>
                        `;
            renderContactInfo('02', 'Post Production', contactInfo);
            break;
        case 'guidance':
            contactInfo = `
                        <li>Note anything you are looking to get out of my guidance so I can tailor the experience to your need.</li>
                        <li>Provide any song files needed for me to review.</li>
                        `;
            renderContactInfo('03', 'Guidance', contactInfo);
            break;
        case 'collab':
            contactInfo = `
                        <li>Provide any song files needed for me to review.</li>
                        <li>Note what you would like me to focus on for our collab.</li>
                        `;
            renderContactInfo('04', 'Collab', contactInfo);
            break;
    }
};

// CHANGE INFO FOR SELECTED OPTION
const contactInfoHTML = document.querySelector('.contact-info');

function renderContactInfo(item, serviceType, contactInfo) {
    contactInfoHTML.innerHTML = `
                            <div class="c-wh b-r | services_item services_item-${item}">
                              <div class="b-left">
                                <h4><i>Requirements to submit:</i><h4>
                                <h3>${serviceType}</h3>
                                <p>For those wanting to bring an idea to life to the final touches to your mix.</p>
                                <ul class="ul-normal">${contactInfo}</ul>
                              </div>
                            </div>
                            `;
};

renderContactInfo('01', 'Mixing & Mastering', contactInfo);

// CHANGE SELECT BY CARD
const serviceItem = document.querySelectorAll('#i');

serviceItem.forEach((item)=> item.addEventListener('click', function() {
    switch(item.getAttribute('data')) {
        case '01': select.value = 'mixing_&_mastering';
        break;
        case '02': select.value = 'post_production';
        break;
        case '03': select.value = 'guidance';
        break;
        case '04': select.value = 'collab';
        break;
    }

    switchContactInfo();
}));

// FORM
const success = document.querySelector('.success');
const overlay = document.querySelector('.overlay');

if(window.location.search.substring(1) || window.location.hash.split('?')[1]) {
    overlay.classList.remove('remove');
    success.classList.remove('remove');
    success.innerHTML = `
                        <button class="success_cancel">&#10006;</button>
                        <div class="success_icon"></div>
                        <h3>Thank you!</h3>
                        <p>Your submission has been sent. Please allow up to two days for me to review everything needed and get back to you.</p>
                        <button class="success_btn">Continue</button>
                        `;

    const successCancel = document.querySelector('.success_cancel');
    const successBtn = document.querySelector('.success_btn');
    successCancel.addEventListener('click', redirectBack);
    successBtn.addEventListener('click', redirectBack);
    overlay.addEventListener('click', redirectBack);

    function redirectBack() {
        if (window.location.search.substring(1)) {
            history.replaceState(null, null, window.location.pathname + window.location.search.split('?')[0]);
        } else if (window.location.hash.split('?')[1]) {
            history.replaceState(null, null, window.location.pathname + window.location.hash.split('?')[0]);
        }
        window.location.reload();
    };
};