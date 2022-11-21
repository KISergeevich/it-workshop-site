
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import "./styles/brends-style.css";
import "./styles/menu-style.css";
import "./styles/style.css";


const readMore = document.querySelector('.readmore__button-arrow');

const brends = document.querySelector('.brends');

readMore.addEventListener ('click', function() {
    brends.classList.toggle('brends--expanded');
    readMore.classList.toggle('readmore__button-arrow--reverse');

    if (brends.classList.contains('brends--expanded')) {
        readMore.textContent = 'Скрыть';
    } else {
        readMore.textContent = 'Читать далее';
    }
});

let mySwiper;
function breakpointChecker(event) {
    if (event.matches === true) {
        if (mySwiper !== undefined) {
            mySwiper.destroy(true, true);
        }
    } else if (event.matches === false) {
        enableSwiper();
    }
};

function enableSwiper() {
    mySwiper = new Swiper('.swiper', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 'auto',
        slideClass: 'swiper-slide',
        centeredSlides: false,
        spaceBetween: 16,
    });
};
const breakpoint = window.matchMedia('(min-width:767px)');

breakpoint.addEventListener('change', breakpointChecker);

if (breakpoint.matches === false) {
    enableSwiper();
} 