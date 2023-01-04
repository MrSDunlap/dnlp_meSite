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