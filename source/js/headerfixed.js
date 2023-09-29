function checkScroll() {

    // Переменные

    const header = document.querySelector('.header');
    const header__burger = document.querySelector('.header__burger');
    const conteiner = document.querySelector('.header__conteiner');

    let scrollPos = window.scrollY;

    // console.log(scrollPos);
    // header.classList.add("fixedToScroll");
    // header.classList.remove("fixedToScroll");

    if (scrollPos > 1) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

window.addEventListener("scroll", function fixedHeader() {
    checkScroll()
});

document.addEventListener("DOMContentLoaded", function () {
    checkScroll()
});