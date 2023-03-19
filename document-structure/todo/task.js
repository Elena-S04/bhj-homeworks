const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
document
  .getElementById("tasks__add")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value.trim() != "") {
      tasksList.insertAdjacentHTML(
        "afterbegin",
        `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
      );
      let cross = tasksList.querySelector(".task__remove");
      cross.addEventListener("click", func);
    }
    input.value = "";
  });

function func(event) {
  this.closest(".tasks__list").removeChild(event.target.closest(".task"));
}
