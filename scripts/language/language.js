const langButtons = document.querySelectorAll(".lang-btn");

function setActiveLanguage(lang) {
  localStorage.setItem("language", lang);

  langButtons.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  translatePage(lang); // Translate all static elements on the page

  updateCardForLanguage(lang); // Update the experience card

  renderProjects(lang); // Render the projects
  initializeCarousel(); // Initialize the carousel for newly created projects
}

// Translate every possible element on the page
function translatePage(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-translate-key]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    const translation = translations[lang] && translations[lang][key];

    if (translation) {
      if (element.nodeName === "INPUT" && element.type === "submit") {
        element.value = translation;
      } else if (element.placeholder !== undefined) {
        element.placeholder = translation;
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

// Add click event listeners to language buttons
langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLang = button.getAttribute("data-lang");
    setActiveLanguage(selectedLang);
  });
});

function initializeLanguage() {
  // Verify if a language is saved in localStorage
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    setActiveLanguage(savedLanguage);
    return;
  }

  // If no language is saved, use the browser's language
  const browserLang = navigator.language.slice(0, 2);
  const initialLang = browserLang === "en" ? "en" : "pt";
  setActiveLanguage(initialLang);
}

initializeLanguage();
