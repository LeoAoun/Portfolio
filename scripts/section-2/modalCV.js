const modalCV = document.getElementById("modal-cv");
const buttonCV = document.getElementById("button-modal-cv");
const cv = document.getElementById("cv");
const cvClose = document.getElementById("cv-close");
const cvSpan = document.querySelector(".cv-span");
const buttonCloseModal = document.getElementById("close-modal");

// Verify if the parameter is in the url when the page loads and open the modal
const params = new URLSearchParams(window.location.search);
if (params.get("modalcv") === "true") {
  modalCV.style.display = "block";
}

// Function to update the url
function updateUrl(params) {
  const url = new URL(window.location.href);
  url.search = params.toString();
  window.history.pushState({}, "", url);
}

// Handle popstate event to synchronize modal state with URL
window.addEventListener("popstate", () => {
  checkModalState();
});

// Function to check URL parameter and manage modal visibility
function checkModalState() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("modalcv") === "true") {
    modalCV.style.display = "block";
  } else {
    modalCV.style.display = "none";
  }
}

// Open the modal when the user clicks on the button and add the parameter to the url
buttonCV.addEventListener("click", () => {
  modalCV.style.display = "block";
  params.set("modalcv", "true");
  updateUrl(params);
});

// Close the modal when the user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target == modalCV) {
    modalCV.style.display = "none";
    params.delete("modalcv");
    updateUrl(params);
  }
});

// Close the modal when the user clicks on the close button
buttonCloseModal.addEventListener("click", () => {
  modalCV.style.display = "none";
  params.delete("modalcv");
  updateUrl(params);
});

// Move the close span with the cursor
modalCV.addEventListener("mousemove", (e) => {
  if (e.target !== buttonCloseModal) {
    cvClose.style.display = "block";
    cvClose.style.top = e.clientY + 20 + "px";
    if (window.innerWidth > 900) {
      cvClose.style.left = e.clientX + 20 + "px";
    } else {
      cvClose.style.left = e.clientX - 160 + "px";
    }
  }
  else {
    cvClose.style.display = "none";
  }
});

// Move the span with the cursor
cv.addEventListener("mousemove", (e) => {
  cvSpan.style.display = "block";
  cvSpan.style.top = e.clientY + 20 + "px";
  if (window.innerWidth > 900) {
    cvSpan.style.left = e.clientX + 20 + "px";
  } else {
    cvSpan.style.left = e.clientX - 160 + "px";
  }
});

// Hide the close span when the cursor leaves the element
modalCV.addEventListener("mouseleave", (e) => {
  if (e.target == cv) cvClose.style.display = "none";
});

// Hide the span when the cursor leaves the element
cv.addEventListener("mouseleave", () => {
  cvSpan.style.display = "none";
});
