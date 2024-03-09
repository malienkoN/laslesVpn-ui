// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
Swiper.use([Navigation, Pagination]);
new Swiper('.swiperPlan', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    simulateTouch: true,
    grabCursor: true,
    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
});

new Swiper('.swiperReviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
        1300: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 1,
        },
    },
    pagination: {
        el: '.swiper-pagination-reviews',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-btn-next-reviews',
        prevEl: '.swiper-btn-prev-reviews',
    },
    simulateTouch: true,
    grabCursor: true,
});
