const modalCV = document.getElementById("modal-cv");
const buttonCV = document.getElementById("button-modal-cv");
const cv = document.getElementById("cv");
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

// Close the modal when the user clicks on the close button
buttonCloseModal.addEventListener("click", () => {
  modalCV.style.display = "none";
  params.delete("modalcv");
  updateUrl(params);
});