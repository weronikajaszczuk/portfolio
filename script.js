//jasny ciemny
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.textContent = 'Ciemny motyw';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = 'Jasny motyw';
    }
});



//powrot
const backToTopBtn = document.getElementById('back-to-top');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//hamburger
const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');



hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});