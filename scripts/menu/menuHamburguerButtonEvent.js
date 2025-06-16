const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");

let clicked = false;

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

// Event listener to animate the menu button and the nav
menuButton.addEventListener("click", () => {
  if (!clicked) {
    line1.classList.remove("animate-line-1-out");
    line2.classList.remove("animate-line-2-out");
    line3.classList.remove("animate-line-3-out");
    line1.classList.add("animate-line-1");
    line2.classList.add("animate-line-2");
    line3.classList.add("animate-line-3");

    nav.classList.remove("animate-nav-out");
    nav.classList.add("animate-nav-in");

    nav.style.backgroundColor = "#121e27f8";
    nav.style.height = "100dvh";

    menu.classList.remove("menu-out");
    menu.classList.add("menu-in");

    document.body.style.overflow = "hidden";

    clicked = true;
  } else {
    closeMenu();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      nav.classList.remove("animate-nav-in");
      nav.classList.add("animate-nav-out");
      nav.style.backgroundColor = "transparent";

      menu.classList.remove("menu-in");
      menu.classList.add("menu-out");
      menu.style.display = "flex";
      menu.style.flexDirection = "row";
    } else {
      if (!clicked) {
        menu.classList.add("menu-out");
        document.body.style.overflow = "auto";
        clicked = false;
      } else {
        nav.classList.remove("animate-nav-out");
        nav.classList.add("animate-nav-in");
        nav.style.backgroundColor = "#121e27f8";
        nav.style.height = "100dvh";

        menu.classList.remove("menu-out");
        menu.classList.add("menu-in");

        document.body.style.overflow = "hidden";

        clicked = true;
      }
    }
  });
});
