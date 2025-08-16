const carouselContainer = document.getElementById("carousel");

// Define all project data
const projectsData = [
  {
    title: "Jobinder",
    videoSrc: "jobinder",
    techs: ["react", "css", "typescript"],
    description: `MVP de uma plataforma inovadora para contratação de serviços, com uma interface de cartões deslizáveis ("swipe") para conectar clientes e profissionais de forma ágil. Desenvolvido com React, TypeScript e CSS, o projeto simula uma experiência de usuário completa, utilizando o armazenamento do navegador para gerenciar perfis, "matches" e conversas sem a utilizar um backend real.`,
    codeLink: "https://github.com/LeoAoun/Jobinder",
    siteLink: null,
  },
  {
    title: "To-Do App",
    videoSrc: "to-do-app-full-stack",
    techs: ["react", "css", "typescript", "nodejs", "prisma", "postgresql", "docker"],
    description: `To-do App é uma aplicação completa de lista de tarefas, desenvolvida com tecnologias modernas para lidarem com o front-end, back-end e database da aplicação, além de utilizar containers Docker para facilitar a implantação. Os usuários podem registrar, fazer login e gerenciar tarefas de forma eficiente, incluindo filtragens por prioridade, data de criação, completude e ordem alfabética.`,
    codeLink: "https://github.com/LeoAoun/To-Do-App-Full-Stack",
    siteLink: null,
  },
  {
    title: "Pedra, Papel e Tesoura",
    videoSrc: "rock-paper-scissors",
    techs: ["html", "css", "javascript"],
    description: `Meu primeiro projeto de estudo em desenvolvimento web foi o jogo "Pedra, Papel e Tesoura". Inicialmente, desenvolvi-o para jogar apenas no navegador. Mais tarde, ao aprender a utilizar o "Electron"; um framework open source que permite o desenvolvimento de aplicações desktop usando componentes Front-End e Back-End; aprimorei meu projeto para funcionar fora da web.`,
    codeLink: "https://github.com/LeoAoun/Rock-Paper-Scissors",
    siteLink: "https://leoaoun.github.io/Rock-Paper-Scissors/",
  },
  {
    title: "Pixel Art",
    videoSrc: "pixel-art",
    techs: ["react", "css"],
    description: `Pixel Art foi meu primeiro projeto utilizando React.js, uma biblioteca Front-End do JavaScript. Para pintar o quadro, clique em uma cor da paleta de cores e clique na parte do quadro que queira pintar, caso esteja em dúvida sobre qual cor utilizar, você pode apenas passar o mouse em cima do quadro com a cor selecionada para saber se a cor seria adequada. Curiosidade: também é possível pintar as letras do texto.`,
    codeLink: "https://github.com/LeoAoun/Pixel-Art",
    siteLink: "https://leoaoun.github.io/Pixel-Art/",
  },
  {
    title: "Três em linha",
    videoSrc: "tic-tac-toe-react",
    techs: ["react", "tailwindcss"],
    description: `Três em linha foi meu segundo projeto feito usando React.js, além de usar Tailwind CSS pela primeira vez, um framework CSS que permite criar layouts para suas aplicações web utilizando sua estrutura pronta. Diferentemente do projeto anterior, foi necessário utilizar mais conhecimentos de lógica para verificar as jogadas e o momento em que o jogo termina, além de alterar a tela de "fim de jogo" dependendo do resultado da partida.`,
    codeLink: "https://github.com/LeoAoun/Tic-Tac-Toe-React",
    siteLink: "https://leoaoun.github.io/Tic-Tac-Toe-React/",
  },
  {
    title: "Weather App",
    videoSrc: "weather-app",
    techs: ["html", "css", "javascript"],
    description: `Meu primeiro projeto utilizando uma API foi o Weather App, o qual foi desenvolvido usando HTML, CSS e JavaScript, com integração de uma API para fornecer informações sobre o clima de diversas cidades do mundo e outra API para buscar uma imagem aleatória relacionada à cidade. No entanto, o projeto enfrenta desafios com a API de imagens, às vezes retornando imagens não ligadas à cidade consultada e apresentando lentidão na busca.`,
    codeLink: "https://github.com/LeoAoun/Weather-App",
    siteLink: "https://leoaoun.github.io/Weather-App/",
  },
  {
    title: "Mercado Livre",
    videoSrc: "mercado-livre",
    techs: ["react", "css", "typescript"],
    description: `Após estudar APIs, decidi aprofundar meus conhecimentos em TypeScript e desenvolvi um projeto de compras utilizando a API do Mercado Livre. Neste projeto, os usuários podem pesquisar produtos, adicioná-los ao carrinho e removê-los, tudo isso implementado com React e TypeScript.`,
    codeLink: "https://github.com/LeoAoun/Mercado-Livre-Site",
    siteLink: "https://leoaoun.github.io/Mercado-Livre-Site/",
  },
];

function createProjectHTML(project) {
  // Create the image elements for the technologies used
  const techsHTML = project.techs
    .map((techSrc) => `<img src="./images/hardskills/${techSrc}.png" />`)
    .join("");

  // Define the class and link for the "Site" button (active or inactive)
  const siteButtonClass = project.siteLink ? "button-site" : "button-site-inactive";
  const siteLink = project.siteLink ? `href="${project.siteLink}" target="_blank"` : "";

  // Return the complete HTML template for a project
  return `
    <div class="project">
      <div class="container-1">
        <div class="video">
          <video muted autoplay loop src="./videos/${project.videoSrc}.mp4" type="video/mp4"></video>
        </div>
      </div>
      <div class="container-2">
        <div class="details">
          <span class="project-title">${project.title}</span>
          <div class="used-techs">
            <span>Tecnologias Usadas:</span>
            ${techsHTML}
          </div>
          <span class="description">${project.description}</span>
        </div>
        <div class="buttons">
          <button tabindex="-1" class="button-code">
            <a tabindex="-1" href="${project.codeLink}" target="_blank">Código</a>
          </button>
          <button tabindex="-1" class="${siteButtonClass}">
            <a tabindex="-1" ${siteLink}>Site</a>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Map the project data to HTML and insert it into the carousel container
carouselContainer.innerHTML = projectsData.map(createProjectHTML).join("");
