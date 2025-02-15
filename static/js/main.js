function switchLang(lang) {
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
}

function applyRTL(){
    const lang = document.children[0].getAttribute('lang');
    let navbar = document.querySelector(".navbar-nav");
    let dropdown = document.querySelector(".dropdown");
    let dropdownText = document.querySelectorAll(".dropdown-menu a");
    let heroImg = document.querySelector("#hero-img");
    let aboutCard = document.querySelector("#about-card")
    let carouselWrapper = document.querySelector(".carousel-wrapper");
    let aboutImg3 = document.querySelector("#about-img3");
    let processCards = document.querySelectorAll(".process-card");
    let leftCarets = document.querySelectorAll(".bi-caret-left-fill");

    if (lang === 'ar') {
        navbar.classList.add("me-4");
        navbar.classList.add("gap-3");
        dropdown.classList.replace("ms-auto", "me-auto");
        dropdown.classList.replace("dropstart", "dropend");
    } else {
        navbar.classList.remove("me-4");
        navbar.classList.remove("gap-3");
        dropdown.classList.replace("me-auto", "ms-auto");
        dropdown.classList.replace("dropend", "dropstart");
        dropdownText.forEach((e) => e.classList.remove("text-end"));
        heroImg.classList.add('inverse-img');
        aboutCard.classList.replace("pe-2", "pe-0");
        aboutCard.classList.replace("ps-0", "ps-2");
        aboutImg3.style.justifySelf = "right";
        processCards.forEach(e => {
            e.classList.toggle("en");
        })
        leftCarets.forEach(c => {
            c.classList.replace("bi-caret-left-fill", "bi-caret-right-fill");
        });
        carouselWrapper.style.animation = "20s slide-right infinite linear";
    }
}

document.addEventListener("DOMContentLoaded", applyRTL);
document.addEventListener("DOMContentLoaded", () => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add("was-validated");
        }, false)
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let copy = document.querySelector(".carousel-wrapper").cloneNode(true);
    document.querySelector(".carousel-container").appendChild(copy);
})
