// Burger menu Start
const initBurgerMenu = () => {
  const iconMenu = document.querySelector('[data-burger-icon]');
  if (iconMenu) {
    const menuBody = document.querySelector('[data-burger-body]');
    iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('scroll-lock');
      iconMenu.classList.toggle('is-active');
      menuBody.classList.toggle('is-active');
    });
    menuBody.addEventListener('click', (e) => {
      if (e.target.dataset.target && menuBody.classList.contains('is-active')) {
        document.body.classList.remove('scroll-lock');
        iconMenu.classList.remove('is-active');
        menuBody.classList.remove('is-active');
      }
    });
  }
};
export {initBurgerMenu};
// Burger menu End
