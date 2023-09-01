// THE STICKY navbar EFFECT

let logo = document.querySelector(".logo");
let logoSpan = document.querySelector(".logo-span");
let navElements = document.querySelectorAll('.nav-element')
let roundNavElements = document.querySelectorAll(".round-nav-element")
let toggleBtn = document.querySelector(".toggle_btn");

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector("nav")
var headerContent = document.querySelector(".section")
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky")
    navbar.style.transition = "all 0.5s";

    headerContent.classList.add("padding")

    logo.classList.add("white-on-scroll");
    logo.style.transition = "all 0.5s";

    logoSpan.classList.add("white-on-scroll");
    logoSpan.style.transition = "all 0.5s";

    
    navElements.forEach((element) => {
      element.classList.add("white-on-scroll");
      element.style.transition = "all 0.5s"
    });

    roundNavElements.forEach((element) => {
      element.classList.add("round-element-to-white");
      element.style.transition = "all 0.5s"
    });

    toggleBtn.classList.add("white");
    toggleBtn.style.transition = "all 0.5s";

   
  } else {
    navbar.classList.remove("sticky");
    navbar.style.transition = "all 0.5s";

    headerContent.classList.remove("padding");

    logo.classList.remove("white-on-scroll");
    logo.style.transition = "all 0.5s";

    logoSpan.classList.remove("white-on-scroll");
    logoSpan.style.transition = "all 0.5s";


    navElements.forEach((element) => {
      element.classList.remove("white-on-scroll");
      element.style.transition = "all 0.5s"
    });

    roundNavElements.forEach((element) => {
      element.classList.remove("round-element-to-white");
      element.style.transition = "all 0.5s"
    });
    
    toggleBtn.classList.remove("white");
    toggleBtn.style.transition = "all 0.5s";

   
  }
}


// DROP-DOWN MENU
let dropDownMenu=document.querySelector(".dropdown_menu")

toggleBtn.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})

let toggleBtn2 = document.querySelector(".toggle_btn2");

toggleBtn2.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})