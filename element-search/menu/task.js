// const arrMenuItem = Array.from(document.querySelectorAll(".menu__link"));
// const itemMenu = document.querySelectorAll(".menu__item");

// for (let i = 0; i < arrMenuItem.length; i++) {
//   const link = arrMenuItem[i];
//   const item = link.closest(".menu__item");
//   const subMenu = item.querySelector(".menu_sub");
//   link.onclick = function () {
//     if (subMenu && subMenu.className.includes("menu_active")) {
//       subMenu.className = "menu menu_sub";
//       return false;
//     }
//     if (subMenu) {
//       subMenu.className = "menu menu_sub menu_active";
//       return false;
//     }
//   };
// }

const sub = document.querySelectorAll("ul.menu_sub");
const allMenu = Array.from(document.querySelectorAll("li.menu__item"));

allMenu.forEach((element) => {
  if (element.closest(".menu_sub") === null) {
    element.querySelector("a").onclick = () => {
      if (
        element.querySelector("ul") &&
        element.querySelector("ul").className === "menu menu_sub menu_active"
      ) {
        element.querySelector("ul").className = "menu menu_sub";
        return false;
      } else {
        sub.forEach((elementUl) => (elementUl.className = "menu menu_sub"));
        if (element.querySelector("ul")) {
          element.querySelector("ul").className = "menu menu_sub menu_active";
          return false;
        }
      }
    };
  }
});
