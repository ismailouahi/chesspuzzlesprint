const yearTargets = document.querySelectorAll('#year');
yearTargets.forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const header = document.getElementById('siteHeader');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('mainNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
    });
  });
}

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 8);
});
