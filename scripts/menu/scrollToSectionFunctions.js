function closeMenu() {
  line1.classList.remove("animate-line-1");
  line2.classList.remove("animate-line-2");
  line3.classList.remove("animate-line-3");
  line1.classList.add("animate-line-1-out");
  line2.classList.add("animate-line-2-out");
  line3.classList.add("animate-line-3-out");

  nav.classList.remove("animate-nav-in");
  nav.classList.add("animate-nav-out");

  menu.classList.remove("menu-in");
  menu.classList.add("menu-out");

  document.body.style.overflow = "auto";

  clicked = false;
}

function scrollToSobre() {
  section2.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
  closeMenu();
}

function scrollToHardSkills() {
  section3.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
  closeMenu();
}

function scrollToExperiencia() {
  section4.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
  closeMenu();
}

function scrollToProjetos() {
  section5.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
  closeMenu();
}

function scrollToContato() {
  section6.scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: "smooth",
  });
  closeMenu();
}
