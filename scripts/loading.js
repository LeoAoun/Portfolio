// Event when the page loads
document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  nav.classList.add("nav-first-state");
});

// Event load to animate the loading screen
setTimeout(() => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  removeDisable();

  const loading = document.getElementById("loading");
  loading.classList.add("animate-loading-translate");

  document.body.style.overflow = "";

  const background = document.getElementById("background");
  background.style.display = "block";

  animateNav();
  animateLanguageSwitcher();
  animateContainersSection1();

  setTimeout(() => {
    const loadingBackground = document.querySelector(".loading-background");
    loadingBackground.style.display = "none";
  }, 500);

  setTimeout(() => {
    nav.classList.add("animate-nav-loading");
  }, 100);

  setTimeout(() => {
    nav.classList.remove("nav-first-state");

    // Dispatch resize event to fix the particles.js bug
    window.dispatchEvent(new Event("resize"));

    setTimeout(() => {
      nav.classList.remove("animate-nav-loading");
    }, 1500);
  }, 1000);
}, 3000);

function removeDisable() {
  nav.classList.remove("disable");
  languageSwitcher.classList.remove("disable");
  section1.classList.remove("disable");
  section2.classList.remove("disable");
  section3.classList.remove("disable");
  section4.classList.remove("disable");
  section5.classList.remove("disable");
  section6.classList.remove("disable");
}

function animateNav() {
  nav.classList.add("animate-nav");
}

function animateLanguageSwitcher() {
  languageSwitcher.classList.add("animate-language-switcher");
}

function animateContainersSection1() {
  const container1 = document.querySelector("#section-1 .container-1");
  container1.classList.add("animate-container-1");

  const container2 = document.querySelector("#section-1 .container-2");
  container2.classList.add("animate-container-2");

  const container2Img = document.querySelector("#section-1 .container-2 img");
  container2Img.classList.add("animate-container-2");
}
