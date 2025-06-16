document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header-menu");
  const menuClose = document.querySelector(".menu-close");

  menuToggle.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      menu.classList.contains("active") &&
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menu.classList.remove("active");
    }
  });

  if (menuClose) {
    menuClose.addEventListener("click", function (event) {
      menu.classList.remove("active");
      event.stopPropagation();
    });
  }

  menu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
