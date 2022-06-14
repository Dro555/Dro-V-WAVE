//Burger=================================
document
  .querySelector(".burger-top__burger")
  .addEventListener("click", function () {
    document
      .querySelector(".burger-top__burger-line")
      .classList.toggle("active");
    document
      .querySelector(".burger-top__burger-items")
      .classList.toggle("animate");
  });
// Like==================================
var count_btns = document.body.querySelectorAll(".like__count");

for (var i = 0; i < count_btns.length; i++) {
  count_btns[i].id = "a" + i;
  count_btns[i].appendChild(document.createElement("span"));
  count_btns[i].onclick = handler;
}

function handler(event) {
  var span = event.target.querySelector("span");
  if (!span) span = event.target;
  var count = parseInt(span.innerText);
  span.innerText = Number.isNaN(count) ? 1 : ++count;
}
// Next podcast============================
document
  .querySelector(".podcast__btn-next")
  .addEventListener("click", function () {
    var elements = document.getElementsByClassName("item-blok");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("item-blok_active");
    }
  });
// Select===================================
const element = document.querySelector("#selectCustom");
const choices = new Choices(element, {
  searchEnabled: false,
  position: "bottom",
  itemSelectText: "",
});
// GuestsNav================================
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav-list__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (dro) {
      const path = dro.currentTarget.dataset.path;
      document.querySelectorAll(".nav-list__btn").forEach(function (btn) {
        btn.classList.remove("nav-list__btn--active");
      });
      dro.currentTarget.classList.add("nav-list__btn--active");
      document
        .querySelectorAll(".guest-cart__item")
        .forEach(function (tabsBtn) {
          tabsBtn.classList.remove("guest-cart__item--active");
        });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("guest-cart__item--active");
    });
  });
});
