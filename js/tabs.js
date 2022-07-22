// Scrol a ==============================
document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});
//Burger=================================
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("animate");
});

// ======================================
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.mobile-nav__btn-nav')) {
    var dropdowns = document.getElementsByClassName("mobile-nav__content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
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
  duplicateItemsAllowed: null,
});

// Accordion====================================
(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0],
  });
})();

// GuestsNavCart================================
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".accordion__painter-link")
    .forEach(function (tabsBtn) {
      tabsBtn.addEventListener("click", function (dro) {
        dro.preventDefault();
        const path = dro.currentTarget.dataset.path;
        document
          .querySelectorAll(".accordion__painter-link")
          .forEach(function (btn) {
            btn.classList.remove("accordion__painter-link--active");
          });
        dro.currentTarget.classList.add("link__text--active");
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

// Swiper============================================================================
const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 12,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    930: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const swiperPrev = document.getElementById("swiperPrev");
const swiperNext = document.getElementById("swiperNext");

swiperPrev.addEventListener("click", () => {
  mySwiper.slidePrev();
});
swiperNext.addEventListener("click", () => {
  mySwiper.slideNext();
});

// Modal=============================================
const btns = document.querySelectorAll(".header__btn-enter");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const closeButton = document.querySelectorAll(".modal__close");
const closeButtonA = document.querySelectorAll(".modal__discr a");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

closeButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
});

closeButtonA.forEach((el) => {
  el.addEventListener("click", (e) => {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  });
});
