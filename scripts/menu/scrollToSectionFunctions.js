const titleSubtitle = document.querySelectorAll(".title-subtitle");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");
const section5Container1 = document.querySelectorAll("#section-5 .container-1");
const section5Container2 = document.querySelectorAll("#section-5 .container-2");
const section6 = document.getElementById("section-6");
const section6Container1 = document.querySelector("#section-6 form");
const section6Container2 = document.querySelector("#section-6 .details");

function scrollToSobre() {
  section2.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function scrollToHardSkills() {
  section3.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function scrollToExperiencia() {
  section4.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function scrollToProjetos() {
  section5.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function scrollToContato() {
  section6.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
}

function scrollToMenu() {
  document
    .getElementById("menu")
    .scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
}

// Event listener to animate the sections when the user scrolls
document.addEventListener("scroll", () => {
  const position2 = section2.getBoundingClientRect();
  const position3 = section3.getBoundingClientRect();
  const position4 = section4.getBoundingClientRect();
  const position5 = section5.getBoundingClientRect();
  const position6 = section6.getBoundingClientRect();

  const offset = window.innerHeight * 0.4;

  if (position2.top < window.innerHeight - offset && position2.bottom >= 0) {
    section2.classList.add("animate-section-2");
    titleSubtitle[1].classList.add("animate-section-2");
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
