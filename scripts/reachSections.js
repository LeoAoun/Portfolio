// Event listener to animate the sections when the user scrolls to them
document.addEventListener("scroll", () => {
  const scrollDown = document.getElementById("scroll-down");
  const position2 = section2.getBoundingClientRect();
  const position3 = section3.getBoundingClientRect();
  const position4 = section4.getBoundingClientRect();
  const position5 = section5.getBoundingClientRect();
  const position6 = section6.getBoundingClientRect();

  const offset = window.innerHeight * 0.4;

  if (position2.top < window.innerHeight - offset && position2.bottom >= 0) {
    section2.classList.add("animate-section-2");
    titleSubtitle[1].classList.add("animate-section-2");

    // Hide the scroll-down when the user reaches the second section
    scrollDown.style.display = "none";
  }
  if (position2.top > window.innerHeight - offset) {
    // Show the scroll-down when the user scrolls up from the second section
    scrollDown.style.display = "block";
  }
  if (position2.top > window.innerHeight - offset || position2.bottom <= 250) {
    section2.classList.remove("animate-section-2");
    titleSubtitle[1].classList.remove("animate-section-2");
  }

  if (position3.top < window.innerHeight - offset && position3.bottom >= 0) {
    section3.classList.add("animate-section-3");
    titleSubtitle[2].classList.add("animate-section-3");
  }
  if (position3.top > window.innerHeight - offset || position3.bottom <= 250) {
    section3.classList.remove("animate-section-3");
    titleSubtitle[2].classList.remove("animate-section-3");
  }

  if (position4.top < window.innerHeight - offset && position4.bottom >= 0) {
    section4.classList.add("animate-section-4");
    titleSubtitle[3].classList.add("animate-section-4");
  }
  if (position4.top > window.innerHeight - offset || position4.bottom <= 250) {
    section4.classList.remove("animate-section-4");
    titleSubtitle[3].classList.remove("animate-section-4");
  }

  if (position5.top < window.innerHeight - offset && position5.bottom >= 0) {
    section5.classList.add("animate-section-5");
    titleSubtitle[4].classList.add("animate-section-5");
    section5Container1.forEach((container) =>
      container.classList.add("animate-section-5")
    );
    section5Container2.forEach((container) =>
      container.classList.add("animate-section-5")
    );
  }
  if (position5.top > window.innerHeight - offset || position5.bottom <= 250) {
    section5.classList.remove("animate-section-5");
    titleSubtitle[4].classList.remove("animate-section-5");
    section5Container1.forEach((container) =>
      container.classList.remove("animate-section-5")
    );
    section5Container2.forEach((container) =>
      container.classList.remove("animate-section-5")
    );
  }

  if (position6.top < window.innerHeight - offset && position6.bottom >= 0) {
    section6.classList.add("animate-section-6");
    titleSubtitle[5].classList.add("animate-section-6");
    section6Container1.classList.add("animate-section-6");
    section6Container2.classList.add("animate-section-6");
  }
  if (position6.top > window.innerHeight - offset || position6.bottom <= 250) {
    section6.classList.remove("animate-section-6");
    titleSubtitle[5].classList.remove("animate-section-6");
    section6Container1.classList.remove("animate-section-6");
    section6Container2.classList.remove("animate-section-6");
  }
});
