// DOM Selectors
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.btn-menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-items');

// Event Listeners
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    menu.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    menu.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}