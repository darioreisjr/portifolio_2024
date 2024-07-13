import styles from "./404.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>Página não encontrada</h1>
      <p>Ops! Parece que você está em uma página que não existe.</p>
      <a href="/">Voltar para a página inicial</a>
    </div>
  );
};

export default NotFound;