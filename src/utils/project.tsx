import mazaBarbershop from "../assets/img/mazaBarbershop.png";


import {
  html,
  css,
  javascript,
  sass,
  
} from "./icons";

const projects = [
  {
    img: mazaBarbershop,
    title: "Maza Barbershop",
    description:
      "Este projeto parece ser um site elegante para uma barbearia, construído com foco em design e utilizando tecnologias web modernas.",
    repository: "https://github.com/darioreisjr/maza_barbershop",
    deploy: "https://mazabarbershop.vercel.app/",
    skill: ["HTML5", "CSS3", "JavaScript", "sass"],
    icon: [html, css, javascript, sass],
    createdAt: "10/06/2024",
  },
]

const projectsSorted = projects.sort((a, b) => {
  const dateA = new Date(a.createdAt.split("/").reverse().join("/"));
  const dateB = new Date(b.createdAt.split("/").reverse().join("/"));

  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
});

export default projectsSorted;