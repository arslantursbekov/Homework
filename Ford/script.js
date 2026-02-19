let btnNext = document.getElementById("nextSlide");
let btnPrev = document.getElementById("prevSlide");
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let counter = document.getElementById("slideCounter");
let current = 0;

function showSlide(n) {
    let i = 0;
    while (i < slides.length) {
        slides[i].classList.remove("active");
        i = i + 1;
    }
    
    i = 0;
    while (i < dots.length) {
        dots[i].classList.remove("active");
        i = i + 1;
    }
    
    slides[n].classList.add("active");
    
    dots[n].classList.add("active");
    
    counter.textContent = (n + 1) + "/4";
}

btnNext.addEventListener("click", function() {
    current = current + 1;
    if (current > 3) {
        current = 0;
    }
    showSlide(current);
});

btnPrev.addEventListener("click", function() {
    current = current - 1;
    if (current < 0) {
        current = 3;
    }
    showSlide(current);
});

let d0 = dots[0];
let d1 = dots[1];
let d2 = dots[2];
let d3 = dots[3];

d0.addEventListener("click", function() {
    current = 0;
    showSlide(0);
});

d1.addEventListener("click", function() {
    current = 1;
    showSlide(1);
});

d2.addEventListener("click", function() {
    current = 2;
    showSlide(2);
});

d3.addEventListener("click", function() {
    current = 3;
    showSlide(3);
});

let backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

let cookieBanner = document.getElementById("cookieBanner");
let acceptBtn = document.getElementById("acceptCookies");

acceptBtn.addEventListener("click", function() {
    cookieBanner.style.display = "none";
});

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
    let text = prompt("Что ищем?");
    if (text !== null && text !== "") {
        alert("Ищем: " + text);
    }
});

let vehiclesBtn = document.getElementById("vehiclesBtn");
let shopBtn = document.getElementById("shopBtn");
let supportBtn = document.getElementById("supportBtn");
let businessBtn = document.getElementById("businessBtn");

vehiclesBtn.addEventListener("click", function() {
    console.log("Меню Vehicles");
});

shopBtn.addEventListener("click", function() {
    console.log("Меню Shop");
});

supportBtn.addEventListener("click", function() {
    console.log("Меню Support");
});

businessBtn.addEventListener("click", function() {
    console.log("Меню Business");
});

let subscribeBtn = document.getElementById("subscribeBtn");
let emailInput = document.getElementById("emailInput");

subscribeBtn.addEventListener("click", function() {
    let email = emailInput.value;
    
    if (email === "") {
        alert("Введите email!");
    } else if (email.includes("@")) {
        alert("Спасибо за подписку!");
        emailInput.value = "";
    } else {
        alert("Неправильный email!");
    }
});

console.log("Ford сайт загружен!");