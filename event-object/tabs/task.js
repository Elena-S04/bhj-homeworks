const navigation = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

navigation.forEach((element, index) => {
  element.onclick = function () {
    let lastIndex = navigation.findIndex((e) =>
      e.classList.contains("tab_active")
    );
    navigation[lastIndex].classList.remove("tab_active");
    contents[lastIndex].classList.remove("tab__content_active");
    element.classList.add("tab_active");
    contents[index].classList.add("tab__content_active");
  };
});
