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
          jobs={["Desenvolvedor FullStack", "Desenvolvedor Web"]}
          description=" Tenho dedicado os últimos três anos ao estudo e prática em desenvolvimento web. Possuo especialização em tecnologias front-end e back-end, com foco em JavaScript e Node.JS. Estou sempre buscando aprender e implementar as melhores práticas no desenvolvimento web para criar experiências de usuário excepcionais."
          buttonHref="contact"
          buttonText="Entrar em contato"
          photo={photo}
          alt="Foto de Dario Reis"
        />
      </div>
    </section>
  );
}
