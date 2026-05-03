const yearTargets = document.querySelectorAll('#year');
yearTargets.forEach((el) => {
  el.textContent = new Date().getFullYear();
});
