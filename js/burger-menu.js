const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const menuList = document.querySelector('.menu ul');
const body = document.body;

// Open menu
burgerMenu.addEventListener('click', () => {
    menuList.classList.add('active');
    closeMenu.style.display = 'block';
    burgerMenu.style.display = 'none';
    body.classList.add('no-scroll'); // Блокуємо скрол
});

// Close menu
closeMenu.addEventListener('click', () => {
    menuList.classList.remove('active');
    closeMenu.style.display = 'none';
    burgerMenu.style.display = 'flex';
    body.classList.remove('no-scroll'); // Відновлюємо скрол
});

// // Resume scrolling on link click (only for 320px)
// document.querySelectorAll('.menu ul a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 768) { // Умова: тільки для розміру 320px
//             menuList.classList.remove('active');
//             closeMenu.style.display = 'none';
//             burgerMenu.style.display = 'flex';
//             body.classList.remove('no-scroll'); // Відновлюємо скрол
//         }
//     });
// });

// Handle window resize (Optional: to ensure proper behavior on resize)
window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        menuList.classList.remove('active');
        closeMenu.style.display = 'none';
        burgerMenu.style.display = 'none';
        body.classList.remove('no-scroll'); // Відновлюємо скрол, якщо змінився розмір вікна
    } else {
        burgerMenu.style.display = 'flex'; // Показуємо бургер-меню
    }

});
