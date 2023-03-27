const popup = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");
let closed = Boolean(getCookie("closed"));

if (!popup.classList.contains("modal_active") && !closed) {
  popup.classList.add("modal_active");
}

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie ? cookie.substring(name.length + 1) : false;
}

close.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("modal_active");
  setCookie("closed", "true");
});
