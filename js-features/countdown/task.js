//таймер в формате ХХ

// const initialTimer = document.getElementById("timer");

// function startTimer() {
//   if (+initialTimer.textContent === 0) {
//     window.alert("Вы победили в конкурсе!");
//     clearInterval(timerId);
//   } else {
//     initialTimer.textContent = +initialTimer.textContent - 1;
//   }
// }

// let timerId = setInterval(startTimer, 1000);

//таймер со скачиванием файла в формате хх.хх.хх

// const initialTimer = document.getElementById("timer");
// let seconds = Number(initialTimer.textContent);
// initialTimer.textContent = new Date(
//   2023,
//   1,
//   27,
//   0,
//   0,
//   seconds
// ).toLocaleTimeString();
// function countdownTimer() {
//   seconds--;
//   initialTimer.textContent = new Date(
//     2023,
//     1,
//     27,
//     0,
//     0,
//     seconds
//   ).toLocaleTimeString();

//   if (seconds === 0) {
//     clearInterval(intervalId);
//     alert("Вы победили в конкурсе!");
//     window.location.href = "./winning.zip";
//   }
// }
// const intervalId = setInterval(countdownTimer, 1000);

//таймер с переходом по ссылке в формате хх.хх.хх

const initialTimer = document.getElementById("timer");
const countDownDate = new Date().setSeconds(
  new Date().getSeconds() + Number(initialTimer.textContent)
);

function startTimer() {
  const currentDate = new Date().getTime();
  const countDown = new Date(countDownDate).getTime();
  const diff = (countDown - currentDate) / 1000;

  if (diff < 0) {
    window.alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
    window.location =
      "https://www.williampitt.com/wp-content/uploads/2017/03/ThinkstockPhotos-498981224.jpg";
  } else {
    let hh = String(Math.floor((diff % (60 * 60 * 24)) / (60 * 60))).padStart(
      2,
      "0"
    );
    let mm = String(Math.floor((diff % (60 * 60)) / 60)).padStart(2, "0");
    let ss = String(Math.floor(diff % 60)).padStart(2, "0");

    initialTimer.textContent = hh + ":" + mm + ":" + ss;
  }
}

startTimer();
let intervalId = setInterval(startTimer, 1000);
