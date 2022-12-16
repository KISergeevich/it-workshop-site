
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import "./styles/burger-menu.css";
import "./styles/header-footer.css";
import "./styles/services-block.css";
import "./styles/brends-swiper-block.css";
import "./styles/equipment-swiper-block.css";
import "./styles/price-swiper-block.css"


function readMore(blockClass) {
    const readMoreClass = '.readmore__button-arrow--' + blockClass;
    const readMore = document.querySelector(readMoreClass);
    const containerClass = '.' + blockClass + '-swiper';
    const container = document.querySelector(containerClass);

    readMore.addEventListener ('click', function() {
        container.classList.toggle('swiper--expanded');
        readMore.classList.toggle('readmore__button-arrow--reverse');
    
        if (container.classList.contains('swiper--expanded')) {
            readMore.textContent = 'Скрыть';
        } else {
            readMore.textContent = 'Показать всё';
        }
    });
};

function breakpointChecker(event) {
    if (event.matches) {
        disableSwiper(brendsSwiper);
        disableSwiper(equipmentSwiper);
        disableSwiper(priceSwiper);
    } else {
        brendsSwiper = enableSwiper('brends');
        equipmentSwiper = enableSwiper('equipment');
        priceSwiper = enableSwiper('price');
    }
}

function enableSwiper(blockClass) {
    const swiperClass = '.' + blockClass + '-swiper';
    const paginationClass = '.' + blockClass + '-swiper__pagination';
    const slideClass = blockClass + '-swiper__slide';
    
    return new Swiper(swiperClass, {
        pagination: {
            el: paginationClass,
            clickable: true,
        },
        slidesPerView: 'auto',
        slideClass: slideClass,
        centeredSlides: false,
        spaceBetween: 16,
    });
}

function disableSwiper(swiper) {
    if (swiper !== undefined) {
        swiper.destroy(true, true);
    }
}

function workModal(modalBlock) {

const buttonClass = '.button-red__circle--' + modalBlock;
const classModal = '.' + modalBlock;

const button = document.querySelector(buttonClass);
const modal = document.querySelector(classModal);

const blur = document.querySelector('.blur')
const close = document.querySelector('.button-red__circle--cross');

    button.addEventListener ('click', function() {
        modal.classList.add('open-modal');
        close.addEventListener ('click', function() {
            modal.classList.remove('close-modal');
            blur.classList.remove('close-modal');
        });
        blur.addEventListener ('click', function() {
            blur.classList.remove('open-modal');
            modal.classList.remove('open-modal');
        })
        if (modal.classList.contains('close-modal')) {
            blur.classList.add('close-modal');
        }
    });
}

readMore('brends');
readMore('equipment');

workModal('request-call');
workModal('feedback');
workModal('burger-menu');

const breakpoint = window.matchMedia('(min-width:767px)');
breakpoint.addEventListener('change', breakpointChecker);

let brendsSwiper;
let equipmentSwiper;
let priceSwiper;
if (breakpoint.matches === false) {
    brendsSwiper = enableSwiper('brends');
    equipmentSwiper = enableSwiper('equipment');
    priceSwiper = enableSwiper('price');
} 

