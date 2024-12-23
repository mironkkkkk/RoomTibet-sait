import { auto } from '@popperjs/core';
import { space } from 'postcss/lib/list';
import Swiper, { Navigation, EffectFade, Pagination, Scrollbar} from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);


const SliderDirections = new Swiper('.directions-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
});

const SliderBlog = new Swiper('.blog-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
});



const SliderPhotos = new Swiper('.photos-slider', {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  centeredSlides:true,
});




