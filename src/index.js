
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


function addBlur() {
    const blur = document.querySelector('.blur');
    blur.classList.add('open-modal');
}
function removeBlur() {
    const blur = document.querySelector('.blur');
    blur.classList.remove('open-modal');
}
function addModal(element) {
    if (element !== undefined) {
        element.classList.add('open-modal');
    }
}
function removeModal(element) {
    if (element !== undefined) {
        element.classList.remove('open-modal');
    }
}

function blurOn(closeModal) { //closeModal - функция, которая будет вызвана на клике по блюру, что она делает и за что отвечает не дело функции этой.
    const blur = document.querySelector('.blur');
    addBlur();
    blur.addEventListener('click', function () {
        removeBlur();
        closeModal();
    });
}
function openModal(button, modal, deleteModal) {
    button.addEventListener('click', function () {
        addModal(modal);
        removeModal(deleteModal);
        blurOn(function() {
            removeModal(modal)
        });
    });
}
function closeModal(button, modal, menu) {
    button.addEventListener('click', function () {
        removeModal(modal);
        if (menu === undefined || !menu.classList.contains('open-modal')) {
            removeBlur();
        }
    });
}

const burgerMenu = document.querySelector('.burger-menu');
const call = document.querySelector('.request-call');
const feedback = document.querySelector('.feedback');

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


