import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

window.addEventListener('DOMContentLoaded', ()=>{
  const links = document.querySelectorAll('.navbar-nav .nav-item .nav-link')
  const navBar = document.querySelector('#navbarSupportedContent') 

  links.forEach(el => {
    el.addEventListener('click', () => {
      navBar.classList.remove('show')
    })
  })
  console.log(links)
})