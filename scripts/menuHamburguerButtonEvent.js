const menuButton = document.getElementById("menu-button");

const nav = document.getElementById("nav");
const menu = document.getElementById("menu");

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const item4 = document.getElementById("item-4");

let clicked = false;

menuButton.addEventListener("click", () => {
  const line1 = document.getElementById("line-1");
  const line2 = document.getElementById("line-2");
  const line3 = document.getElementById("line-3");

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
    nav.style.height = "100vh";

    menu.classList.remove("menu-out");
    menu.classList.add("menu-in");

    item1.style.display = "block";
    item2.style.display = "block";
    item3.style.display = "block";
    item4.style.display = "block";

    clicked = true;
  } else {
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

    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "none";

    clicked = false;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      nav.classList.remove("animate-nav-in");
      nav.classList.add("animate-nav-out");
      nav.style.backgroundColor = "transparent";
      nav.style.height = "84px";

      menu.classList.remove("menu-in");
      menu.classList.add("menu-out");
      menu.style.display = "flex";
      menu.style.flexDirection = "row";
      menu.style.justifyContent = "space-evenly";

      item1.style.display = "block";
      item2.style.display = "block";
      item3.style.display = "block";
      item4.style.display = "block";
    } else {
      if (!clicked) {
        menu.style.display = "none";

        item1.style.display = "none";
        item2.style.display = "none";
        item3.style.display = "none";
        item4.style.display = "none";

        clicked = false;
      } else {
        item1.style.display = "block";
        item2.style.display = "block";
        item3.style.display = "block";
        item4.style.display = "block";

        nav.classList.remove("animate-nav-out");
        nav.classList.add("animate-nav-in");
        nav.style.backgroundColor = "#121e27f8";
        nav.style.height = "100vh";

        menu.classList.remove("menu-out");
        menu.classList.add("menu-in");
        menu.style.flexDirection = "column";

        clicked = true;
      }
    }
  });
});
