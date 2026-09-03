import styles from './CTA.module.css';

const metrics = [
  { value: '600 km', label: 'autonomia' },
  { value: '5/5', label: 'segurança' },
  { value: '30 min', label: 'carga rápida' },
];

export default function CTA() {
  return (
    <section id="experience" className={styles.cta}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>Pronto para acelerar sua próxima decisão?</h2>

        <p className={styles.support}>
          Experimente uma mobilidade mais inteligente, eficiente e conectada para o seu dia a dia.
        </p>

        <div className={styles.metrics} aria-label="Principais benefícios do BYD">
          {metrics.map((item) => (
            <div key={item.label} className={styles.metric}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href="#test-drive" className={styles.primary}>
            Agendar test drive
          </a>
          <a href="#features" className={styles.secondary}>
            Ver especificações
          </a>
        </div>
      </div>
    </section>
  );
}
