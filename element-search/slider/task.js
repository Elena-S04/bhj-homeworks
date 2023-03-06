const slides = Array.from(document.querySelectorAll("div.slider__item"));
const right = document.getElementsByClassName(
  "slider__arrow slider__arrow_next"
);
const left = document.getElementsByClassName(
  "slider__arrow slider__arrow_prev"
);
const dots = Array.from(document.querySelectorAll("div.slider__dot"));
let number = 0;

function hideSlide() {
  slides[number].className = "slider__item";
  dots[number].className = "slider__dot";
}

function showSlide() {
  slides[number].className = "slider__item slider__item_active";
  dots[number].className = "slider__dot slider__dot_active";
}

function countSlide() {
  number = (number + slides.length) % slides.length;
}

right[0].onclick = () => {
  hideSlide();
  number++;
  countSlide();
  showSlide();
};

left[0].onclick = () => {
  hideSlide();
  number--;
  countSlide();
  showSlide();
};

dots.forEach((dot, item) => {
  dot.onclick = () => {
    hideSlide();
    number = item;
    showSlide();
  };
});
