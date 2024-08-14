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