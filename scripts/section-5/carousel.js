const projects = document.querySelectorAll(".project");
const prev = document.querySelector("#previous img");
const next = document.querySelector("#next img");

let counter = 0;

// Function to calculate the translateX value for the projects container 
function calculateTranslateX() {
  if (window.innerWidth >= 1150) {
    return `calc(-62rem * ${counter})`;
  } else if (window.innerWidth < 1150 && window.innerWidth > 800) {
    return `calc(-38.5rem * ${counter})`;
  } else if (window.innerWidth <= 800 && window.innerWidth > 700) {
    return `calc(-32rem * ${counter})`;
  } else if (window.innerWidth <= 700 && window.innerWidth > 600) {
    return `calc(-30rem * ${counter})`;
  } else if(window.innerWidth <= 600 && window.innerWidth > 530) {
    return `calc(-24.4rem * ${counter})`;
  }
  else if(window.innerWidth <= 530 && window.innerWidth > 375){
    return `calc(-21.5rem * ${counter})`;
  }
  else {
    return `calc(-17.5rem * ${counter})`;
  }
}

// Initialize the translateX value for the projects container
if (counter === 0) prev.src = "images/projects/chevron.png";

prev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;

    projects.forEach((project) => {
      project.style.transform = `translateX(${calculateTranslateX()})`;
    });

    next.src = "images/projects/chevron-active.png";
    if (counter === 0) prev.src = "images/projects/chevron.png";
    else prev.src = "images/projects/chevron-active.png";
  }
});


next.addEventListener("click", () => {
  if (counter < projects.length - 1) {
    counter++;

    projects.forEach((project) => {
      project.style.transform = `translateX(${calculateTranslateX()})`;
    });

    prev.src = "images/projects/chevron-active.png";
    if (counter === projects.length - 1) next.src = "images/projects/chevron.png";
    else next.src = "images/projects/chevron-active.png";
  }
});

// Resize event listener to adjust the translateX value for the projects container
window.addEventListener("resize", () => {
  projects.forEach((project) => {
    project.style.transform = `translateX(${calculateTranslateX()})`;
  });
});
