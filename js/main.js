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

// change background header

// function scrollHeader() {
//   const header = document.getElementById("header");
//   console.log(header);
//   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 50) header.classList.add("scroll");
//   else header.classList.remove("scroll");
// }
// window.addEventListener("scroll", scrollHeader);

const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 50) header.classList.add("scroll");
  else header.classList.remove("scroll");
};

window.addEventListener("scroll", scrollHeader);

// scroll up

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// scroll to section

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
