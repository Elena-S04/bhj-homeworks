const modalOpen = document.getElementById("modal_main");
const arrModalClose = Array.from(
  document.getElementsByClassName("modal__close")
);
const modalLuck = document.getElementById("modal_success");
const arrShowLuck = Array.from(
  document.getElementsByClassName("show-success")
);

modalOpen.className = "modal modal_active";

function close() {
  modalOpen.className = "modal";
  modalLuck.className = "modal";
}

for (let i = 0; i < arrModalClose.length; i++) {
  arrModalClose[i].onclick = close;
}

function showLuck() {
  modalOpen.className = "modal";
  modalLuck.className = "modal modal_active";
  }

arrShowLuck[0].onclick = showLuck;