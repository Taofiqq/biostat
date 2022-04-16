// Show menu

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show");
  });
}

// Hide Menu

if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show");
  });
}

// remvove menu when cicked

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
};

navLink.forEach((link) => {
  link.addEventListener("click", linkAction);
});
