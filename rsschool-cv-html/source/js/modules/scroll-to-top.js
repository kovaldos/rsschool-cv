// Button to top of the viewport - Start -
import {scrollTo} from '../utils/scroll-to';
const initBtnToTop = () => {
  const btnToTop = document.querySelector('.btn-to-top');
  if (btnToTop) {
    const scrollHeight = 1500;
    window.addEventListener('scroll', function () {
      // Если прокрутили дальше scrollHeight пикселей от верха вьюпорта, показываем кнопку
      // eslint-disable-next-line no-invalid-this
      if (this.scrollY > scrollHeight) {
        btnToTop.classList.add('btn-to-top--is-shown');
        // Иначе прячем
      } else {
        btnToTop.classList.remove('btn-to-top--is-shown');
      }
    });
    // При клике прокручиваем на самый верх
    btnToTop.addEventListener('click', (e) => {
      e.preventDefault();
      // Вызываем функцию, первый аргумент - отступ, второй - скорость скролла, чем больше значение, тем медленнее скорость прокрутки
      scrollTo(0, 400);
    });
  }
};
export {initBtnToTop};

// Button to top of the viewport - Finish -
