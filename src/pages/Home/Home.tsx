import Profile from "../../components/Profile/Profile";
import photo from "../../assets/img/profile.jpg";

export default function Home() {
  return (
    <section className="containerSection animeLeft" id="home">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Profile
          presentation="Olá, meu nome é"
          name="Dario Reis"
          profession="Sou um"
          jobs={["Desenvolvedor FullStack", "Desenvolvedor Front-end", "Desenvolvedor Back-end"]}
          description="Tenho três anos de experiência em desenvolvimento web, com foco tanto no front-end quanto no back-end. Durante esse tempo, me especializei em tecnologias como JavaScript e Node.js, buscando constantemente aprimorar minhas habilidades e aprender as melhores práticas do mercado. Meu objetivo é criar interfaces intuitivas e experiências de usuário de alta qualidade. Além disso, estou sempre aberto a novas oportunidades de aprendizado e desafios que me permitam crescer profissionalmente."
          buttonHref="contact"
          buttonText="Entrar em contato"
          photo={photo}
          alt="Foto de Dario Reis"
        />
      </div>
    </section>
  );
}
