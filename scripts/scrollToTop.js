const buttonScrollToTop = document.getElementById("scroll-to-top");

// Observer to show the button when the user scrolls past the first section
window.addEventListener("scroll", function () {
  const section2 = document.getElementById("section-2");

  // Position of the bottom of the second section
  const section2Bottom = section2.offsetTop + section2.offsetHeight;

  // Current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // If the scroll position is greater than the bottom of the second section, show the button
  if (scrollPosition >= section2Bottom) {
    buttonScrollToTop.classList.add("animate-scroll-to-top");
  } else {
    buttonScrollToTop.classList.remove("animate-scroll-to-top");
  }
});

// Opção para adicionar o comportamento de rolar até o topo ao clicar no botão
buttonScrollToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
