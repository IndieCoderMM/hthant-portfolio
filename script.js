const hamburgerOpen = document.querySelector('#hamburger-menu');
const hamburgerImg = document.querySelector('#hamburger-img');

hamburgerImg.addEventListener('click', () => {
  hamburgerOpen.classList.add('hamburger-list');
});