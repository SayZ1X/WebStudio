//! ========= BURGER ==============

const burgerBtn = document.querySelector(".header-burger");
const elementsToBurger = ["header__links"];

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("burger-active");

  if (burgerBtn.classList.contains("burger-active")) {
    document.body.classList.add("lock");
    elementsToBurger.forEach((elementBurger) => {
      document.querySelectorAll(`.${elementBurger}`).forEach((el) => {
        el.classList.add("burger-active");
      });
    });
  } else {
    document.body.classList.remove("lock");
    elementsToBurger.forEach((elementBurger) => {
      document.querySelectorAll(`.${elementBurger}`).forEach((el) => {
        el.classList.remove("burger-active");
      });
    });
  }
});
