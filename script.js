// 1. Loading Screen
window.addEventListener('load', () => {
const loader = document.getElementById('loader');
setTimeout(() => {
loader.style.opacity = '0';
setTimeout(() => loader.style.display = 'none', 500);
}, 2000);
});

// 2. Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
nav.classList.toggle('nav-active');
burger.classList.toggle('toggle');
});

// 3. Scroll Reveal Animation
function reveal() {
var reveals = document.querySelectorAll(".reveal");
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;
if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll", reveal);

// 4. Hero Background Particles (Simple Canvas Effect)
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
class Particle {
constructor() {
this.x = Math.random() * canvas.width;
this.y = Math.random() * canvas.height;
this.size = Math.random() * 2 + 1;
this.speedX = Math.random() * 1 - 0.5;
this.speedY = Math.random() * 1 - 0.5;
}
update() {
this.x += this.speedX;
this.y += this.speedY;
}
draw() {
ctx.fillStyle = '#D4AF37';
ctx.beginPath();
ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
ctx.fill();
}
}

function init() {
for (let i = 0; i < 50; i++) {
particlesArray.push(new Particle());
}
}

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
for (let i = 0; i < particlesArray.length; i++) {
particlesArray[i].update();
particlesArray[i].draw();
}
requestAnimationFrame(animate);
}
init();
animate();

// 5. Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
// Remove active class
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');

const filter = btn.getAttribute('data-filter');  

    galleryItems.forEach(item => {  
        if (filter === 'all' || item.classList.contains(filter)) {  
            item.style.display = 'block';  
        } else {  
            item.style.display = 'none';  
        }  
    });  
});

});

// 6. Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const runCounter = () => {
counters.forEach(counter => {
const updateCount = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText;
const inc = target / speed;

if (count < target) {  
            counter.innerText = Math.ceil(count + inc);  
            setTimeout(updateCount, 1);  
        } else {  
            counter.innerText = target;  
        }  
    };  
    updateCount();  
});

};

// Trigger counter when section is visible
let started = false;
window.addEventListener('scroll', () => {
const whyUs = document.querySelector('.why-us');
if (window.scrollY > whyUs.offsetTop - 500 && !started) {
runCounter();
started = true;
}
});

// 7. Form Submission (Demo)
document.getElementById('bookingForm').addEventListener('submit', (e) => {
e.preventDefault();
alert('Thank you, Ajibade Muritala Adeyemi has received your request. We will contact you shortly.');
});
