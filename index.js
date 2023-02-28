
//declare variables

const menuEl = document.querySelector(".menu");

const navbarEl = document.querySelector(".nav-bar");



//event listeners

menuEl.addEventListener("click", toggleMenu);



//functions
function toggleMenu(){
    navbarEl.classList.toggle("toggle-menu");
};
