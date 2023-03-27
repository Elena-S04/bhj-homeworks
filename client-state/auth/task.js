const signin = document.getElementById("signin");
const btn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

if (localStorage.user_id) {
  welcomeActive();
}

function welcomeActive() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = localStorage.user_id;
}

function authorize() {
  const form = document.getElementById("signin__form");
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    let data = xhr.response;
    if (data.success === false) {
      alert("Неверный логин/пароль");
    } else {
      localStorage.setItem("user_id", data["user_id"]);
      welcomeActive();
    }
  });
  xhr.send(formData);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  authorize();
});

