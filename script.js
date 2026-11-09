const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const factsToggle = document.querySelector('.facts-toggle');
const factsPanel = document.querySelector('.facts-panel');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? 'Close menu' : 'Menu';
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
    });
  });
}

if (factsToggle && factsPanel) {
  factsToggle.addEventListener('click', () => {
    const isOpen = factsToggle.getAttribute('aria-expanded') === 'true';
    factsToggle.setAttribute('aria-expanded', String(!isOpen));
    factsToggle.textContent = isOpen ? 'Show quick facts' : 'Hide quick facts';
    factsPanel.hidden = isOpen;
  });
}
