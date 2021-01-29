import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.column}>
            <ul>
              <li>
                <a href="#">Quem somos</a>
              </li>
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Como assinar</a>
              </li>
              <li>
                <a href="#">Planos</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.column} ${styles.social}`}>
            <a href="#">
              <img
                className={styles.facebook}
                src="/assets/img/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img src="/assets/img/instagram.svg" alt="instagram" />
            </a>
            <a href="#">
              <img src="/assets/img/youtube.svg" alt="youtube" />
            </a>
            <a href="#">
              <img src="/assets/img/blog.svg" alt="blog" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
