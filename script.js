const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuButton = document.querySelector('#hamburger-btn');
const portfolioSection = document.querySelector('#portfolio');
const popUpWindow = document.querySelector('#popup-window');
const docBody = document.querySelector('body');
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const alertBox = document.querySelector('#alert-box');

const FORM_KEY = 'FormData';
const EMPTY_NAME = 'Please let me know your name!';
const MAIL_LOWER = 'Please use lowercase letters for email!';
const EMPTY_TEXT = 'Please write something in message box!';
const VALID_FORM = 'Thanks for reaching out to me!';

const projectList = [
  {
    id: 3,
    name: 'Chess Event Website',
    description:
      'A website for a chess tournament where people can learn more info about the event, see the featured players, and join the event.',
    feature_img: 'img/screenshots/chess_event_site.png',
    info: ['Microverse', 'Mod1', 'Capstone'],
    technologies: ['html', 'css', 'javascript', 'bootstrap'],
    live_demo: 'https://indiecodermm.github.io/chessevent-site/',
    source: 'https://github.com/IndieCoderMM/chessevent-site',
  },
  {
    id: 0,
    name: 'YouTube',
    description:
      'A YouTube clone with redesigned UI, created during the Microverse pre-enrollment bootcamp.',
    feature_img: 'img/screenshots/ss-yt-home.png',
    info: ['Personal', 'Front End', '2022'],
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
      'A website where you can play rock-paper-scissors game with an AI.',
    feature_img: 'img/screenshots/ss-rps-2.png',
    info: ['Personal', 'Game', '2022'],
    technologies: ['html', 'css', 'javascript'],
    live_demo:
      'https://indiecodermm.github.io/modern-websites/rock-paper-scissor/index.html',
    source:
      'https://github.com/IndieCoderMM/modern-websites/tree/master/rock-paper-scissor',
  },
  {
    id: 2,
    name: 'Wordle Clone',
    description: 'A clone of popular Wordle game built in vanilla JavaScript',
    feature_img: 'img/screenshots/ss-wdle-1.png',
    info: ['Jimmy', 'Front End Dev', '2022'],
    technologies: ['html', 'css', 'javascript'],
    live_demo:
      'https://indiecodermm.github.io/modern-websites/wordle/index.html',
    source:
      'https://github.com/IndieCoderMM/modern-websites/tree/master/wordle',
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
  featureImg.setAttribute('src', projectData.feature_img);
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
  // Popup button
  seeButton.type = 'button';
  seeButton.classList.add('btn', 'see-project-btn');
  seeButton.innerText = 'See Project';
  seeButton.id = projectData.id;
  // Appending all elements to their parents
  const detailInfo = [name, infoList, description, techList, seeButton];
  detailInfo.forEach((element) => {
    detailSection.appendChild(element);
  });
  card.appendChild(featureImg);
  card.appendChild(detailSection);
  portfolioSection.appendChild(card);
}

function showProjectDetail(projectId) {
  const selectedProject = projectList.filter(
    (project) => project.id === parseInt(projectId, 10)
  )[0];
  if (selectedProject === null) return;
  popUpWindow.classList.remove('hide');
  popUpWindow.querySelector('h2').innerText = selectedProject.name;
  popUpWindow
    .querySelector('.work-snapshot')
    .setAttribute('src', selectedProject.feature_img);
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
  selectedProject.info.forEach((data, index) => {
    infoList.querySelector(`:nth-child(${index + 1})`).innerText = data;
  });
  // Tech list
  const techList = popUpWindow.querySelector('.work-tags');
  selectedProject.technologies.forEach((tech) => {
    const li = document.createElement('li');
    li.innerText = tech;
    techList.appendChild(li);
  });
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

function saveFormData() {
  const data = {
    name: nameInput.value,
    email: mailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(data));
}

function prefillForm() {
  if (localStorage.getItem(FORM_KEY) === null) return;
  const formData = JSON.parse(localStorage.getItem(FORM_KEY));
  nameInput.value = formData.name;
  mailInput.value = formData.email;
  messageInput.value = formData.message;
}

function validateForm() {
  nameInput.value = nameInput.value.trim();
  mailInput.value = mailInput.value.trim();
  messageInput.value = messageInput.value.trim();

  if (nameInput.value.length === 0) {
    return EMPTY_NAME;
  }
  if (mailInput.value !== mailInput.value.toLowerCase()) {
    return MAIL_LOWER;
  }
  if (messageInput.value.length === 0) {
    return EMPTY_TEXT;
  }
  return VALID_FORM;
}

// --------------- Main Code ----------------------------

// Prefill form on load

prefillForm();

// Save on change event

form.addEventListener('change', saveFormData);

// Form validation

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const status = validateForm();
  alertBox.textContent = status;

  if (status !== VALID_FORM) {
    alertBox.classList.add('error-msg');
    alertBox.classList.remove('success-msg');
    return;
  }
  alertBox.classList.add('success-msg');
  alertBox.classList.remove('error-msg');
  form.submit();
  form.reset();
});

// Toggle Menu Feature

menuButton.addEventListener('click', toggleMenu);
hamburgerMenu.querySelectorAll('a').forEach((item) =>
  item.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('mobile-menu')) {
      toggleMenu();
    }
  })
);

// Dynamicall loading project section
projectList.sort((a, b) => b.id - a.id);
projectList.forEach((project) => displayProjects(project));

// Buttons for pop up window

document.querySelectorAll('.see-project-btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    showProjectDetail(btn.id);
  })
);

document.querySelector('#close-popup-btn').addEventListener('click', () => {
  popUpWindow.classList.add('hide');
});
