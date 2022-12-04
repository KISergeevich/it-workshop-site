
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import "./styles/burger-menu.css";
import "./styles/header-footer.css";
import "./styles/services-block.css";
import "./styles/brends-swiper-block.css";
import "./styles/equipment-swiper-block.css";
import "./styles/price-swiper-block.css"

const readMore = document.querySelector('.readmore__button-arrow');

const brends = document.querySelector('.brends-swiper__wrapper');

readMore.addEventListener ('click', function() {
    brends.classList.toggle('brends--expanded');
    readMore.classList.toggle('readmore__button-arrow--reverse');

    if (brends.classList.contains('brends--expanded')) {
        readMore.textContent = 'Скрыть';
    } else {
        readMore.textContent = 'Показать всё';
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
        if (priceSwiper !== undefined) {
            priceSwiper.destroy(true, true);
        }
    } else if (event.matches === false) {
        enableBrendsSwiper();
        enableEquipmentSwiper();
        enablePriceSwiper();
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
        slideClass: 'equipment-swiper__block',
        centeredSlides: false,
        spaceBetween: 16,
    });
};
let priceSwiper;
function enablePriceSwiper() {
    priceSwiper = new Swiper('.price-swiper', {
        pagination: {
            el: ".price-swiper__pagination",
            clickable: true,
        },
        autoHeight: true,
        slidesPerView: 'auto',
        slideClass: 'price-swiper__slide',
        centeredSlides: false,
        spaceBetween: 16,
    });
};
const breakpoint = window.matchMedia('(min-width:767px)');

breakpoint.addEventListener('change', breakpointChecker);

if (breakpoint.matches === false) {
    enableBrendsSwiper();
    enableEquipmentSwiper();
    enablePriceSwiper();
} 