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
    title: "Desenvolvedor C++",
    business: "PRODAM/SP",
    date: "03/2023 - 03/2025",
    description: `Atuei no desenvolvimento e manutenção em C++ do módulo de folha de pagamentos do SIGPEC, utilizado pela Prefeitura de São Paulo para gerenciar mais de 220 mil servidores. Minhas tarefas cobriam desde a implementação de novas funcionalidades e otimização de código até a execução de testes e correção de bugs, visando sempre garantir a precisão total dos cálculos e a conformidade com a legislação.`,
  },
  [ExperienceKeys.VIVO]: {
    title: "Analista Cyber Security",
    business: "Vivo (Telefônica)",
    date: "03/2025 - Atualmente",
    description: `Lidero a implementação de pipelines de segurança CI/CD na Vivo, atuando como ponto focal técnico para as equipes de engenharia. Apoio a integração de um ecossistema de ferramentas de DevSecOps (SAST, DAST, SCA, IaC Scanning, ASPM, etc.) e soluciono desafios de conectividade para garantir a conformidade dos projetos. Adicionalmente, desenvolvo automações em Python para otimizar a produtividade e o fluxo de trabalho da equipe.`,
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
updateCard(ExperienceKeys.VIVO);
