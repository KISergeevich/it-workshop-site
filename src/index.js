
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import "./styles/menu-style.css";
import "./styles/style.css";
import "./styles/brends-style.css";

const readMore = document.querySelector('.readmore__button-arrow');

const brends = document.querySelector('.brends-swiper__wrapper');

readMore.addEventListener ('click', function() {
    brends.classList.toggle('brends--expanded');
    readMore.classList.toggle('readmore__button-arrow--reverse');

    if (brends.classList.contains('brends--expanded')) {
        readMore.textContent = 'Скрыть';
    } else {
        readMore.textContent = 'Читать далее';
    }
});

let brendsSwiper;
function breakpointChecker(event) {
    if (event.matches === true) {
        if (brendsSwiper !== undefined) {
            brendsSwiper.destroy(true, true);
        }
        if (equipmentSwiper !== undefined) {
            equipmentSwiper.destroy(true, true);
        }
    } else if (event.matches === false) {
        enableBrendsSwiper();
        enableEquipmentSwiper();
    }
};

function enableBrendsSwiper() {
    brendsSwiper = new Swiper('.brends-swiper', {
        pagination: {
            el: ".brends-swiper__pagination",
            clickable: true,
        },
        slidesPerView: 'auto',
        slideClass: 'brends-swiper__slide',
        centeredSlides: false,
        spaceBetween: 16,
    });
};
let equipmentSwiper;
function enableEquipmentSwiper() {
    equipmentSwiper = new Swiper('.equipment-swiper', {
        pagination: {
            el: ".equipment-swiper__pagination",
            clickable: true,
        },
        autoHeight: true,
        slidesPerView: 'auto',
        slideClass: 'equipment__block',
        centeredSlides: false,
        spaceBetween: 16,
    });
};
const breakpoint = window.matchMedia('(min-width:767px)');

breakpoint.addEventListener('change', breakpointChecker);

if (breakpoint.matches === false) {
    enableBrendsSwiper();
    enableEquipmentSwiper();
} 