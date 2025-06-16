const icons = document.querySelectorAll("#section-1 .social-media svg");

icons.forEach((icon) => {
  icon.addEventListener("touchstart", () => {
    icon.style.transform = "translateY(-0.5rem)";
    icon.style.fill = "var(--purple)";

    setTimeout(() => {
      icon.style.transform = "translateY(0)";
      icon.style.fill = "var(--orange)";
    }, 300);
  });
});
