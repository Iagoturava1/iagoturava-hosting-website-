let sliderImages = document.querySelectorAll(".slide"),
  arrowRight = document.querySelector("#arrow-right"),
  arrowLeft = document.querySelector("#arrow-left"),
  i = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlider() {
  reset();
  sliderImages[i].style.display = "";
}
arrowRight.addEventListener("click", function () {
  if (i > sliderImages.length - 2) {
    i = -1;
  }
  i++;
  startSlider();
});
arrowLeft.addEventListener("click", function () {
  if (i === 0) {
    i = sliderImages.length;
  }
  i--;
  startSlider();
});

function alert1() {
  let y = 1;
  alert(y);
  y++;
  setTimeout(alert1, 6000);
}
// alert1()

startSlider();

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const barr = document.querySelector(".barr");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  barr.classList.toggle("active");
});
