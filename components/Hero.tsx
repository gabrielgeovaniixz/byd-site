import styles from './Hero.module.css';

const colorOptions = ['#F5F5F5', '#CBD5E1', '#95A5B6'];

const navItems = ['Modelos', 'Tecnologia', 'Segurança', 'Contato'];

export default function Hero() {
  return (
    <section id="top" className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.brandWrap}>
            <span className={styles.brand}>BYD</span>
          </div>

          <nav className={styles.nav} aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item} href="#" className={styles.navLink}>
                {item}
              </a>
            ))}
          </nav>

          <div className={styles.navActions} aria-label="Ações do menu">
            <button type="button" className={styles.iconButton} aria-label="Pesquisar">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="5.5" />
                <path d="M16 16L21 21" />
              </svg>
            </button>
            <button type="button" className={styles.iconButton} aria-label="Abrir menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>BYD Elétrico</span>
            <h1 className={styles.title}>Inovação em Movimento</h1>
            <p className={styles.subtitle}>
              Descubra o futuro da condução com performance, tecnologia e sustentabilidade para cada dia.
            </p>

            <button type="button" className={styles.primaryButton}>
              Agendar test drive
            </button>

            <div className={styles.vehicleFooter}>
              <div className={styles.footerMeta}>
                <span className={styles.vehicleName}>BYD Song Plus EV</span>
                <p>
                  SUV elétrico premium com conforto, autonomia e conectividade pensados para a vida moderna.
                </p>
              </div>

              <div className={styles.colorRow} aria-label="Cores disponíveis">
                {colorOptions.map((color, index) => (
                  <button
                    key={color}
                    type="button"
                    className={styles.colorSelector}
                    style={{ background: color }}
                    aria-label={`Cor ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.visual} aria-label="Render do veículo BYD Song Plus EV em fundo escuro">
            <div className={styles.orb} />

            <div className={`${styles.callout} ${styles.range}`}>
              <span className={styles.calloutDot} />
              <div className={styles.calloutCard}>
                <span className={styles.calloutLabel}>Autonomia</span>
                <strong>Até 600 km CLTC</strong>
                <small>Longa distância com eficiência</small>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.rating}`}>
              <span className={styles.calloutDot} />
              <div className={styles.calloutCard}>
                <span className={styles.calloutLabel}>Avaliação</span>
                <strong>★★★★★</strong>
                <small>Segurança 5 estrelas</small>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.zero}`}>
              <span className={styles.calloutDot} />
              <div className={styles.calloutCard}>
                <span className={styles.calloutLabel}>Zero emissões</span>
                <strong>Mobilidade limpa</strong>
                <small>Menos impacto para a cidade</small>
              </div>
            </div>

            <div className={`${styles.callout} ${styles.charge}`}>
              <span className={styles.calloutDot} />
              <div className={styles.calloutCard}>
                <span className={styles.calloutLabel}>Carga rápida</span>
                <strong>30-80% em 30 min</strong>
                <small>Recarga inteligente</small>
              </div>
            </div>

            <div className={styles.carStage}>
              <div className={styles.carShadow} />
              <div className={styles.carVideoWrap}>
                <video
                  className={styles.carVideo}
                  src="/video/carro.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/carro.png"
                  aria-label="Vídeo do BYD Song Plus EV"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
