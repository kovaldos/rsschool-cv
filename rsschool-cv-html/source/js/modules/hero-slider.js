/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// hero-slider -- Start --

const initHeroSlider = () => {
  const heroSlider = document.querySelector('.cv-hero__slider');
  if (heroSlider) {
    const swiper01 = new Swiper(heroSlider, {
      spaceBetween: 30,
      effect: 'fade',
      speed: 8000,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
};

export {initHeroSlider};

// hero-slider -- End --
