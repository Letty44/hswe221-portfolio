//dark mode toggle
function toggletheme(){
    document.body.classList.toggle('dark');
    console.log("Button clicked");
}


// COUNTERS
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
counter.innerText = '0';

const updateCounter = () => {
const target = +counter.getAttribute('data-target');
const c = +counter.innerText;

const increment = target / 100;

if (c < target) {
counter.innerText = Math.ceil(c + increment);
setTimeout(updateCounter, 20);
} else {
counter.innerText = target;
}
};

updateCounter();
});

// MOBILE MENU
function toggleMenu() {
document.querySelector('.nav-links').classList.toggle('active');
}

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
alert("Message sent successfully!");
});



