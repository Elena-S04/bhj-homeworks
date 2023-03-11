const value = document.querySelector(".dropdown__value");
const list = Array.from(document.querySelectorAll(".dropdown__list"));
const itemsList = Array.from(document.querySelectorAll(".dropdown__item"));

function clickItem() {
  itemsList.forEach((item) => {
    item.onclick = function () {
      value.textContent = item.textContent;
      item
        .closest(".dropdown__list_active")
        .classList.toggle("dropdown__list_active");
      return false;
    };
  });
}

function activeList() {
  list.forEach((element) => element.classList.toggle("dropdown__list_active"));
  clickItem();
}

value.addEventListener("click", activeList);
