
// // Burger Menu
// const burger = document.querySelector('.burger-menu');
// const menu = document.querySelector('.menu ul');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

// // Smooth Scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Burger Menu
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu ul');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('open'); // Optional: for animating the burger
});

