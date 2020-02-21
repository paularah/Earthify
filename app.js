//  a function expresion to animate the navigation for mobile view
const slideNav = () =>{
    // selecting the burger and nav class
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // creating an event listener to for the burger and 
    // toggling anytime the burger is clicked
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        // animating each links for mobile view
        navLinks.forEach(function(link, index){
            if (link.style.animation){
                 link.style.animation = ''
            }else{
             link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
         });
        
    });
}


slideNav();