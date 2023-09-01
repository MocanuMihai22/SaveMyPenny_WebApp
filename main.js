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
var headerContent = document.querySelector(".header-content")
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




//INTERSECTION OBSERVER

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{  
      if (entry.isIntersecting){
      entry.target.classList.add("show")
    }else{
      entry.target.classList.remove("show")
    }})
  
  });
  var element=document.querySelectorAll(".hidden")
  
  element.forEach((el)=> observer.observe(el));


var budgetSpan= document.getElementById("budget");
var totalSpan= document.getElementById("total");
var expensesSpan= document.getElementById("expenses");



// DROP-DOWN MENU
let dropDownMenu=document.querySelector(".dropdown_menu")

toggleBtn.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})

let toggleBtn2 = document.querySelector(".toggle_btn2");

toggleBtn2.addEventListener("click", ()=>{
  dropDownMenu.classList.toggle("menu-open")
})

  // GETTING BUDGET INPUT VALUES

  var budgetAmountArray=[];
  var budgetSourceArray=[];


document.getElementById("form1").addEventListener("submit", (e)=>{
 
  var budgetAmount=document.getElementById("budgetAmount").value;
  var budgetSource=document.getElementById("budgetSource").value;

    budgetAmountArray.push(budgetAmount)
    budgetSourceArray.push(budgetSource)

    let budgetInputsValues=document.querySelectorAll('#budgetSource, #budgetAmount')
    budgetInputsValues.forEach((input)=>{input.value="";})

    e.preventDefault();

    console.log(budgetAmount)
    console.log(budgetSource)
     
      budgetChart.update();
    
      budgetSpan.textContent=parseInt(budgetAmount)+parseInt(budgetSpan.textContent);
      totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

      myChart.data.datasets[0].data.splice(0,1,(parseInt(budgetSpan.textContent)))
      myChart.update();
      
      myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
      myChart.update();
})

  // BUDGET CHART  

  const budgetChart = new Chart('BudgetChart', {
    type: 'doughnut',
    data: {
      labels: budgetSourceArray,
      datasets: [{
        label:'RON' ,
        data: budgetAmountArray,
        backgroundColor: [
          'rgba(11, 114, 253, 0.7)',
          'rgba(0, 128, 0, 0.7)',
          'rgba(0, 0, 255, 0.7)',
          'rgba(255, 0, 0, 0.7)'
        ],
        borderColor: [
          'rgba(11, 114, 253, 1)',
          'rgba(0, 128, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



// GETTING EXPENSES INPUT VALUES


var expensesAmountArray=[];
var expensesSourceArray=[];


document.getElementById("form2").addEventListener("submit", (e)=>{

var expensesAmount=document.getElementById("expensesAmount").value;
var expensesSource=document.getElementById("expensesSource").value;

expensesAmountArray.push(expensesAmount)
expensesSourceArray.push(expensesSource)

  let expensesInputsValues=document.querySelectorAll('#expensesSource, #expensesAmount')
  expensesInputsValues.forEach((input)=>{input.value="";})

  e.preventDefault();

  console.log(expensesAmount);
  console.log(expensesSource);

  expensesChart.update();

  expensesSpan.textContent = parseInt(expensesAmount)+parseInt(expensesSpan.textContent);
  totalSpan.textContent=  budgetSpan.textContent-expensesSpan.textContent;

  myChart.data.datasets[0].data.splice(1,1,(parseInt(expensesSpan.textContent)))
  myChart.update();
 
  myChart.data.datasets[0].data.splice(2,1,(parseInt(totalSpan.textContent)))
  myChart.update();
})

// EXPENSES CHART  

const expensesChart = new Chart('ExpensesChart', {
  type: 'doughnut',
  data: {
    labels: expensesSourceArray,
    datasets: [{
      label:'RON' ,
      data: expensesAmountArray,
      backgroundColor: [
        'rgba(0, 128, 0, 0.7)',
        'rgba(265, 165, 0, 0.7)',
        'rgba(0, 0, 255, 0.7)',
        'rgba(255, 0, 0, 0.7)'
      ],
      borderColor: [
        'rgba(0, 128, 0, 1)',
        'rgba(265, 165, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// BUDGET, EXPENSES, SAVING CHART

const myChart = new Chart("myChart", {
  type: 'bar',
  data: {
    labels: ['Budget', 'Expenses', 'Savings'],
    datasets: [{
      label: 'RON',
      data: [0,0,0],
      backgroundColor: [
        'rgba(0, 0, 255, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 128, 0, 0.2)'
      ],
      borderColor: [
        'rgb(0, 0, 255)',
        'rgb(255, 0, 0)',
        'rgb(0, 128, 0)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

