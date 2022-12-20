
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

function blurOn(opener) {
    blur.classList.add('open-modal');
    blur.addEventListener('click', function () {
        opener.classList.remove('open-modal');
        blur.classList.remove('open-modal');
    });
}
function openModal(button, addModal, removeModal) {
    button.addEventListener('click', function () {
        addModal.classList.add('open-modal');
        if (removeModal !== undefined) {
            removeModal.classList.remove('open-modal');
        }
        blurOn(addModal);
    });
}
function closeModal(button, modal, menu) {
    button.addEventListener('click', function () {
        modal.classList.remove('open-modal');
        blur.classList.remove('open-modal');
        if (menu !== undefined) {
            if (menu.classList.contains('open-modal')) {
                blur.classList.add('open-modal');
            }
        }
    });
}


const burgerMenu = document.querySelector('.burger-menu');
const call = document.querySelector('.request-call');
const feedback = document.querySelector('.feedback');

const blur = document.querySelector('.blur');

const burgerButton =  document.querySelector('.button-red__circle--burger-menu');

const burgerButtonFeedback = burgerMenu.querySelector('.button-red__circle--feedback');
const burgerButtonCall = burgerMenu.querySelector('.button-red__circle--request-call');
const closeButtonBurger = burgerMenu.querySelector('.button-red__circle--close');

const closeButtonCall = call.querySelector('.button-red__circle--close');
const closeButtonFeedback = feedback.querySelector('.button-red__circle--close');

const headerBlock = document.querySelector('.upper-menu__mob');

const buttonHeaderFeedback = headerBlock.querySelector('.button-red__circle--feedback');
const buttonHeaderCall = headerBlock.querySelector('.button-red__circle--request-call');

openModal(burgerButton, burgerMenu);
openModal(burgerButtonFeedback, feedback, call);
openModal(burgerButtonCall, call, feedback);
openModal(buttonHeaderFeedback, feedback);
openModal(buttonHeaderCall, call);

closeModal(closeButtonBurger, burgerMenu);
closeModal(closeButtonFeedback, feedback,  burgerMenu);
closeModal(closeButtonCall, call,  burgerMenu);


