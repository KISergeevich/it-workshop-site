import Swiper from 'swiper/bundle';

export function enableSwiper(blockClass) {
    const swiperClass = '.' + blockClass + '-swiper';
    const paginationClass = '.' + blockClass + '-swiper__pagination';
    const slideClass = blockClass + '-swiper__slide';
    
    new Swiper(swiperClass, {
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

export function disableSwiper(blockClass) {
    const swiperClass = '.' + blockClass + '-swiper';
    const swiperElement = document.querySelector(swiperClass);
    const swiper = swiperElement.swiper;
    if (swiper !== undefined) {
        swiper.destroy(true, true);
    }
}