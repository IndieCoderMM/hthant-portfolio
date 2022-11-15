const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuButton = document.querySelector('#hamburger-btn');
const menuItems = hamburgerMenu.querySelectorAll('a');
const portfolioSection = document.querySelector('#portfolio');
const popUpWindow = document.querySelector('#popup-window');
const docBody = document.querySelector('body');

let projectList = [
  {
    id: 0,
    name: 'YouTube App',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_img: 'img/ss-yt-home.png',
    info: ['Jimmy', 'Front End Dev', '2021'],
    technologies: ['html', 'css', 'javascript'],
    live_demo: '#',
    source: '#',
  },
  {
    id: 1,
    name: 'Rock Paper Scissors',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_img: 'img/ss-rps-2.png',
    info: ['Jimmy', 'Front End Dev', '2019'],
    technologies: ['html', 'css', 'ruby'],
    live_demo: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Wordle Clone',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_img: 'img/ss-wdle-1.png',
    info: ['Jimmy', 'Front End Dev', '2020'],
    technologies: ['html', 'bootstrap', 'javascript'],
    live_demo: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Awesome Project',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    feature_img: 'img/work-snapshot00.png',
    info: ['Tom', 'Front End Dev', '2022'],
    technologies: ['html', 'css', 'javascript'],
    live_demo: '#',
    source: '#',
  },
];

function displayProjects(projectData) {
  const card = document.createElement('section');
  const feature_img = document.createElement('img');
  const detailSection = document.createElement('article');
  const name = document.createElement('h2');
  const infoList = document.createElement('ul');
  const description = document.createElement('p');
  const techList = document.createElement('ul');
  const seeButton = document.createElement('button');

  card.classList.add('work-card');
  feature_img.src = projectData.feature_img;
  feature_img.classList.add('work-snapshot');
  detailSection.classList.add('work-detail');
  name.innerText = projectData.name;
  infoList.classList.add('work-info');
  techList.classList.add('work-tags');
  // Project info list
  for (let item of projectData.info) {
    const listItem = document.createElement('li');
    if (!infoList.hasChildNodes()) {
      listItem.classList.add('author');
    } else {
      const dotShape = document.createElement('li');
      dotShape.innerHTML = '<span class="circle"></span>';
      infoList.appendChild(dotShape);
    }
    listItem.innerText = item;
    infoList.appendChild(listItem);
  }
  description.classList.add('work-description');
  description.innerText = projectData.description;
  // Technologies list
  for (let item of projectData.technologies) {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    techList.appendChild(listItem);
  }
  seeButton.type = 'button';
  seeButton.classList.add('btn', 'see-project-btn');
  seeButton.innerText = 'See Project';
  seeButton.id = projectData.id;
  // Appending elements to their parents
  const detailInfo = [name, infoList, description, techList, seeButton];
  for (let element of detailInfo) {
    detailSection.appendChild(element);
  }
  card.appendChild(feature_img);
  card.appendChild(detailSection);
  portfolioSection.appendChild(card);
}

function toggleMenu() {
  hamburgerMenu.classList.toggle('display-menu');
  docBody.classList.toggle('fixed');
  if (menuButton.classList.contains('hamburger')) {
    menuButton.src = 'img/icons/close-icon.png';
    menuButton.classList.remove('hamburger');
  } else {
    menuButton.src = 'img/icons/hamburger.png';
    menuButton.classList.add('hamburger');
  }
}

function showProjectDetail(projectId) {
  const selectedProject = projectList[projectId];
  popUpWindow.querySelector('h2').innerText = selectedProject.name;
  popUpWindow.querySelector('.work-snapshot').src = selectedProject.feature_img;
  popUpWindow.querySelector('.work-description').innerText =
    selectedProject.description;
  popUpWindow
    .querySelector('#live-btn')
    .setAttribute('href', selectedProject.live_demo);
  popUpWindow
    .querySelector('#src-btn')
    .setAttribute('href', selectedProject.source);

  // Project info list
  const infoList = popUpWindow.querySelector('.work-info');
  let nthChild = 1;
  for (let data of selectedProject.info) {
    infoList.querySelector(`:nth-child(${nthChild})`).innerText = data;
    nthChild += 2;
  }
  // Tech list
  const techList = popUpWindow.querySelector('.work-tags');
  for (let i = 0; i < selectedProject.technologies.length; i++) {
    techList.querySelector(`:nth-child(${i + 1})`).innerText =
      selectedProject.technologies[i];
  }

  popUpWindow.classList.remove('hide');
}

// Toggle Menu Feature
menuButton.addEventListener('click', toggleMenu);
menuItems.forEach((item) =>
  item.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('hamburger-list')) {
      toggleMenu();
    }
  })
);

// Dynamicall loading project section
for (let project of projectList) {
  displayProjects(project);
}

// Buttons for pop up window
const projectButtons = document.querySelectorAll('.see-project-btn');

projectButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    showProjectDetail(btn.id);
  })
);

document.querySelector('#close-popup-btn').addEventListener('click', () => {
  popUpWindow.classList.add('hide');
});
