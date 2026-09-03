import styles from './Footer.module.css';

const links = ['Sobre a BYD', 'Segurança', 'Tecnologia', 'Contato'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>BYD</p>
          <p className={styles.copy}>Built to Move You.</p>
        </div>

        <div className={styles.column}>
          <h3>Institucional</h3>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <a href="#top">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Redes</h3>
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contato</h3>
          <ul>
            <li><a href="tel:+551130003456">+55 (11) 3000-3456</a></li>
            <li><a href="mailto:hello@byd.com.br">hello@byd.com.br</a></li>
            <li>Av. Paulista, 1.000 — São Paulo</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 BYD. Site desenvolvido por Fusion Inovations.</p>
      </div>
    </footer>
  );
}
