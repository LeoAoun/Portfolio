const projects = document.querySelectorAll(".project");
const prev = document.querySelector("#previous img");
const next = document.querySelector("#next img");

let counter = 0;
let startX = 0;
let isDragging = false;

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
  } else if (window.innerWidth <= 600 && window.innerWidth > 530) {
    return `calc(-24.4rem * ${counter})`;
  } else if (window.innerWidth <= 530 && window.innerWidth > 375) {
    return `calc(-21.5rem * ${counter})`;
  } else {
    return `calc(-17.5rem * ${counter})`;
  }
}

// Initialize the translateX value for the projects container
if (counter === 0) prev.src = "images/projects/chevron.png";

// Function to handle dragging
function startDrag(event) {
  isDragging = true;
  startX = event.type.includes("mouse")
    ? event.pageX
    : event.touches[0].clientX;

  // Change cursor to grabbing
  projects.forEach((project) => {
    project.style.cursor = "grabbing";
  });
}

function drag(event) {
  if (!isDragging) return;

  const currentX = event.type.includes("mouse")
    ? event.pageX
    : event.touches[0].clientX;
  const deltaX = (currentX - startX) * 10;

  projects.forEach((project) => {
    project.style.transform = `translateX(calc(${calculateTranslateX()} + ${deltaX}px))`;
  });
}

function endDrag(event) {
  if (!isDragging) return;
  isDragging = false;

  const endX = event.type.includes("mouse")
    ? event.pageX
    : event.changedTouches[0].clientX;
  const deltaX = endX - startX;

  if (deltaX > 50 && counter > 0) {
    // Swipe right
    counter--;
  } else if (deltaX < -50 && counter < projects.length - 1) {
    // Swipe left
    counter++;
  }

  projects.forEach((project) => {
    project.style.transform = `translateX(${calculateTranslateX()})`;

    // Restore cursor to default
    project.style.cursor = "grab";
  });

  // Update navigation buttons
  prev.src =
    counter === 0
      ? "images/projects/chevron.png"
      : "images/projects/chevron-active.png";
  next.src =
    counter === projects.length - 1
      ? "images/projects/chevron.png"
      : "images/projects/chevron-active.png";
}

// Add event listeners for the previous
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

// Add event listener for the next button
next.addEventListener("click", () => {
  if (counter < projects.length - 1) {
    counter++;

    projects.forEach((project) => {
      project.style.transform = `translateX(${calculateTranslateX()})`;
    });

    prev.src = "images/projects/chevron-active.png";
    if (counter === projects.length - 1)
      next.src = "images/projects/chevron.png";
    else next.src = "images/projects/chevron-active.png";
  }
});

// Add event listeners for dragging with touch or mouse
projects.forEach((project) => {
  // Touch events
  project.addEventListener("touchstart", startDrag);
  project.addEventListener("touchmove", drag);
  project.addEventListener("touchend", endDrag);

  // Mouse events
  project.addEventListener("mousedown", startDrag);
  project.addEventListener("mousemove", drag);
  project.addEventListener("mouseup", endDrag);
  project.addEventListener("mouseleave", endDrag);
});

// Resize event listener to adjust the translateX value for the projects container
window.addEventListener("resize", () => {
  projects.forEach((project) => {
    project.style.transform = `translateX(${calculateTranslateX()})`;
  });
});
