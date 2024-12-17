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

