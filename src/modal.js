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

function blur(closeModal) { //closeModal - функция, которая будет вызвана на клике по блюру, что она делает и за что отвечает не дело функции этой.
    const blurElement = document.querySelector('.blur');
    addBlur();
    blurElement.addEventListener('click', function () {
        removeBlur();
        closeModal();
    });
}

export function listenOpen(button, modal, deleteModal) {
    button.addEventListener('click', function () {
        addModal(modal);
        removeModal(deleteModal);
        blur(function() {
            removeModal(modal)
        });
    });
}

export function listenClose(button, modal, menu) {
    button.addEventListener('click', function () {
        removeModal(modal);
        if (menu === undefined || !menu.classList.contains('open-modal')) {
            removeBlur();
        }
    });
}