const techsList = document.getElementById("techs-list");

const techs = [
  { name: "React", stack: "Front-End", src: "react" },
  { name: "Angular", stack: "Front-End", src: "angular" },
  { name: "Typescript", stack: "Full Stack", src: "typescript" },
  { name: "TailwindCSS", stack: "Front-End", src: "tailwindcss" },
  { name: "Bootstrap", stack: "Front-End", src: "bootstrap" },
  { name: "Jquery", stack: "Front-End", src: "jquery" },
  { name: "NodeJS", stack: "Back-End", src: "nodejs" },
  { name: "Java", stack: "Back-End", src: "java" },
  { name: "C#", stack: "Back-End", src: "csharp" },
  { name: "Firebase", stack: "Back-End", src: "firebase" },
  { name: "Mongodb", stack: "Database", src: "mongodb" },
  { name: "Mysql", stack: "Database", src: "mysql" },
  { name: "Postgresql", stack: "Database", src: "postgresql" },
  { name: "Springboot", stack: "ORM", src: "springboot" },
  { name: "Prisma", stack: "ORM", src: "prisma" },
  { name: "Electron", stack: "Desktop", src: "electron" },
  { name: "C++", stack: "", src: "cplusplus" },
  { name: "C", stack: "", src: "c" },
];


// Create the techs list for the techs section 
techs.forEach((tech) => {
  const li = document.createElement("li");
  
  const button = document.createElement("button");
  button.classList.add("tech");
  
  const span1 = document.createElement("span");
  span1.classList.add("typewriter");
  span1.textContent = tech.stack;

  const img = document.createElement("img");
  img.src = `./images/hardskills/${tech.src}.png`;

  const span2 = document.createElement("span");
  span2.classList.add("typewriter");
  span2.textContent = tech.name;

  li.appendChild(button);
  button.appendChild(span1);
  button.appendChild(img);
  button.appendChild(span2);

  techsList.appendChild(li);
});
