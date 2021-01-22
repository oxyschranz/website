const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); 

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

    });

    //animation
    navLinks.forEach((link) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards';

    });
}

navSlide();