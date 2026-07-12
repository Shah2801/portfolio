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


const popup = document.getElementById("certificatePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");

function openCertificate(image){

    console.log("Popup function called");

    popup.style.display = "flex";
    popupImage.src = image;
}

closePopup.onclick = function(){

    popup.style.display = "none";

}

popup.onclick = function(e){

    if(e.target === popup){

        popup.style.display = "none";

    }

}


/* ===========================
   WELCOME SCREEN
=========================== */


const welcomeScreen = document.getElementById("welcomeScreen");
const enterBtn = document.getElementById("enterPortfolio");

enterBtn.addEventListener("click",()=>{

    welcomeScreen.style.opacity="0";

    setTimeout(()=>{

        welcomeScreen.style.display="none";

    },700);

});



// ===========================
// Scroll Reveal
// ===========================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

reveals.forEach(section=>{
    observer.observe(section);
});