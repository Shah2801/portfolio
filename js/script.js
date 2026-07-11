const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const roles = [
    "IT Support Engineer",
    "Cloud Enthusiast",
    "Application Support Engineer",
    "Full Stack Developer"
];

const changingText = document.getElementById("changing-text");

let index = 0;

setInterval(() => {

    changingText.style.animation = "none";
    changingText.offsetHeight; // Restart animation
    changingText.style.animation = "textSlide .5s ease";

    index = (index + 1) % roles.length;
    changingText.textContent = roles[index];

}, 2500);

const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const certificateImages = document.querySelectorAll(".certificate-img");
const closeBtn = document.querySelector(".close-btn");

certificateImages.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});