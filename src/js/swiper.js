// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
Swiper.use([Navigation, Pagination]);
const swiperPlan = new Swiper('.swiperPlan', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
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
        1100: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    },
    modules: [Navigation, Pagination]
});

const swiperReviews = new Swiper('.swiperReviews', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 'auto',
    breakpoints: {
        500: {
            slidesPerView: '1'
        },
        700: {
          slidesPerView: '1.5'
        },
        1000: {
            slidesPerView: '2'
        },
        1300: {
            slidesPerView: '2.5'
        }
    },
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination-reviews',
    },
    navigation: {
        nextEl: '.swiper-btn-next-reviews',
        prevEl: '.swiper-btn-prev-reviews',
    },
    simulateTouch: true,
    grabCursor: true,
    modules: [Navigation, Pagination]
});
