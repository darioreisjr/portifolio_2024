import styles from "./About.module.scss";

import Button from "../../components/Button/Button";
import InfoItem from "../../components/InfoItem/InfoItem";
import SkillItem from "../../components/SkillItem/SkillItem";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title from "../../components/Title/Title";

import {
  css,
  html,
  javascript,
  react,
  redux,
  styledcomponents,
  tailwindcss,
  typescript,
  vite,
  sass,
  gulp,
  figma,
  node,
  mysql,
  mongodb,
  prisma,
  fastify,
  webpack,
  express,
  docker,
  git,
  github,
} from "../../utils/icons";

export default function About() {
  const skills = [
    {
      skill: "HTML",
      icon: html,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      skill: "CSS",
      icon: css,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    { skill: "SASS", icon: sass, href: "https://sass-lang.com/" },
    {
      skill: "JavaScript",
      icon: javascript,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    { skill: "Gulp", icon: gulp, href: "https://gulpjs.com/" },
    { skill: "Webpack", icon: webpack, href: "https://webpack.js.org/" },
    { skill: "React.js", icon: react, href: "https://reactjs.org/" },
    { skill: "Vite", icon: vite, href: "https://vitejs.dev/" },
    {
      skill: "Styled Components",
      icon: styledcomponents,
      href: "https://styled-components.com/",
    },
    {
      skill: "TypeScript",
      icon: typescript,
      href: "https://www.typescriptlang.org/",
    },
    { skill: "Redux", icon: redux, href: "https://redux.js.org/" },

    {
      skill: "Tailwind CSS",
      icon: tailwindcss,
      href: "https://tailwindcss.com/",
    },
    { skill: "Figma", icon: figma, href: "https://www.figma.com/" },
    { skill: "Node.js", icon: node, href: "https://nodejs.org/en/" },
    { skill: "Express.js", icon: express, href: "https://expressjs.com/" },
    { skill: "MongoDB", icon: mongodb, href: "https://www.mongodb.com/" },
    { skill: "MySQL", icon: mysql, href: "https://www.mysql.com/" },
    { skill: "Prisma", icon: prisma, href: "https://www.prisma.io/" },
    { skill: "Fastify", icon: fastify, href: "https://www.fastify.io/" },
    { skill: "Docker", icon: docker, href: "https://www.docker.com/" },
    { skill: "Git", icon: git, href: "https://git-scm.com/" },
    { skill: "GitHub", icon: github, href: "https://github.com/" },
  ];

  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "block", left: "16.875rem" }}
    >
      <div className="container">
        <Title title="Sobre mim" />

        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.text}>
                <h3>
                  Me chamo Dario Reis e sou <span>Desenvolvedor FullStack</span>
                </h3>
                <p>
                  Sou um Desenvolvedor Full Stack com formação em Análise e
                  Desenvolvimento de Sistemas. Minha paixão por tecnologia e
                  programação me impulsiona a buscar constantemente novos
                  desafios e oportunidades para evoluir minhas habilidades. Com
                  uma base sólida tanto no front-end quanto no back-end, estou
                  sempre empenhado em aprender novas tecnologias e aplicar as
                  melhores práticas no desenvolvimento de soluções inovadoras.
                </p>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.info}>
                <InfoItem pText="Cidade : " spanText="São Paulo" />
                <InfoItem pText="Estado : " spanText="SP" />
                <InfoItem
                  pText="Email : "
                  aText="dev.darioreis@gmail.com"
                  aHref="mailto:dev.darioreis@gmail.com"
                />
                <InfoItem
                  pText="Telefone : "
                  aText="(11) 9 6188-9886"
                  aHref="tel:5511961889886"
                />
                <InfoItem
                  pText="LinkedIn : "
                  aText="in/darioreisjr"
                  aHref="https://www.linkedin.com/in/darioreisjr"
                />
                <InfoItem
                  pText="GitHub : "
                  aText="darioreisjr"
                  aHref="https://github.com/darioreisjr"
                />

                <div className={styles.buttons}>
                  <Button
                    href="../../../public/pdf/cv_Dario-Reis_desenvolvedor_full_stack.pdf"
                    download
                  >
                    Baixar CV
                  </Button>
                  <Button href="contact">Contate-me</Button>
                </div>
              </div>

              <div className={styles.skills}>
                <div className={styles.row}>
                  {skills.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      icon={skill.icon}
                      href={skill.href}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.education}>
                <h3 className={styles.title}>Educação</h3>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="2021 - 2023"
                      title="Análise e Desenvolvimento de Sistemas"
                      subtitle="Tecnólogo"
                      text="Especializado em Análise e Desenvolvimento de Sistemas, com foco em arquitetura de software e desenvolvimento de aplicações. Experiência em modelagem de dados, gestão de projetos e requisitos."
                    />
                  </div>
                </div>
              </div>

              <div className={styles.experience}>
                <h3 className={styles.title}>Experiência</h3>

                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="nov de 2023 - até o momento"
                      title="Atendente | Especialista em Gestão de Pessoas e eSocial"
                      subtitle="Healthwork Medicina e Segurança no Trabalho · Tempo integral"
                      text="Gerenciamento e atualização do cadastro de colaboradores, incluindo informações pessoais, profissionais e contratuais.
                            Identificação e correção de erros cadastrais, assegurando a integridade e confiabilidade dos dados.
                            Análise de Erros de Cadastros:"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="ago de 2023 - até o momento"
                      title="Desenvolvedor web front end"
                      subtitle="Workana · Freelance"
                      text="Como desenvolvedor de aplicações web, tenho experiência com as tecnologias React.js, Typescript, 
                      Next.js, Vite e Node. Minha responsabilidade inclui tanto o frontend como o backend, usando NodeJS e 
                      tecnologias front-end (ReactJS, HTML, CSS, etc.). Além disso, desenvolvo, implemento e mantenho vários 
                      aplicativos voltados para o cliente, empregando minhas habilidades em UX/UI para criar soluções que 
                      atendam às necessidades do usuário. Também sou responsável por lidar com solicitações e chamadas em 
                      APIs Restful, além de desenvolver funcionalidades usando React Hooks e testes unitários com o Jest."
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="mar de 2023 - ago de 2023 · 6 meses"
                      title="Porteiro"
                      subtitle="Grupo BravoTE · Terceirizado"
                      text="Controlar o acesso às dependências do edifício sob minha responsabilidade; Facilidade de comunicação com os moradores e demais usuários do condomínio; Respeito às regras do condomínio; Disposição para atender com presteza às solicitações; Lidar com o recebimento e entrega de mensagens e encomendas; Monitorar o estacionamento, orientar manobras e identificar vagas correspondentes a cada unidade; Capacidade de realizar pequenos reparos de elétrica ou hidráulica; Dar suporte à equipe de vigilância, comunicando ocorrências e fazendo chamadas de emergência quando necessário; Sou pontual, prestativo e procuro sempre recepcionar as pessoas com simpatia. Controlar o acesso às dependências do edifício sob minha responsabilidade; Facilidade de comunicação com os moradores e demais usuários do condomínio; Respeito às regras do condomínio; Disposição para atender com presteza às solicitações; Lidar com o recebimento e entrega de mensagens e encomendas; Monitorar o estacionamento, orientar manobras e identificar vagas correspondentes a cada unidade ; Capacidade de realizar pequenos reparos de elétrica ou hidráulica; Dar suporte à equipe de vigilância, comunicando ocorrências e fazendo chamadas de emergência quando necessário."
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="fev de 2021 - abr de 2022 · 1 ano 3 meses"
                      title="Porteiro"
                      subtitle="Verzani & Sandrini · Terceirizado"
                      text="Controlar o acesso às dependências do edifício sob minha responsabilidade; Facilidade de comunicação com os moradores e demais usuários do condomínio; Respeito às regras do condomínio; Disposição para atender com presteza às solicitações; Lidar com o recebimento e entrega de mensagens e encomendas; Monitorar o estacionamento, orientar manobras e identificar vagas correspondentes a cada unidade; Capacidade de realizar pequenos reparos de elétrica ou hidráulica; Dar suporte à equipe de vigilância, comunicando ocorrências e fazendo chamadas de emergência quando necessário; Sou pontual, prestativo e procuro sempre recepcionar as pessoas com simpatia. Controlar o acesso às dependências do edifício sob minha responsabilidade; Facilidade de comunicação com os moradores e demais usuários do condomínio; Respeito às regras do condomínio; Disposição para atender com presteza às solicitações; Lidar com o recebimento e entrega de mensagens e encomendas; Monitorar o estacionamento, orientar manobras e identificar vagas correspondentes a cada unidade ; Capacidade de realizar pequenos reparos de elétrica ou hidráulica; Dar suporte à equipe de vigilância, comunicando ocorrências e fazendo chamadas de emergência quando necessário."
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="nov de 2013 - nov de 2016 · 3 anos 1 mês"
                      title="Auxiliar de escritório"
                      subtitle="Portaln3 · Tempo integral"
                      text="Auxiliar na digitação de documentos, preparar relatórios e planilhas, organizar arquivos, controlar estoque do material de escritório e realizar atendimento telefônico e presencial.
                      Controla estoque do material de escritório
                      Realizava atendimento telefônico e presencial."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
