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
