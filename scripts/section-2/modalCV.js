const modalCV = document.getElementById("modal-cv");
const buttonCV = document.getElementById("button-modal-cv");
const cvImage = document.getElementById("cv");
const buttonCloseModal = document.getElementById("close-modal");


function openModalCV() {
  const currentLanguage = localStorage.getItem("language") || "pt";

  const cvPath = currentLanguage === "en" ? "images/about/cv-en.png" : "images/about/cv-pt.png";

  cvImage.src = cvPath;
  modalCV.style.display = "block";

  // Update the URL to reflect the modal state
  const params = new URLSearchParams(window.location.search);
  params.set("modalcv", "true");
  updateUrl(params);
}


function closeModalCV() {
  modalCV.style.display = "none";

  // Update the URL to reflect the modal state
  const params = new URLSearchParams(window.location.search);
  params.delete("modalcv");
  updateUrl(params);
}

function updateUrl(params) {
  const url = new URL(window.location.href);
  url.search = params.toString();
  window.history.pushState({}, "", url);
}

function checkModalState() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("modalcv") === "true") {
    openModalCV();
  } else {
    modalCV.style.display = "none";
  }
}

// Check the initial state of the modal
const initialParams = new URLSearchParams(window.location.search);
if (initialParams.get("modalcv") === "true") {
  openModalCV();
}

buttonCV.addEventListener("click", openModalCV);
buttonCloseModal.addEventListener("click", closeModalCV);

// Listen for browser history navigation events
window.addEventListener("popstate", checkModalState);
