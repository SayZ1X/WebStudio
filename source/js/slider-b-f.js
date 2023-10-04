var divisor = document.getElementById("before"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value + "%";
  divisor.style.width = slider.value + "%";
  block.style.width = slider.value + "%";
}

window.onload = function () {
  moveDivisor();
};