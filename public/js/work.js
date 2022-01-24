// Skills Section
// =======================================================
const skillList = ['JavaScript', 'Java', 'Spring Boot Framework', 'MySQL', 'OOP', 'HTML5', 'CSS3', 'MERN Stack',
  'MongoDB', 'Express.js', 'React.js', 'React Native', 'Node.js', 'JQuery', 'Git', 'Handlebars', 'REST APIs',
  'Bootstrap', 'Sass', 'Responsive Design',];
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
    id: 0,
    title: "Metronics, Inc. | CRM Application",
    description: "A customized tool to digitize the company’s methods for organizing and tracking customers and service " +
        "requests, and assist with inventory management. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) " +
        "with JWT authentication and app-wide state management via React Query.",
    image: "img/metronics_webapp.png",
    github: "https://github.com/profjjk/metronics-crm-webapp",
    website: "https://metronics-webapp.netlify.app/"
  },
  {
    id: 1,
    title: "Metronics, Inc. | Official Website",
    description: "The company’s first-ever website where customers can learn about the company, submit online requests " +
        "for service, and browse equipment for sale. Built using JavaScript, Node.js, Express.js, JQuery, SCSS/Sass, " +
        "MongoDB/Mongoose, rendered using the Handlebars templating engine, and deployed on AWS.",
    image: "img/metronics-website.png",
    github: "https://github.com/profjjk/metronics-official-website",
    website: "https://metronics-website.herokuapp.com/"
  },
  {
    id: 2,
    title: "UnderOneRoof | Application",
    description: "A household management tool for roommates to delegate chores, manage a household budget and track " +
        "shared expenses, notify each other of relevant events, and look up emergency contact info. Built using Node.js, " +
        "Express.js, React.js, MySQL/Sequelize, Bootstrap for styling, JWT authentication and app-wide state management " +
        "via Redux. Deployed on Heroku and Netlify.",
    image: "img/under_one_roof.png",
    github: "https://github.com/profjjk/under-one-roof",
    website: "https://under-one-roof.netlify.app/"
  },
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