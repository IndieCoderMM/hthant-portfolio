const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuButton = document.querySelector('#hamburger-btn');
const menuItems = hamburgerMenu.querySelectorAll('a');
const portfolioSection = document.querySelector('#portfolio');
const popUpWindow = document.querySelector('#popup-window');
const docBody = document.querySelector('body');
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const alertBox = document.querySelector('#alert-box');

const isEmpty = (input) => input.value.trim().length === 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alertBox.classList.add('error-msg');
  if (isEmpty(nameInput)) {
    nameInput.value = '';
    alertBox.textContent = 'Please let me know your name!';
  } else if (mailInput.value !== mailInput.value.toLowerCase()) {
    alertBox.textContent = 'Please use lowercase letters for email!';
  } else if (isEmpty(messageInput)) {
    messageInput.value = '';
    alertBox.textContent = 'Please write something in message box!';
  } else {
    alertBox.classList.add('success-msg');
    alertBox.classList.remove('error-msg');
    alertBox.textContent = 'Thanks for reaching out to me!';
    form.submit();
  }
});

const projectList = [
  {
    id: 0,
    name: 'YouTube App',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti sed, tenetur mollitia nisi perferendis eveniet at veniam sapiente? Quibusdam similique error repellat fugiat debitis quia cumque est illo dicta.',
    feature_img: 'img/ss-yt-home.png',
    info: ['Jimmy', 'Front End Dev', '2021'],
    technologies: ['html', 'css', 'javascript'],
    live_demo:
      'https://indiecodermm.github.io/modern-websites/youtube/index.html',
    source:
      'https://github.com/IndieCoderMM/modern-websites/tree/master/youtube',
  },
  {
    id: 1,
    name: 'Rock Paper Scissors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti sed, tenetur mollitia nisi perferendis eveniet at veniam sapiente? Quibusdam similique error repellat fugiat debitis quia cumque est illo dicta.',
    feature_img: 'img/ss-rps-2.png',
    info: ['Jimmy', 'Front End Dev', '2020'],
    technologies: ['html', 'css', 'javascript'],
    live_demo:
      'https://indiecodermm.github.io/modern-websites/rock-paper-scissor/index.html',
    source:
      'https://github.com/IndieCoderMM/modern-websites/tree/master/rock-paper-scissor',
  },
  {
    id: 2,
    name: 'Wordle Clone',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti sed, tenetur mollitia nisi perferendis eveniet at veniam sapiente? Quibusdam similique error repellat fugiat debitis quia cumque est illo dicta.',
    feature_img: 'img/ss-wdle-1.png',
    info: ['Jimmy', 'Front End Dev', '2022'],
    technologies: ['html', 'css', 'javascript'],
    live_demo:
      'https://indiecodermm.github.io/modern-websites/wordle/index.html',
    source:
      'https://github.com/IndieCoderMM/modern-websites/tree/master/wordle',
  },
  {
    id: 3,
    name: 'Awesome Project',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius deleniti sed, perferendis eveniet at veniam sapiente? Quibusdam similique error repellat fugiat debitis quia cumque est illo dicta.',
    feature_img: 'img/work-snapshot00.png',
    info: ['Tom', 'Back End Dev', '2022'],
    technologies: ['html', 'bootstrap', 'ruby'],
    live_demo: '#',
    source: '#',
  },
];

function displayProjects(projectData) {
  const card = document.createElement('section');
  const featureImg = document.createElement('img');
  const detailSection = document.createElement('article');
  const name = document.createElement('h2');
  const infoList = document.createElement('ul');
  const description = document.createElement('p');
  const techList = document.createElement('ul');
  const seeButton = document.createElement('button');

  card.classList.add('work-card');
  featureImg.src = projectData.feature_img;
  featureImg.classList.add('work-snapshot');
  detailSection.classList.add('work-detail');
  name.innerText = projectData.name;
  infoList.classList.add('work-info');
  techList.classList.add('work-tags');
  // Project info list
  projectData.info.forEach((item) => {
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
  });
  description.classList.add('work-description');
  description.innerText = projectData.description;
  // Technologies list
  projectData.technologies.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    techList.appendChild(listItem);
  });

  seeButton.type = 'button';
  seeButton.classList.add('btn', 'see-project-btn');
  seeButton.innerText = 'See Project';
  seeButton.id = projectData.id;
  // Appending elements to their parents
  const detailInfo = [name, infoList, description, techList, seeButton];
  detailInfo.forEach((element) => {
    detailSection.appendChild(element);
  });
  card.appendChild(featureImg);
  card.appendChild(detailSection);
  portfolioSection.appendChild(card);
}

function toggleMenu() {
  hamburgerMenu.classList.toggle('mobile-menu');
  docBody.classList.toggle('fixed');
  // Change icon to 'X'
  if (!menuButton.classList.contains('close-icon')) {
    menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
  menuButton.classList.toggle('close-icon');
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
  selectedProject.info.forEach((data) => {
    infoList.querySelector(`:nth-child(${nthChild})`).innerText = data;
    nthChild += 2;
  });
  // Tech list
  const techList = popUpWindow.querySelector('.work-tags');
  selectedProject.technologies.forEach((tech, index) => {
    techList.querySelector(`:nth-child(${index + 1})`).innerText = tech;
  });

  popUpWindow.classList.remove('hide');
}

// Toggle Menu Feature
menuButton.addEventListener('click', toggleMenu);
menuItems.forEach((item) =>
  item.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('mobile-menu')) {
      toggleMenu();
    }
  })
);

// Dynamicall loading project section
projectList.forEach((project) => displayProjects(project));

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
