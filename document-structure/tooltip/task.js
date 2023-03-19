const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
console.log(tooltip);

tooltips.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (element.contains(document.querySelector(".tooltip_active"))) {
      tooltip.classList.remove("tooltip_active");
    } else {
      tooltip.classList.add("tooltip_active");
      tooltip.innerText = element.title;
      element.appendChild(tooltip);

      let { bottom, left } = element.getBoundingClientRect();
      tooltip.style.top = bottom + "px";
      tooltip.style.left = left + "px";
    }
  });
});