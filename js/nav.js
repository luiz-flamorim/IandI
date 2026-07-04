document.addEventListener("DOMContentLoaded", () => {
  const menuCheckbox = document.querySelector(".menu-checkbox");
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuCheckbox.checked = false;
    });
  });
});
