const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(i) {
  return document.getElementById("hole"+ i);
}

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);

  function moleGame() {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    if (dead.textContent == 10) {
      alert('Победа!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    
    if (lost.textContent == 5) {
      alert('Поражение');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }

  hole.onclick = moleGame;
}