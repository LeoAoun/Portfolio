const cardTitle = document.getElementById("card-title");
const cardBusiness = document.getElementById("card-business");
const cardDate = document.getElementById("date");
const cardTime = document.getElementById("time");
const cardDescription = document.getElementById("card-description");
const tabs = document.querySelectorAll(".experience-tab");

// Define the keys for each experience
const ExperienceKeys = {
  PRODAM: "prodam",
  VIVO: "vivo",
};

// Data for each experience
const experiencesData = {
  [ExperienceKeys.PRODAM]: {
    title: {
      pt: "Desenvolvedor C++",
      en: "C++ Developer",
    },
    business: "PRODAM/SP",
    date: "03/2023 - 03/2025",
    description: {
      pt: `Atuei no desenvolvimento e manutenção em C++ do módulo de folha de pagamentos do SIGPEC, utilizado pela Prefeitura de São Paulo para gerenciar mais de 220 mil servidores. Minhas tarefas cobriam desde a implementação de novas funcionalidades e otimização de código até a execução de testes e correção de bugs, visando sempre garantir a precisão total dos cálculos e a conformidade com a legislação.`,
      en: `I worked on the development and maintenance in C++ of the SIGPEC payroll module, used by the São Paulo City Hall to manage over 220,000 public servants. My tasks ranged from implementing new features and optimizing code to performing tests and fixing bugs, always aiming to ensure total calculation accuracy and compliance with legislation.`,
    },
  },
  [ExperienceKeys.VIVO]: {
    title: {
      pt: "Analista Cyber Security",
      en: "Cyber Security Analyst",
    },
    business: "Vivo (Telefônica)",
    date: "03/2025 - Atualmente",
    description: {
      pt: `Desenvolvo aplicações baseadas em arquitetura de microsserviços utilizando Java (Spring Boot) e Node.js (TypeScript) no back-end, com comunicação assíncrona via RabbitMQ, persistência em PostgreSQL e Redis, e interfaces em React (Next.js), aplicando testes automatizados com JUnit e Mockito. Simultaneamente, atuo com DevSecOps na implementação de pipelines de CI/CD para a engenharia, integrando validações de segurança (SAST, DAST, SCA, IaC Scanning, SBOM Scanning e ASPM) para assegurar a conformidade dos projetos.`,
      en: `I develop microservices-based applications using Java (Spring Boot) and Node.js (TypeScript) on the backend, with asynchronous communication via RabbitMQ, persistence in PostgreSQL and Redis, and interfaces in React (Next.js), applying automated tests with JUnit and Mockito. Simultaneously, I work in DevSecOps implementing CI/CD pipelines for the engineering team, integrating security validations (SAST, DAST, SCA, IaC Scanning, SBOM Scanning, and ASPM) to ensure project compliance.`,
    },
  },
};

// Helper function to update the experience card translation
function updateCardForLanguage(lang) {
  const activeExperienceTab = document.querySelector("#section-4 .experience-tab.active");
  if (activeExperienceTab && typeof updateCard === "function") {
    updateCard(activeExperienceTab.dataset.key, lang);
  }
}

// Function to update the card content based on the selected experience
function updateCard(experienceKey) {
  // Get the current language
  const currentLanguage = localStorage.getItem("language") || "pt";

  const data = experiencesData[experienceKey];

  if (!data) return;

  // Translate the date
  let dateText = data.date;
  if (currentLanguage === "en") {
    dateText = dateText.replace("Atualmente", "Present");
  }
  cardDate.textContent = dateText;

  cardTitle.textContent = data.title[currentLanguage];
  cardBusiness.textContent = data.business;
  cardDescription.textContent = data.description[currentLanguage];
}

// Click event listener for each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => t.classList.remove("active"));
    const clickedTab = e.currentTarget;
    clickedTab.classList.add("active");
    updateCard(clickedTab.dataset.key);
  });
});

// Initialize the card with the first experience
updateCard(ExperienceKeys.VIVO);
