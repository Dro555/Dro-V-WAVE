function toggleMenuTop() {
  const button = document.getElementById("burger-top");
  const menu = document.getElementById("nav");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}
function toggleMenu() {
  const button = document.getElementById("burger-top");
  const menu = document.getElementById("nav");
  button.classList.toggle("active");
  menu.classList.toggle("active");
}
// =============================================================
function myFunction() {
  var element = document.getElementById("myDropdown");
  if (element.classList.contains("mobile-nav__content")) {
    element.classList.replace("mobile-nav__content", "block");
  } else if (element.classList.contains("block")) {
    element.classList.replace("block", "mobile-nav__content");
  }
}

document.getElementById("mobnavbtn").addEventListener("click", myFunction);
