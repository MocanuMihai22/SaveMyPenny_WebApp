// THE STICKY navbar EFFECT


let navElements = document.querySelectorAll('.nav-element')

let toggleBtn = document.querySelector(".toggle_btn");



// DROP-DOWN MENU
let dropDownMenu=document.querySelector(".dropdown_menu")

toggleBtn.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})

let toggleBtn2 = document.querySelector(".toggle_btn2");

toggleBtn2.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})