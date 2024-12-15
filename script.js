// NAVBAR MOBILE
const burgerMenuBtn = document.querySelector('.nav-bar-mob');
const navbarDiv = document.querySelector('.nav-bar');

burgerMenuBtn.addEventListener('click', toggleMenu);
navbarDiv.addEventListener('click', toggleMenu);

function toggleMenu() {
    navbarDiv.classList.toggle('nav-bar__active');
};

// NAVBAR SCROLL COLOR CHANGE
const navbar = document.querySelector('.nav-bar');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function() {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// HEADER BG IMAGE CHANGE
const bgImg = [
    'linear-gradient(var(--color-tr), var(--color-grayscale-800)), url(./assets/images/header_bg.webp)',
    'linear-gradient(var(--color-tr), var(--color-grayscale-800)), url(./assets/images/header_bg_01.webp)',
    'linear-gradient(var(--color-tr), var(--color-grayscale-800)), url(./assets/images/header_bg_02.webp)'
];
const darkImg = [1, 2];
let bgImgNum = 0;

function changeBackground() {
    const header = document.querySelector('header');

    const headerBackground = document.createElement('div');
    headerBackground.classList.add('header-background');
    document.querySelector('header').appendChild(headerBackground);

    headerBackground.style.opacity = 0;

    setTimeout(() => {
        headerBackground.style.backgroundImage = bgImg[bgImgNum];

        if (darkImg.includes(bgImgNum)) {
            navbar.classList.add('darkImgBar');
        } else {
            navbar.classList.remove('darkImgBar');
        }

        headerBackground.style.opacity = 1;
        bgImgNum = (bgImgNum + 1) % bgImg.length;
    }, 1000);
}

setInterval(changeBackground, 5000);
changeBackground();

///////////////////////////////////////////////////////////////////////////////////// SERVICES
import servicesList from './js/dataServices.js';
const servicesDiv = document.querySelector('.services-div');

function generateServices() {

    const html = servicesList.map((servicesList) => {
        return  `
                <a href="#Contact" class="card-services" id="i" data="${servicesList.item}">
                    <h4>${servicesList.name}</h4>
                    <p>${servicesList.description}</p>
                </a>
                `
    }).join('');
    servicesDiv.innerHTML = html;
};

generateServices();


///////////////////////////////////////////////////////////////////////////////////// MERCH
const merchDiv = document.querySelector('.merch-container');
import merchList from './js/dataMerch.js';

function generateMerch() {

    merchList.sort(() => Math.random() - 0.5);
    const html = merchList.map((merchList) => {
        return  `
               <a class="card-merch" href="${merchList.link}" style="background-image:url(./assets/images/merch_${merchList.item}.webp)" target="_blank">
                    <p>${merchList.type}</p>
                    <h4>${merchList.base}</h4>
                    <h5>${merchList.collection}</h5>
                </a>
                `
    }).join('');
    merchDiv.innerHTML = html;
};

generateMerch();

const container = document.querySelector('.container');

container.addEventListener('wheel', (event) => {
    event.preventDefault();
    const scrollAmount = 640; // 1280
    container.scrollLeft += event.deltaY > 0 ? scrollAmount : -scrollAmount;
});

///////////////////////////////////////////////////////////////////////////////////// CREDITS
import creditsList from './js/dataCredits.js';
function generateCards() {
    const totalCards = 10;
    const filledCards = creditsList.length;
    const cardContainer = document.querySelector('#cardRow');

    const cards = [];

    for (let i = 0; i < filledCards; i++) {
        cards.push(`<div class="credit">
                        <img class="credit-img" src="./assets/images/credits_${creditsList[i].item}.webp" alt="${creditsList[i].name} album cover">
                        <div class="credit-text">
                            <h5>${creditsList[i].band}</h5>
                            <h4>${creditsList[i].name}</h4>
                            <p>${creditsList[i].role}</p>
                        </div>
                    </div>`);
    }

    while (cards.length < totalCards) {
        cards.push(`<div class="credit empty-credit"></div>`);
    }

    cards.sort(() => Math.random() - 0.5);
    cardContainer.innerHTML = cards.join('');
}

generateCards();

///////////////////////////////////////////////////////////////////////////////////// ABOUT
import aboutList from './js/dataAbout.js';
class aboutCard {
    constructor(elementId) {
        this.cardElement = document.getElementById(elementId);
        this.setText(aboutList[0]);
        this.setMedia(aboutList[0]);
    }

    setText(index) {
        this.cardElement.innerHTML = `
                                <div class="flex">
                                    <div class="about-img"></div>
                                    <div style="width:100%">
                                        <div class="flex short-gap">
                                            <span class="line"></span>
                                            <p class="line-p">${index.subtext}</p>
                                        </div>
                                        <h4 class="outline_text">${index.title}</h4>
                                        <p class="b">${index.p}</p>
                                        <div class="flex" id="media"></div>
                                    </div>
                                </div>
                                `;
        document.querySelector('.about-img').style.backgroundImage = `url(./assets/images/about_${index.i}.webp)`;
    }

    setMedia(index) {
        const mediaDiv = document.getElementById("media");
        const platforms = [
            { name: "youtube", icon: "YouTube.svg" },
            { name: "spotify", icon: "Spotify.svg" },
            { name: "facebook", icon: "Facebook.svg" },
            { name: "instagram", icon: "Instagram.svg" },
            { name: "patreon", icon: "Patreon.svg" },
            { name: "discord", icon: "Discord.svg" }
        ];

        platforms.forEach(platform => {
            if (index[platform.name]) {
                const linkElement = document.createElement("a");
                linkElement.target = "_blank";
                linkElement.href = index[platform.name];
                linkElement.className = "icon-b";
                linkElement.style.backgroundImage = `url(./assets/icons/${platform.icon})`;
                mediaDiv.appendChild(linkElement);
            }
        });
    }
}

const myCard = new aboutCard('aboutCard');

const zero = document.getElementById('about-0');
const one = document.getElementById('about-1');
const two = document.getElementById('about-2');
const zeroD = document.getElementById('about-default');
const twoP = document.getElementById('about-palevoid');

function changeAboutCard(index, id) {
    myCard.setText(aboutList[index]);
    myCard.setMedia(aboutList[index]);
    switch (id) {
        case "zero":
            zero.classList.add('btn-about-active');
            one.classList.remove('btn-about-active');
            two.classList.remove('btn-about-active');
            break;
        case "one":
            zero.classList.remove('btn-about-active');
            one.classList.add('btn-about-active');
            two.classList.remove('btn-about-active');
            break;
        case "two":
            zero.classList.remove('btn-about-active');
            one.classList.remove('btn-about-active');
            two.classList.add('btn-about-active');
            break;
      }
}

zero.addEventListener('click', () => changeAboutCard(0, "zero"));
zeroD.addEventListener('click', () => changeAboutCard(0, "zero"));
one.addEventListener('click', () => changeAboutCard(1, "one"));
two.addEventListener('click', () => changeAboutCard(2, "two"));
twoP.addEventListener('click', () => changeAboutCard(2, "two"));

///////////////////////////////////////////////////////////////////////////////////// FORM RELATED
// SELECT INPUT
const select = document.querySelector('#service_type');
select.addEventListener('change', switchContactInfo);
let contactInfoP = `For those wanting to bring an idea to life to the final touches to your mix.`
let contactInfoUl = `
                  <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                  <li>Both wet and guitar signals, or if you would rather me craft the tone, just the DI files will be needed.</li>
                  <li>Drum and midi files if applicable. If you have any other VSTi elements such as synths or orchestra, please print them and send the audio file.</li>
                  <li>For the best results, please separate all elements e.g. if you have two synths, send them as two separate tracks.</li>
                  `;

function switchContactInfo() {
    switch (select.value) {
        case 'mixing_&_mastering':
            contactInfoP = `For those wanting to bring an idea to life to the final touches to your mix.`
            contactInfoUl = `
                        <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                        <li>Both wet and guitar signals, or if you would rather me craft the tone, just the DI files will be needed.</li>
                        <li>Drum and midi files if applicable. If you have any other VSTi elements such as synths or orchestra, please print them and send the audio file.</li>
                        <li>For the best results, please separate all elements e.g. if you have two synths, send them as two separate tracks.</li>
                        `;
            generateContactInfo('01', 'Mixing & Mastering', contactInfoUl, contactInfoP);
            break;
        case 'post_production':
            contactInfoP = `For those wanting to elevate your song to the next level.`
            contactInfoUl = `
                        <li>Note the song's BPM in the file name or include it in any mix notes you have.</li>
                        <li>Note any specific parts you want to really pop, and explain what you would like to be added for the best result.</li>
                        <li>Note whether you want synths, choir, orchestra, or just simple impacts. If you want to just go crazy with it, let me know and we can work it out.</li>
                        `;
            generateContactInfo('02', 'Post Production', contactInfoUl, contactInfoP);
            break;
        case 'guidance':
            contactInfoP = `For those looking for tailored tips, tricks and advice.`
            contactInfoUl = `
                        <li>Note anything you are looking to get out of my guidance so I can tailor the experience to your need.</li>
                        <li>Provide any song files needed for me to review.</li>
                        `;
            generateContactInfo('03', 'Guidance', contactInfoUl, contactInfoP);
            break;
        case 'collab':
            contactInfoP = `For those looking to create something together.`
            contactInfoUl = `
                        <li>Provide any song files needed for me to review.</li>
                        <li>Note what you would like me to focus on for our collab.</li>
                        `;
            generateContactInfo('04', 'Collab', contactInfoUl, contactInfoP);
            break;
    }
};

// CHANGE INFO FOR SELECTED OPTION
const contactInfoHTML = document.querySelector('.contact-info');

function generateContactInfo(item, serviceType, contactInfoUl, contactInfoP) {
    contactInfoHTML.innerHTML = `
                            <div class="info">
                                <p><i>You’re submitting the form for:</i><p>
                                <h4>${serviceType}</h4>
                                <p><b>${contactInfoP}</b></p>
                                <ul class="ul-normal">${contactInfoUl}</ul>
                                <p>Please check <a href="./pages/guidelines.html"><u>guidelines</u></a> before submitting the form!</p>
                            </div>
                            `;
};

generateContactInfo('01', 'Mixing & Mastering', contactInfoUl, contactInfoP);

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