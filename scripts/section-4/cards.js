const cardTitle = document.getElementById("card-title");
const cardBusiness = document.getElementById("card-business");
const cardDate = document.getElementById("date");
const cardTime = document.getElementById("time");
const cardDescription = document.getElementById("card-description");
const tabs = document.querySelectorAll(".experience-tab");

// Data for each experience
const experiencesData = {
  prodam: {
    title: "Desenvolvedor C++",
    business: "PRODAM/SP",
    date: "03/2023 - 03/2025",
    description: `Atuei no desenvolvimento e manutenção do SIGPEC, o sistema de gestão de pessoas da Prefeitura de São Paulo, com foco no módulo de cálculo da folha de pagamento. Utilizando C++ e programação orientada a objetos, otimizei código legado, implementei novas funcionalidades e executei correções de bugs para garantir a precisão e a conformidade legal dos pagamentos dos servidores.`,
  },
  vivo: {
    title: "Analista Cyber Security",
    business: "Vivo (Telefônica)",
    date: "03/2025 - Atualmente",
    description: `Atuo no time de DevSecOps, desenvolvendo e mantendo pipelines de segurança para ambientes CI/CD. Integro ferramentas como Semgrep (SAST), OWASP ZAP e Tenable WAS (DAST), Dependency-Check (SCA), Trivy (IaC Scanning) e Dependency-Track (SBOM Scanning), com os resultados centralizados na plataforma DefectDojo (ASPM). Contribuo para a automação do ciclo de análise de vulnerabilidades e utilizo Python para otimizar processos internos da equipe por meio de scripts e automatizações.`,
  },
};

// Function to update the card content based on the selected experience
function updateCard(experienceKey) {
  const data = experiencesData[experienceKey];

  if (!data) return; // If no data found for the key, exit the function

  // Update the card content with the selected experience data
  cardTitle.textContent = data.title;
  cardBusiness.textContent = data.business;
  cardDate.textContent = data.date;
  cardDescription.textContent = data.description;
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
updateCard("prodam");
