document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  nav.classList.add("nav-first-state");
});
setTimeout(() => {
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  const section1 = document.getElementById("section-1");
  const section2 = document.getElementById("section-2");
  const section3 = document.getElementById("section-3");
  const section4 = document.getElementById("section-4");
  const section5 = document.getElementById("section-5");
  const section6 = document.getElementById("section-6");

  section1.classList.remove("disable-all");
  section2.classList.remove("disable-all");
  section3.classList.remove("disable-all");
  section4.classList.remove("disable-all");
  section5.classList.remove("disable-all");
  section6.classList.remove("disable-all");


  const loading = document.getElementById("loading");
  loading.classList.add("animate-loading-translate");

  document.body.style.overflow = "";

  const background = document.getElementById("background");
  background.style.display = "block";

  const nav = document.getElementById("nav");
  nav.classList.remove("disable-all");
  nav.classList.add("animate-nav");

  const container1 = document.querySelector("#section-1 .container-1");
  container1.classList.add("animate-container-1");

  const container2 = document.querySelector("#section-1 .container-2");
  container2.classList.add("animate-container-2");

  const container2Img = document.querySelector("#section-1 .container-2 img");
  container2Img.classList.add("animate-container-2");

  setTimeout(() => {
    const loadingBackground = document.querySelector(".loading-background");
    loadingBackground.style.display = "none";
  }, 500);

  setTimeout(() => {
    nav.classList.add("animate-nav-loading");
  }, 100);

  setTimeout(() => {
    nav.classList.remove("nav-first-state");

    setTimeout(() => {
      nav.classList.remove("animate-nav-loading");
    }, 1500);
  }, 1000);
}, 3000);
