const btn = document.querySelectorAll('.nav-links');
btn.forEach((element) => {
  element.addEventListener('click', () => {
    const menu = document.querySelector('#collapsible_menu');
    menu.classList.remove('show');
  });
});