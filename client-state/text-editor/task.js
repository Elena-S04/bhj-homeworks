const textarea = document.getElementById("editor");
const tab = document.querySelector(".tab");

textarea.value = localStorage.getItem("text");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});

tab.addEventListener("click", () => {
  textarea.value = "";
  localStorage.removeItem("text");
});
