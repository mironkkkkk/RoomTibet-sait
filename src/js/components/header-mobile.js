const burger = document.querySelector('.header-mobile__burger');

burger.addEventListener('click', () => {
  if (burger.classList.contains('active-burger')) {
    burger.classList.remove('active-burger');
  } else {
    burger.classList.add('active-burger');
  }
});
