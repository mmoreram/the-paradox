const sideMenu = document.getElementById('side-menu');
const menuPanel = sideMenu.querySelector('div');
const menuToggle = sideMenu.querySelector('i');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

menuPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });
});
