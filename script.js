const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerImg = document.querySelector('#hamburger-img');
const menuItems = hamburgerMenu.querySelectorAll('a');
const portfolioSection = document.querySelector('#portfolio');

let projectList = [
  {
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
  // Appending elements to their parents
  const detailInfo = [name, infoList, description, techList, seeButton];
  for (let element of detailInfo) {
    detailSection.appendChild(element);
  }
  card.appendChild(feature_img);
  card.appendChild(detailSection);
  portfolioSection.appendChild(card);
}

for (let project of projectList) {
  displayProjects(project);
}

// Toggle Menu Feature
function toggleMenu() {
  hamburgerMenu.classList.toggle('hamburger-list');
  if (hamburgerImg.classList.contains('hamburger')) {
    hamburgerImg.src = 'img/icons/close-icon.png';
    hamburgerImg.classList.remove('hamburger');
  } else {
    hamburgerImg.src = 'img/icons/hamburger.png';
    hamburgerImg.classList.add('hamburger');
  }
}

hamburgerImg.addEventListener('click', toggleMenu);
menuItems.forEach((item) =>
  item.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('hamburger-list')) {
      toggleMenu();
    }
  })
);
