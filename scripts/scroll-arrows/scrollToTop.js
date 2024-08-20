// Observer to show the button when the user scrolls past the first section
window.addEventListener("scroll", function () {
  // Position of the bottom of the second section
  const section2Bottom = section2.offsetTop + section2.offsetHeight;

  // Current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // If the scroll position is greater than the bottom of the second section, show the button
  if (scrollPosition >= section2Bottom) {
    scrollToTop.classList.add("animate-scroll-to-top");
  } else {
    scrollToTop.classList.remove("animate-scroll-to-top");
  }
});

// Scroll to the top of the page when the button is clicked
scrollToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
