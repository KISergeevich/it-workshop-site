
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
}


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


readMore('brends');
readMore('equipment');


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


const burgerMenu = document.querySelector('.burger-menu');
const burgerButton =  document.querySelector('.button-red__circle--burger-menu');
const blur = document.querySelector('.blur');
const closeButtonBurger = burgerMenu.querySelector('.button-red__circle--close');

burgerButton.addEventListener('click', function() {
    burgerMenu.classList.add('open-modal');
    blur.classList.add('open-modal');
});

closeButtonBurger.addEventListener('click', function() {
    burgerMenu.classList.remove('open-modal');
    blur.classList.remove('open-modal');
});

const burgerButtonFeedback = burgerMenu.querySelector('.button-red__circle--feedback');
const burgerButtonCall = burgerMenu.querySelector('.button-red__circle--request-call');

burgerButtonFeedback.addEventListener('click', function() {
    feedback.classList.add('open-modal');
    call.classList.remove('open-modal');
    blur.classList.add('open-modal');
});

burgerButtonCall.addEventListener('click', function() {
    call.classList.add('open-modal');
    feedback.classList.remove('open-modal');
    blur.classList.add('open-modal');
});

const feedback = document.querySelector('.feedback');
const closeButtonFeedback = feedback.querySelector('.button-red__circle--close');

closeButtonFeedback.addEventListener('click', function() {
    feedback.classList.remove('open-modal');
    blur.classList.remove('open-modal');
    if (burgerMenu.classList.contains('open-modal')) {
        blur.classList.add('open-modal');
    }
});

const call = document.querySelector('.request-call');
const closeButtonCall = call.querySelector('.button-red__circle--close');

closeButtonCall.addEventListener('click', function() {
    call.classList.remove('open-modal');
    blur.classList.remove('open-modal');
    if (burgerMenu.classList.contains('open-modal')) {
        blur.classList.add('open-modal');
    }
});

const headerBlock = document.querySelector('.upper-menu__mob');

const buttonHeaderFeedback = headerBlock.querySelector('.button-red__circle--feedback');
buttonHeaderFeedback.addEventListener('click', function() {
    feedback.classList.add('open-modal');
    blur.classList.add('open-modal');
});

const buttonHeaderCall = headerBlock.querySelector('.button-red__circle--request-call');
buttonHeaderCall.addEventListener('click', function() {
    call.classList.add('open-modal');
    blur.classList.add('open-modal');
});

if (feedback.classList.contains('open-modal')) {
    blur.classList.add('open-modal');
};