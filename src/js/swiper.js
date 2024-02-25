// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiperPlan', {
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
    scrollbar: {
        el: '.swiper-scrollbar',
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
