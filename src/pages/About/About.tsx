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
                      title="Análise e Desenvolvimento de Sistemas - Estácio"
                      subtitle="Faculdade"
                      text="O curso de Análise e Desenvolvimento de Sistemas na Estácio me proporcionou uma base sólida nas principais áreas da tecnologia da informação, com foco em desenvolvimento de software, análise de sistemas e gestão de projetos. A formação foi voltada para o desenvolvimento de soluções tecnológicas, utilizando metodologias ágeis e ferramentas modernas, sempre com foco em eficiência e inovação.

Principais Habilidades e Competências:
Análise de Sistemas: Modelagem e documentação de sistemas, utilizando UML e outras ferramentas de análise.
Desenvolvimento de Software: Programação orientada a objetos (POO), desenvolvimento web e mobile com Java, C#, e JavaScript.
Banco de Dados: Modelagem de dados, criação e manutenção de bancos de dados relacionais (SQL) e não relacionais (NoSQL).
Gestão de Projetos: Aplicação de metodologias ágeis como Scrum e Kanban para o gerenciamento de projetos de software.
Engenharia de Software: Boas práticas de engenharia, incluindo testes de software, versionamento de código e controle de qualidade.
Segurança da Informação: Noções de segurança digital, criptografia e práticas para proteger dados e sistemas.
Experiências Relevantes:
Desenvolvimento Full Stack: Criação de aplicações web com integração entre front-end e back-end.
Projetos Práticos: Desenvolvimento de soluções para casos reais, aplicando análise de requisitos e implementando sistemas completos.
Trabalho em Equipe: Participação em projetos colaborativos, aplicando metodologias ágeis para entregar soluções funcionais dentro dos prazos estabelecidos.
A conclusão deste curso me preparou para atuar de forma estratégica no desenvolvimento de sistemas e soluções tecnológicas, com uma visão completa do ciclo de vida de um software, desde a análise até a entrega final.
"
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="2022"
                      title="Desenvolvedor Java Web Full Stack - Generation Brasil"
                      subtitle="Bootcamp"
                      text="Durante o curso de Desenvolvedor Java Web Full Stack na Generation Brasil, adquiri habilidades práticas e teóricas para atuar no desenvolvimento completo de aplicações web, tanto no front-end quanto no back-end. O programa foi intensivo e focado em projetos práticos que simulavam demandas reais do mercado de tecnologia.
                        Principais Tecnologias e Ferramentas:
                        Front-end: HTML5, CSS3, JavaScript, Bootstrap, Angular.
                        Back-end: Java, Spring Boot, APIs RESTful.
                        Banco de Dados: MySQL, PostgreSQL.
                        Versionamento de Código: Git, GitHub.
                        Metodologias Ágeis: Scrum.
                        Experiências e Projetos:
                        Desenvolvimento Full Stack: Criação de aplicações web completas, implementando tanto o front-end quanto o back-end.
                        Integração de APIs REST: Criação e consumo de APIs para conectar o front-end com o back-end e sistemas externos.
                        Autenticação e Segurança: Implementação de autenticação de usuários com Spring Security e práticas de segurança para proteger os dados.
                        Boas Práticas de Código: Aplicação de princípios como SOLID e boas práticas de design para manter o código organizado e escalável.
                        Projetos em Grupo: Trabalho colaborativo em times multidisciplinares, desenvolvendo soluções completas e entregando projetos em sprints.
                        Esse curso me preparou para enfrentar os desafios do mercado de tecnologia, aplicando as melhores práticas em desenvolvimento web e buscando sempre a evolução contínua."
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
