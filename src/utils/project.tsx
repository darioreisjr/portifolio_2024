import mazaBarbershop from "../assets/img/mazaBarbershop.png";
import cafeBugado from "../assets/img/cafeBufgado.png";
import devStore from "../assets/img/devStore.png";
import kissNotes from "../assets/img/KissNotes.png";
import portfolio2023 from "../assets/img/portifolio2023.png";

import {
  html,
  css,
  javascript,
  sass,
  tailwindcss,
  react,
  typescript,
  vite,
  styledcomponents,

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
  {
    img: cafeBugado,
    title: "Café Bugado",
    description:
      "Este projeto utiliza ReactJS para criar uma interface interativa para uma cafeteria moderna, voltada para desenvolvedores de código. A aplicação apresenta informações sobre a cafeteria, como localização, horário de funcionamento e cardápio. O cardápio lista os produtos disponíveis, com fotos, descrições e preços. Os usuários podem visualizar os produtos por categoria e adicionar itens ao carrinho de compras. A aplicação também oferece a opção de realizar pedidos online para retirada ou entrega.",
    repository: "https://github.com/darioreisjr/projeto-cafe-bugado-reactjs",
    deploy: "https://cafebugado.vercel.app/",
    skill: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCss"],
    icon: [html, css, javascript, react, tailwindcss],
    createdAt: "05/03/2024",
  },
  {
    img: devStore,
    title: "E-commerce devstore",
    description:
      "O DevStore é uma loja virtual moderna e completa. Possui interface amigável, layout responsivo para qualquer dispositivo e otimização para SEO, facilitando a busca por produtos.",
    repository: "https://github.com/darioreisjr/projeto-de-e-commerce-devstore",
    deploy: "https://DEVSTORE.vercel.app/",
    skill: ["Typescript", "React", "TailwindCss"],
    icon: [typescript, react, tailwindcss],
    createdAt: "10/02/2024",
  },
  {
    img: kissNotes,
    title: "KissNotes",
    description:
      "O KissNotes é um aplicativo de bloco de notas minimalista e intuitivo, construído com ReactJS, Vite e Styled Components. Ele oferece uma interface simples e fácil de usar para criar, editar e organizar notas de texto, links e outros recursos. O KissNotes é perfeito para quem procura uma maneira rápida e eficiente de tomar notas, organizar ideias e salvar informações importantes.",
    repository: "https://github.com/darioreisjr/kissnotes_reactjs",
    deploy: "https://kissnotes.netlify.app/",
    skill: ["React", "Vite", "Styled Components"],
    icon: [react, vite, styledcomponents],
    createdAt: "14/03/2024",
  },
  {
    img: portfolio2023,
    title: "Portfolio versão 2023",
    description:
      "Desenvolver uma plataforma web de um portfólio pessoal, para a construção deste projeto foi usado Next.js e TailwindCss.E um projeto que é uma compilação de materiais que exemplificam minhas crenças, habilidades, qualificações, educação, treinamento e experiências. Ele fornece informações sobre minha personalidade e ética de trabalho. Amostras de trabalho e outros detalhes, conforme explicado acima. Está intimamente relacionado ao Currículo Online ou CV.",
    repository: "https://github.com/darioreisjr/portifolio2023",
    deploy: "https://darioreisjr.vercel.app/",
    skill: ["React", "typeScript", "tailwindCss"],
    icon: [react, tailwindcss, tailwindcss],
    createdAt: "01/03/2023",
  },
  {
    img: portfolio2023,
    title: "Gerador de Citações ",
    description:
      "Este projeto e um gerador de citações, uma aplicação web que exibe citações aleatórias ou personalizadas. Ele utiliza HTML, CSS e JavaScript, com uma estrutura simples e organizada.",
    repository: "https://github.com/darioreisjr/gerador_de_citacoes_js",
    deploy: "https://darioreisjr.github.io/gerador_de_citacoes_js/",
    skill: ["HTML", "CSS", "JavaScript"],
    icon: [html, css, javascript],
    createdAt: "01/05/2024",
  },
];

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
