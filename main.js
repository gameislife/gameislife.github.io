// <!--------------------------------------------------- SHOW MENU ---------------------------------------------------------->
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Validate if constant exists - show menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exists - hide menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// <!-------------------------------------------------- MENU REMOVE ---------------------------------------------------------->
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// <!-------------------------------------------------- CHANGING BG HEADER---------------------------------------------------------->
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




// <!--------------------------------------------------- GAMES SWIPER ---------------------------------------------------------->
var swiper = new Swiper(".games_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    coverflowEffect:{
        rotate: 0,
    },
})





// <!-------------------------------------------------- ANIMATION - SECTIONS 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
    })


sr.reveal(`.home_data, .home_social_icons, .trending,
           .games_container,
           .specs_data, .specs_overlay,
           .packs_card,
           .footer_data, .footer_rights, .section__title,
           .video_description, .specs_container,
           .comments_heading, .comments_container, .iframe-container, .service`,{
    origin: 'top',
    interval: 60,
})

sr.reveal(`.aboutus_data`,{
    origin: 'left',
})

sr.reveal(`.aboutus_img`,{
    origin: 'right',
    interval: 60,
})
