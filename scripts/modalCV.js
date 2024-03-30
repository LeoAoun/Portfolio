const modalCV = document.getElementById("modal-cv");
const buttonCV = document.getElementById("button-modal-cv");
const cv = document.getElementById("cv");
const cvSpan = document.querySelector(".cv-span");

buttonCV.addEventListener("click", () => {
  modalCV.style.display = "block";
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target == modalCV) modalCV.style.display = "none";
});

// Move the span with the cursor
cv.addEventListener("mousemove", (e) => {
  cvSpan.style.display = "block";
  cvSpan.style.top = e.clientY + 20 + "px";
  cvSpan.style.left = e.clientX + 20 + "px";
});

// Hide the span when the cursor leaves the element
cv.addEventListener("mouseleave", () => {
  cvSpan.style.display = "none";
});
