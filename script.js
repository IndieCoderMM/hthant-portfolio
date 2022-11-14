const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerImg = document.querySelector('#hamburger-img');
const menuItems = hamburgerMenu.querySelectorAll('a');

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
