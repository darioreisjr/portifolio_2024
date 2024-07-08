import mazaBarbershop from "../assets/img/mazaBarbershop.png";
import cafeBugado from "../assets/img/cafeBufgado.png";
import devStore from "../assets/img/devStore.png";

import {
  html,
  css,
  javascript,
  sass,
  tailwindcss,
  react,
  typescript,
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
    skill: ["Typescript", "React", "Next.js", "TailwindCss"],
    icon: [typescript, react, tailwindcss],
    createdAt: "10/02/2024",
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
