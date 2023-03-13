const rotator = Array.from(document.querySelectorAll(".rotator__case"));

function changeView() {
  let i = rotator.findIndex((item) =>
    item.classList.contains("rotator__case_active")
  );
  if (i < rotator.length - 1) {
    rotator[i].classList.remove("rotator__case_active");
    rotator[i + 1].classList.add("rotator__case_active");
  } else {
    rotator[i].classList.remove("rotator__case_active");
    rotator[0].classList.add("rotator__case_active");
  }
}

setInterval(changeView, 1000);
