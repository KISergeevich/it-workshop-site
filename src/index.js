
import Swiper from 'swiper/bundle';
import { listenClose, listenOpen } from './modal';
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

function prepareBurgerMenu() {
    const menuModal = document.querySelector('.burger-menu');
    const menuOpen =  document.querySelector('.button-red__circle--burger-menu');
    const menuClose = menuModal.querySelector('.button-red__circle--close');
    
    listenOpen(menuOpen, menuModal);
    listenClose(menuClose, menuModal);
}
function prepareActions() {
    const feedbackModal = document.querySelector('.feedback');
    const menuModal = document.querySelector('.burger-menu');
    const callModal = document.querySelector('.request-call');

    const headerBlock = document.querySelector('.upper-menu__mob');
    const menuFeedbackOpen = menuModal.querySelector('.button-red__circle--feedback');
    const menuFeedbackClose = feedbackModal.querySelector('.button-red__circle--close');
    const headerFeedbackOpen = headerBlock.querySelector('.button-red__circle--feedback');
    const menuCallOpen = menuModal.querySelector('.button-red__circle--request-call');
    const menuCallClose = callModal.querySelector('.button-red__circle--close');
    const headerCallOpen = headerBlock.querySelector('.button-red__circle--request-call');

    listenOpen(menuFeedbackOpen, feedbackModal, callModal);
    listenOpen(menuCallOpen, callModal, feedbackModal);
    listenOpen(headerFeedbackOpen, feedbackModal);
    listenOpen(headerCallOpen, callModal);
    listenClose(menuFeedbackClose, feedbackModal,  menuModal);
    listenClose(menuCallClose, callModal,  menuModal);
}


prepareBurgerMenu();
prepareActions();
