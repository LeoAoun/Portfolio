const projects = document.querySelectorAll("#carousel .project");
const prev = document.querySelector("#previous img");
const next = document.querySelector("#next img");

let counter = 0;
let startX = 0;
let isDragging = false;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId;

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
    return `calc(-17rem * ${counter})`;
  }
}

// Function to get slide width in pixels
function getSlideWidth() {
  if (window.innerWidth >= 1150) {
    return 62 * 16; // 62rem to pixels (assuming 16px = 1rem)
  } else if (window.innerWidth < 1150 && window.innerWidth > 800) {
    return 38.5 * 16;
  } else if (window.innerWidth <= 800 && window.innerWidth > 700) {
    return 32 * 16;
  } else if (window.innerWidth <= 700 && window.innerWidth > 600) {
    return 30 * 16;
  } else if (window.innerWidth <= 600 && window.innerWidth > 530) {
    return 24.4 * 16;
  } else if (window.innerWidth <= 530 && window.innerWidth > 375) {
    return 21.5 * 16;
  } else {
    return 17 * 16;
  }
}

// Initialize the translateX value for the projects container
if (counter === 0) prev.src = "images/projects/chevron.png";

// Add CSS transition for smooth movement
projects.forEach((project) => {
  project.style.transition = "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  project.style.cursor = "grab";
});

// Function to update navigation buttons
function updateNavButtons() {
  prev.src = counter === 0 ? "images/projects/chevron.png" : "images/projects/chevron-active.png";
  next.src =
    counter === projects.length - 1
      ? "images/projects/chevron.png"
      : "images/projects/chevron-active.png";
}

// Function to animate to position
function animateToPosition() {
  projects.forEach((project) => {
    project.style.transition = "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    project.style.transform = `translateX(${calculateTranslateX()})`;
  });
  updateNavButtons();
}

// Function to handle dragging
function startDrag(event) {
  event.preventDefault();
  isDragging = true;
  startX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;

  prevTranslate = -counter * getSlideWidth();

  // Remove transition during drag for smooth movement
  projects.forEach((project) => {
    project.style.transition = "none";
    project.style.cursor = "grabbing";
  });

  // Cancel any ongoing animation
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
}

function drag(event) {
  if (!isDragging) return;

  event.preventDefault();

  const currentX = event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;

  const deltaX = currentX - startX;
  currentTranslate = prevTranslate + deltaX;

  // Limit drag to boundaries with elastic effect
  const slideWidth = getSlideWidth();
  const maxTranslate = 0;
  const minTranslate = -(projects.length - 1) * slideWidth;

  if (currentTranslate > maxTranslate) {
    // Elastic effect at the beginning
    currentTranslate = maxTranslate + (currentTranslate - maxTranslate) * 0.3;
  } else if (currentTranslate < minTranslate) {
    // Elastic effect at the end
    currentTranslate = minTranslate + (currentTranslate - minTranslate) * 0.3;
  }

  projects.forEach((project) => {
    project.style.transform = `translateX(${currentTranslate}px)`;
  });
}

function endDrag(event) {
  if (!isDragging) return;

  isDragging = false;

  const endX = event.type.includes("mouse") ? event.pageX : event.changedTouches[0].clientX;

  const deltaX = endX - startX;
  const slideWidth = getSlideWidth();

  const threshold = slideWidth * 0.3;

  let targetCounter = counter;

  if (Math.abs(deltaX) > threshold) {
    if (deltaX > 0 && counter > 0) {
      // Swipe right - go to previous
      targetCounter = counter - 1;
    } else if (deltaX < 0 && counter < projects.length - 1) {
      // Swipe left - go to next
      targetCounter = counter + 1;
    }
  }

  counter = targetCounter;

  // Restore cursor and animate to final position
  projects.forEach((project) => {
    project.style.cursor = "grab";
  });

  // Animate to final position
  animateToPosition();
}

// Add event listeners for the previous button
prev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    animateToPosition();
  }
});

// Add event listener for the next button
next.addEventListener("click", () => {
  if (counter < projects.length - 1) {
    counter++;
    animateToPosition();
  }
});

// Add event listeners for dragging with touch or mouse
projects.forEach((project) => {
  // Touch events
  project.addEventListener("touchstart", startDrag, { passive: false });
  project.addEventListener("touchmove", drag, { passive: false });
  project.addEventListener("touchend", endDrag);

  // Mouse events
  project.addEventListener("mousedown", startDrag);
  project.addEventListener("mousemove", drag);
  project.addEventListener("mouseup", endDrag);
  project.addEventListener("mouseleave", endDrag);

  // Prevent text selection during drag
  project.addEventListener("dragstart", (e) => e.preventDefault());
});

// Resize event listener to adjust the translateX value for the projects container
window.addEventListener("resize", () => {
  projects.forEach((project) => {
    project.style.transform = `translateX(${calculateTranslateX()})`;
  });
});
