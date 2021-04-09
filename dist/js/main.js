// Navigation Menu
// =======================================================
// DOM Selectors.
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
// Show/Hide Nav-Menu Toggle.
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
// Event Listener.
menuBtn.addEventListener('click', toggleMenu)


// Skills Section
// =======================================================
const skillList = ['JavaScript', 'MySQL', 'OOP', 'HTML5', 'CSS3', 'MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JQuery', 'Git', 'Handlebars', 'AJAX', 'JSON', 'APIs', 'Local Storage', 'Bootstrap CSS', 'Sass', 'Responsive Design',];
const skillSection = document.getElementById('skills');

for (let i = 0; i < skillList.length; i++) {
  const h5Tag = document.createElement('h5');
  let text = document.createTextNode(`${skillList[i]}`);
  h5Tag.appendChild(text);
  skillSection.appendChild(h5Tag);
}


// Projects Section
// =======================================================
const projects = [
  {
    id: 1,
    title: "My Job",
    description: "This is a full stack web application that empowers a user to better organize their job search. The user can create a unique profile, add job applications, track their status, and update with notes.",
    image: "img/my-job.png",
    github: "https://github.com/profjjk/my-job",
    website: "https://ucb-my-job.herokuapp.com/"
  },
  {
    id: 2,
    title: "Game of Thrones Quiz",
    description: "This is a Game of Thrones themed quiz consisting of 20 questions and set to a timer. Wrong answers will decrease the timer. Correct answers will be scored and a percentage will display at the end. Player names and scores are stored for reference and can be called upon by clicking on the scoreboard.",
    image: "img/got-quiz.png",
    github: "https://github.com/profjjk/game-of-thrones-quiz",
    website: "https://game-of-thrones-quiz.herokuapp.com/"
  },
  {
    id: 3,
    title: "President Shuffle",
    description: "This is a game built using React.js. Everytime time you click on an image the page will scramble their positions and you will need to click on a new image. If you click on the same image twice then it's GAME OVER.",
    image: "img/shuffle.png",
    github: "https://github.com/profjjk/president-shuffle",
    website: "https://profjjk.github.io/president-shuffle/"
  },
  {
    id: 4,
    title: "Get Fit",
    description: "This is a fitness and workout tracker that utilizes MongoDB and Mongoose.js to create a database of your workouts.",
    image: "img/workout.png",
    github: "https://github.com/profjjk/get-fit",
    website: "https://jk-ucb-fitness-tracker.herokuapp.com/"
  },
  {
    id: 5,
    title: "Bookish",
    description: "Bookish is a reading list application that allows you to keep a list of which books you have read, and it allows you to add new books that you want to read later.",
    image: "img/bookish.png",
    github: "https://github.com/profjjk/bookish",
    website: "https://bookish-reading-list.herokuapp.com/"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "This is a weather dashboard that queries the OpenWeather API to return weather data for the current day and provide a 5-day forecast based on the user's search for a city.",
    image: "img/weather.png",
    github: "https://github.com/profjjk/weather-dashboard",
    website: "https://profjjk.github.io/weather-dashboard/"
  }
]
const projectSection = document.getElementById('projects');

for (let i = 0; i < projects.length; i++) {
  // Create elements.
  const row = document.createElement('div');
  const mainDiv = document.createElement('div');
  const linkDiv = document.createElement('div');
  const image = document.createElement('img');
  const websiteLink = document.createElement('a');
  const githubLink = document.createElement('a');
  const title = document.createElement('h2');
  const desc = document.createElement('p');
  const hr = document.createElement('hr');
  // Add attributes.
  row.classList.add('row');
  image.setAttribute('src', `${projects[i].image}`);
  image.setAttribute('alt', `${projects[i].title}`);
  websiteLink.setAttribute('href', `${projects[i].website}`);
  websiteLink.setAttribute('target', '_blank');
  githubLink.setAttribute('href', `${projects[i].github}`);
  githubLink.setAttribute('target', '_blank');
  // Create text nodes.
  let titleText = document.createTextNode(`${projects[i].title}`);
  let descText = document.createTextNode(`${projects[i].description}`);
  let webText = document.createTextNode('Website');
  let githubText = document.createTextNode('GitHub');
  // Assemble and append to section.
  title.appendChild(titleText);
  desc.appendChild(descText);
  websiteLink.appendChild(webText);
  githubLink.appendChild(githubText);
  linkDiv.appendChild(websiteLink);
  linkDiv.appendChild(githubLink);
  mainDiv.appendChild(title);
  mainDiv.appendChild(desc);
  mainDiv.appendChild(linkDiv);
  row.appendChild(mainDiv);
  row.appendChild(image);
  projectSection.appendChild(hr);
  projectSection.appendChild(row);
}