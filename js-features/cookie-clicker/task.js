//без подсчета кликов в секунду
// const image = document.getElementById("cookie");
// const clickerCounter = document.getElementById("clicker__counter");
// function clicker() {
//     clickerCounter.textContent = Number(clickerCounter.textContent) +1;
//     if (clickerCounter.textContent % 2 === 0) {
//         image.width = 300;
//     } else {
//         image.width = 100;
//     }
// }
// image.onclick = clicker;

//с подсчетом кликов в секунду
const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let firstClick;

function clicker() {
  counter.textContent = Number(counter.textContent) + 1;

  if (Number(counter.textContent) % 2 !== 0) {
    image.width = image.width * 1.5;
  } else {
    image.width = image.width / 1.5;
  }

  if (Number(counter.textContent) === 1) {
    firstClick = new Date().getTime(); 
  } else {
    const lastClick = new Date().getTime(); 
    const totalTime = (lastClick - firstClick) / 1000; 
    speed.textContent = (Number(counter.textContent) / totalTime).toFixed(2);
  }
}

image.onclick = clicker;