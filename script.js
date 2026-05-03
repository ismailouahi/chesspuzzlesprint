const header = document.getElementById('siteHeader');

const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 16) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
