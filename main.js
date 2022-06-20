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

    scrollToSelector(event.target.dataset.link);
})


//Handle click on "contact me" button on home
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', ()=>{
    scrollToSelector('#contact')
})



//Make home slowly face to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    // console.log(1 - window.scrollY/homeHeight);
    { //아래 모두 같음
        home.style.opacity =  1 - window.scrollY/homeHeight;              
       // document.querySelector('.home__container').style.opacity = 1 - window.scrollY/homeHeight;
    }

})


//Show arrow-up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY, homeHeight / 2);
    if(window.scrollY > (homeHeight / 2)){
        arrowUp.classList.add('visible'); 
    }else{
        arrowUp.classList.remove('visible');
    }
})

//Handle click on the "arrow-up" button
arrowUp.addEventListener('click', ()=>{
    scrollToSelector('#home');
})


function scrollToSelector(selection){
    const scrollTo = document.querySelector(selection);
    scrollTo.scrollIntoView({behavior:'smooth'});
}