function renderProjects(lang) {
  const carouselContainer = document.querySelector("#carousel");
  const currentLanguage = lang;

  const projectsData = [
    {
      title: {
        pt: "Jobinder Backend",
        en: "Jobinder Backend",
      },
      videoSrc: "jobinder",
      techs: ["java", "springboot", "rabbitmq", "redis", "postgresql", "docker"],
      description: {
        pt: `Backend robusto construído em arquitetura de microsserviços orientada a eventos com Java 17 e Spring Boot 3. O sistema gerencia autenticação (JWT), comunicação assíncrona (RabbitMQ) e chat em tempo real (WebSockets). Cada serviço (Auth, Identity, Matching e Chat) possui seu banco de dados isolado, garantindo desacoplamento e escalabilidade, tudo orquestrado via Docker Compose e documentado com Swagger.`,
        en: `Robust Backend built on an event-driven microservices architecture using Java 17 and Spring Boot 3. The system manages authentication (JWT), asynchronous communication (RabbitMQ), and real-time chat (WebSockets). Each service (Auth, Identity, Matching and Chat) has an isolated database, ensuring decoupling and scalability, all orchestrated via Docker Compose and documented with Swagger.`,
      },
      codeLink: "https://github.com/LeoAoun/Jobinder-Backend-Java",
      siteLink: null,
    },
    {
      title: {
        pt: "Jobinder",
        en: "Jobinder",
      },
      videoSrc: "jobinder",
      techs: ["react", "css", "typescript"],
      description: {
        pt: `MVP de uma plataforma inovadora para contratação de serviços, com uma interface de cartões deslizáveis ("swipe") para conectar clientes e profissionais de forma ágil. Desenvolvido com React, TypeScript e CSS, o projeto simula uma experiência de usuário completa, utilizando o armazenamento do navegador para gerenciar perfis, "matches" e conversas sem utilizar um backend real.`,
        en: `An MVP of an innovative platform for hiring services, featuring a swipeable card interface to quickly connect clients and professionals. Developed with React, TypeScript, and CSS, the project simulates a complete user experience, using browser storage to manage profiles, matches, and conversations without a real backend.`,
      },
      codeLink: "https://github.com/LeoAoun/Jobinder",
      siteLink: null,
    },
    {
      title: {
        pt: "To-Do App",
        en: "To-Do App",
      },
      videoSrc: "to-do-app-full-stack",
      techs: ["react", "css", "typescript", "nodejs", "prisma", "postgresql", "docker"],
      description: {
        pt: `To-do App é uma aplicação completa de lista de tarefas, desenvolvida com tecnologias modernas para o front-end, back-end e banco de dados, além de utilizar containers Docker para facilitar a implantação. Os usuários podem registrar, fazer login e gerenciar tarefas de forma eficiente, incluindo filtragens diversas.`,
        en: `A full-stack to-do list application developed with modern technologies for the front-end, back-end, and database, also using Docker containers for easy deployment. Users can register, log in, and efficiently manage tasks, including various filtering options.`,
      },
      codeLink: "https://github.com/LeoAoun/To-Do-App-Full-Stack",
      siteLink: null,
    },
    {
      title: {
        pt: "Pedra, Papel e Tesoura",
        en: "Rock, Paper, Scissors",
      },
      videoSrc: "rock-paper-scissors",
      techs: ["html", "css", "javascript"],
      description: {
        pt: `Meu primeiro projeto de estudo em desenvolvimento web. Inicialmente, desenvolvi-o para jogar no navegador. Mais tarde, ao aprender a utilizar o Electron, um framework que permite o desenvolvimento de aplicações desktop, aprimorei meu projeto para funcionar fora da web.`,
        en: `My first web development study project. Initially, I developed it to be played in the browser. Later, upon learning to use Electron, a framework for building desktop apps, I enhanced my project to run outside the web.`,
      },
      codeLink: "https://github.com/LeoAoun/Rock-Paper-Scissors",
      siteLink: "https://leoaoun.github.io/Rock-Paper-Scissors/",
    },
    {
      title: {
        pt: "Pixel Art",
        en: "Pixel Art",
      },
      videoSrc: "pixel-art",
      techs: ["react", "css"],
      description: {
        pt: `Pixel Art foi meu primeiro projeto utilizando React.js. Para pintar o quadro, clique em uma cor da paleta e, em seguida, no local desejado. É possível passar o mouse para pré-visualizar a cor. Curiosidade: também é possível pintar as letras do texto.`,
        en: `Pixel Art was my first project using React.js. To paint on the canvas, click a color from the palette and then click on the desired spot. You can hover to preview the color. Fun fact: it's also possible to paint the text letters.`,
      },
      codeLink: "https://github.com/LeoAoun/Pixel-Art",
      siteLink: "https://leoaoun.github.io/Pixel-Art/",
    },
    {
      title: {
        pt: "Três em linha",
        en: "Tic-Tac-Toe",
      },
      videoSrc: "tic-tac-toe-react",
      techs: ["react", "tailwindcss"],
      description: {
        pt: `Três em linha foi meu segundo projeto feito usando React.js, além de usar Tailwind CSS pela primeira vez. Diferentemente do projeto anterior, foi necessário utilizar mais conhecimentos de lógica para verificar as jogadas, o momento em que o jogo termina e alterar a tela de "fim de jogo" dependendo do resultado da partida.`,
        en: `Tic-Tac-Toe was my second project built with React.js, and my first time using Tailwind CSS. Unlike previous projects, this one required more advanced logic to verify moves, determine when the game ends, and change the 'game over' screen based on the match's result.`,
      },
      codeLink: "https://github.com/LeoAoun/Tic-Tac-Toe-React",
      siteLink: "https://leoaoun.github.io/Tic-Tac-Toe-React/",
    },
    {
      title: {
        pt: "Weather App",
        en: "Weather App",
      },
      videoSrc: "weather-app",
      techs: ["html", "css", "javascript"],
      description: {
        pt: `Meu primeiro projeto utilizando uma API, desenvolvido usando HTML, CSS e JavaScript. Ele integra uma API de clima para buscar informações de cidades do mundo e outra API para buscar uma imagem relacionada. O projeto enfrenta desafios com a API de imagens, que às vezes retorna resultados não relacionados à cidade e apresenta lentidão.`,
        en: `My first project utilizing an API, developed using HTML, CSS, and JavaScript. It integrates a weather API to fetch information for cities worldwide and another API to find a related image. The project faces challenges with the image API, as it sometimes returns unrelated results and experiences search latency.`,
      },
      codeLink: "https://github.com/LeoAoun/Weather-App",
      siteLink: "https://leoaoun.github.io/Weather-App/",
    },
    {
      title: {
        pt: "Mercado Livre",
        en: "Mercado Livre Search Site",
      },
      videoSrc: "mercado-livre",
      techs: ["react", "css", "typescript"],
      description: {
        pt: `Após estudar APIs, aprofundei meus conhecimentos em TypeScript desenvolvendo um site de compras que utiliza a API do Mercado Livre. No projeto, os usuários podem pesquisar produtos, adicioná-los ao carrinho e removê-los, com toda a interface implementada em React e TypeScript.`,
        en: `After studying APIs, I deepened my knowledge of TypeScript by developing a shopping site that uses the Mercado Livre API. In this project, users can search for products, add them to the cart, and remove them, with the entire interface implemented in React and TypeScript.`,
      },
      codeLink: "https://github.com/LeoAoun/Mercado-Livre-Site",
      siteLink: "https://leoaoun.github.io/Mercado-Livre-Site/",
    },
  ];

  function createProjectHTML(project) {
    const techsHTML = project.techs
      .map((tech) => `<img src="./images/hardskills/${tech}.png" />`)
      .join("");
    const siteButtonClass = project.siteLink ? "button-site" : "button-site-inactive";
    const siteLink = project.siteLink ? `href="${project.siteLink}" target="_blank"` : "";
    const trans = translations[currentLanguage];

    return `
      <div class="project">
        <div class="container-1">
          <div class="video">
            <video muted autoplay loop src="./videos/${project.videoSrc}.mp4" type="video/mp4"></video>
          </div>
        </div>
        <div class="container-2">
          <div class="details">
            <span class="project-title">${project.title[currentLanguage]}</span>
            <div class="used-techs">
              <span>${trans.section5_project_techs_used}</span>
              ${techsHTML}
            </div>
            <span class="description">${project.description[currentLanguage]}</span>
          </div>
          <div class="buttons">
            <button tabindex="-1" class="button-code">
              <a tabindex="-1" href="${project.codeLink}" target="_blank">${trans.section5_project_code_button}</a>
            </button>
            <button tabindex="-1" class="${siteButtonClass}">
              <a tabindex="-1" ${siteLink}>${trans.section5_project_site_button}</a>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  carouselContainer.innerHTML = projectsData.map(createProjectHTML).join("");
}
