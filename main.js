'use strict'


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    // console.log(window.scrollY);
    // console.log('nav height : ' + navbarHeight);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark')
    }else{
        navbar.classList.remove('navbar--dark');
    }
})


//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{

    if(event.target.dataset.link == null){
        return;
    }
    console.log(event.target.dataset.link);

    const scrollTo = document.querySelector(event.target.dataset.link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})