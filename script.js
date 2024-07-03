let navbar = document.querySelector('.header .flex .navbar')
let menuBtn = document.querySelector('#menu-btn')

let toggleMenu = e =>{
    navbar.classList.toggle('active')
} 

menuBtn.addEventListener('click',toggleMenu)



