let navbar = document.querySelector('.header .flex .navbar')
let menuBtn = document.querySelector('#menu-btn')

let toggleMenu = e =>{
    navbar.classList.toggle('active')
} 

menuBtn.addEventListener('click',toggleMenu)



let dropdown_items = document.querySelectorAll('.dropdown p')
let inputField = document.querySelectorAll('.output')



dropdown_items.forEach (items =>{
items.onclick = () =>{
    items_parent = items.parentElement.parentElement;
    let output = items_parent.querySelector('.output')
    output.value = items.innerHTML
}

})



let company = document.querySelectorAll('.company')
let company_name = document.querySelectorAll('.company-name')
let company_name_filter = document.querySelector("#company-name")

let search_job = document.querySelector('.job-search')

search_job.addEventListener('click', ()=>{
    company.forEach(company = ()=>{
       if (company_name_filter.value != company_name.innerText) {
        console.log('hi')
       }
    })
})