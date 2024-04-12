import { auto } from '@popperjs/core';
import { space } from 'postcss/lib/list';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const postMobileSlider = new Swiper('.post-mobile-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
});


const newsMobileSlider = new Swiper('.news__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: auto,
  spaceBetween: 15,
  loop: true,
});