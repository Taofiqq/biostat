// NAVIGATION TOGGLE

// Show navigation menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show");
  });
}

// Hide Navigation Menu
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

// END OF NAVIGATION TOGGLE

// Dark anf Light Mode

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "ri-sun-fill";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
});
console.log(themeButton);

// SCROLL HEADER
const scrollHeader = () => {
  const nav = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (window.scrollY >= 200) nav.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

// END OF SCROLL HEADER

// SCROLL UP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// END OF SCROLL UP

// SCROLL TO PARTICULAR SECTION
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

// END OF SCROLL TO PARTICULAR SECTION

// TESTIMONIALS SWIPER

let swiperTestimonial = new Swiper(".testimonial__container ", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

// END OF TESTIMONIALS SWIPER

// MAKE THE ABOUT PAGE BUTTON DYNAMIC
const b = document.getElementById("toggle-btn");
b.innerText = "See More";
const displayText = () => {
  const x = document.getElementById("hide");
  if (x.style.display === "none") {
    x.style.display = "block";
    b.innerText = "See Less";
  } else {
    x.style.display = "none";
    b.innerText = "See More";
  }
};

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delat: 400,
  // reset: true
});

sr.reveal(".home__title");
sr.reveal(".home__subtitle", { delay: 500 });
sr.reveal(".home__img", { delay: 800 });
sr.reveal(".home__button", { delay: 1000, interval: 200, origin: "bottom" });
sr.reveal(".about__group", { origin: "left" });
sr.reveal(".about__data", { origin: "right" });
sr.reveal(".section__title", { origin: "right" });
sr.reveal(".services__content", { origin: "right" });
sr.reveal(".section__subtitle", { origin: "right" });
sr.reveal(".testimonial__container", { origin: "left" });
sr.reveal(".footer__content", { origin: "right" });
sr.reveal(".footer__copy", { origin: "bottom" });

// END OF SCROLL REVEAL

// DARK AND LIGHT MODE
