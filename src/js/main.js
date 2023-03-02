import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

window.addEventListener('DOMContentLoaded', ()=>{
  const links = document.querySelectorAll('.navbar-nav .nav-item .nav-link')
  const navBar = document.querySelector('#navbarSupportedContent') 
  const header = document.querySelector('.header')

  //aos init
  AOS.init()

  //close mobile nav when click
  links.forEach(el => {
    el.addEventListener('click', () => {
      navBar.classList.remove('show')
    })
  })

  //scroll sticky header
  window.addEventListener('scroll', ()=>{
    scrollY > 53 ? header.style.position = 'sticky' : header.style.position = 'relative'
  })

  //Farmacias adheridas
  
})
