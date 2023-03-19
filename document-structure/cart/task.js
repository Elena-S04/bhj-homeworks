const controlQuantity = Array.from(
  document.querySelectorAll(".product__quantity-control")
);
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cart = document.querySelector(".cart__products");

controlQuantity.forEach((element) => {
  element.addEventListener("click", (e) => {
    let quantity = element
      .closest(".product__quantity")
      .querySelector(".product__quantity-value");
    if (element.classList.contains("product__quantity-control_inc")) {
      quantity.innerText++;
    } else if (
      element.classList.contains("product__quantity-control_dec") &&
      quantity.innerText > 1
    ) {
      quantity.innerText--;
    }
  });
});

productAdd.forEach((element) => {
  element.addEventListener("click", () => {
    const product = element.closest(".product");
    let id = product.getAttribute("data-id");
    let img = product.querySelector(".product__image").getAttribute("src");
    let count = product.querySelector(".product__quantity-value").innerText;

    function productInCart() {
      return Array.from(cart.children).find(
        (element) => element.dataset.id === id
      );
    }
    if (productInCart() === undefined) {
      cart.innerHTML += `<div class="cart__product" data-id="${id}">
            <img class="cart__product-image" src="${img}">
            <div class="cart__product-count">${count}</div>
         </div>`;
    } else {
      productInCart().querySelector(".cart__product-count").textContent =
        Number(
          productInCart().querySelector(".cart__product-count").textContent
        ) + Number(count);
    }
  });
});
