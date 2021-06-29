const swiper = new Swiper(".manual-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".manual-button-prev",
    prevEl: ".manual-button-next",
  },
});
const reviewsSlider = new Swiper(".adapt-slider", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".adapt-slider__button--next",
    prevEl: ".adapt-slider__button--prev",
  },
  keyboard: { enabled: true },
});
