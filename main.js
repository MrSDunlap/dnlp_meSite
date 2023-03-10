// Navbar hide and show on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    document.querySelector(".nav-background").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-111px";
    document.querySelector(".nav-background").style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;
};

gsap.registerPlugin(Flip);
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    //get the state
    const state = Flip.getState(cards);

    //Add the active class to the active card and the inactive class to the others
    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if (!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive");
      }
    });
    if (!isCardActive) card.classList.add("active");

    //animation
    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absolute: true,
    });
  });
});

// MODAL ----------------------------------------------

// open modal
const caseStudy = document.querySelector(".case-study");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const nav = document.querySelector("nav");

caseStudy.addEventListener("click", () => {
  nav.classList.toggle("top");
  modal.classList.toggle("visible");
  console.log("button has been clicked");
});

// Nav ____________________________________________
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    const navActive = navLink.classList.contains("active-link");

    navLinks.forEach((otherNavLink, otherIdx) => {
      otherNavLink.classList.remove("active-link");
      if (!navActive) navLink.classList.add("active-link");
    });
  });
});
