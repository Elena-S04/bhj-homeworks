const font = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

function changeSize(e) {
  clear();
  font[e].classList.add("font-size_active");
  if (font[e].classList.contains("font-size_small")) {
    book.classList.add("book_fs-small");
  }
  if (font[e].classList.contains("font-size_big")) {
    book.classList.add("book_fs-big");
  }
  return false;
}

function clear() {
  font.forEach((item) => item.classList.remove("font-size_active"));
  book.classList.remove("book_fs-big");
  book.classList.remove("book_fs-small");
}

for (const i in font) {
  font[i].onclick = () => changeSize(i);
}
