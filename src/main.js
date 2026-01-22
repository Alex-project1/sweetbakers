import './style.scss';

import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const PRELOADER_MIN_TIME = 1000;
const start = performance.now();

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const elapsed = performance.now() - start;
  const delay = Math.max(0, PRELOADER_MIN_TIME - elapsed);

  setTimeout(() => {
    document.body.classList.remove('loading');
    preloader.classList.add('hide');

    const remove = () => {
      preloader.remove();
      preloader.removeEventListener('transitionend', remove);
    };

    preloader.addEventListener('transitionend', remove, { once: true });

    // fallback, если transitionend не сработал
    setTimeout(remove, 1000);
  }, delay);
});


document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.mySwiper');
  if (!swiperEl) return;

  new Swiper(swiperEl, {
    modules: [Navigation, Autoplay, EffectFade],

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
