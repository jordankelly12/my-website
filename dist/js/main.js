// DOM Selectors
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Functions
let showMenu = false;
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

// Event Listeners
menuBtn.addEventListener('click', toggleMenu)


// Skills Section
// =======================================================
const skillList = ['JavaScript', 'Node.js', 'JQuery', 'OOP', 'HTML5', 'CSS3', 'MySQL', 'React.js', 'Express.js', 'Bootstrap CSS', 'Sass', 'Responsive Design', 'Handlebars', 'AJAX', 'JSON', 'APIs', 'Local Storage', 'Git', 'GitHub', 'MERN Stack'];
const skillSection = document.getElementById('skills');

for (let i = 0; i < skillList.length; i++) {
  let h5Tag = document.createElement('h5');
  let text = document.createTextNode(`${skillList[i]}`);
  h5Tag.appendChild(text);
  skillSection.appendChild(h5Tag);
}


// Projects Section
// =======================================================
const projects = require('../json/projects.json');
const projectSection = document.getElementById('projects');

for (let i = 0; i < projects.length; i++) {
  let textDiv = document.createElement('div');
  let linkDiv = document.createElement('div');
  let text = document.createTextNode(`${skillList[i]}`);
  h5Tag.appendChild(text);
  skillSection.appendChild(h5Tag);
}