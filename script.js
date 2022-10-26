


let readMore = document.querySelector('.readmore__button-arrow');

let brends = document.querySelector('.brends');

readMore.onclick = function() {
    brends.classList.toggle('brends--expanded');
    readMore.classList.toggle('readmore__button-arrow--reverse');

    if (brends.classList.contains('brends--expanded')) {
        readMore.textContent = 'Скрыть';
    } else {
        readMore.textContent = 'Читать далее';
    }
}

