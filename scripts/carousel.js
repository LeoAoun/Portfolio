const projects = document.querySelectorAll(".project");
const prev = document.querySelector("#previous img");
const next = document.querySelector("#next img");

let counter = 0;

// Função para calcular o valor de translateX com base na largura da viewport
function calculateTranslateX() {
  if (window.innerWidth >= 1150) {
    return `calc(-62rem * ${counter})`;
  } else if (window.innerWidth < 1150 && window.innerWidth > 800) {
    return `calc(-42rem * ${counter})`;
  } else if (window.innerWidth <= 800 && window.innerWidth > 700) {
    return `calc(-32rem * ${counter})`;
  } else if (window.innerWidth <= 700 && window.innerWidth > 450) {
    return `calc(-22rem * ${counter})`;
  } else if(window.innerWidth <= 450 && window.innerWidth > 375) {
    return `calc(-20rem * ${counter})`;
  }
  else {
    return `calc(-19.5rem * ${counter})`;
  }
}

// Inicializar a imagem prev corretamente
if (counter === 0) prev.src = "images/chevron.png";

prev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;

    projects.forEach((project) => {
      project.style.transform = `translateX(${calculateTranslateX()})`;
    });

    next.src = "images/chevron-active.png";
    if (counter === 0) prev.src = "images/chevron.png";
    else prev.src = "images/chevron-active.png";
  }
});

next.addEventListener("click", () => {
  if (counter < projects.length - 1) {
    counter++;

    projects.forEach((project) => {
      project.style.transform = `translateX(${calculateTranslateX()})`;
    });

    prev.src = "images/chevron-active.png";
    if (counter === projects.length - 1) next.src = "images/chevron.png";
    else next.src = "images/chevron-active.png";
  }
});

// Recalcular o translateX quando a janela for redimensionada
window.addEventListener("resize", () => {
  projects.forEach((project) => {
    project.style.transform = `translateX(${calculateTranslateX()})`;
  });
});
