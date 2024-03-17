const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");
const section5 = document.getElementById("section-5");
const section6 = document.getElementById("section-6");

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

document.addEventListener("scroll", () => {
  const position2 = section2.getBoundingClientRect();
  const position3 = section3.getBoundingClientRect();
  const position4 = section4.getBoundingClientRect();
  const position5 = section5.getBoundingClientRect();
  const position6 = section6.getBoundingClientRect();

  const offset = window.innerHeight * 0.4;
  if (position2.top < window.innerHeight - offset && position2.bottom >= 0)
    section2.classList.add("animate-section-2");
  if (position2.top > window.innerHeight - offset && position2.bottom >= 0)
    section2.classList.remove("animate-section-2");

  if (position3.top < window.innerHeight - offset && position3.bottom >= 0)
    section3.classList.add("animate-section-3");
  if (position3.top > window.innerHeight - offset && position3.bottom >= 0)
    section3.classList.remove("animate-section-3");

  if (position4.top < window.innerHeight - offset && position4.bottom >= 0)
    section4.classList.add("animate-section-4");
  if (position4.top > window.innerHeight - offset && position4.bottom >= 0)
    section4.classList.remove("animate-section-4");

  if (position5.top < window.innerHeight - offset && position5.bottom >= 0)
    section5.classList.add("animate-section-5");
  if (position5.top > window.innerHeight - offset && position5.bottom >= 0)
    section5.classList.remove("animate-section-5");

  if (position6.top < window.innerHeight - offset && position6.bottom >= 0)
    section6.classList.add("animate-section-6");
  if (position6.top > window.innerHeight - offset && position6.bottom >= 0)
    section6.classList.remove("animate-section-6");
});
