import styles from './SocialProof.module.css';

const stats = [
  { value: '42k+', label: 'unidades entregues' },
  { value: '4.9/5', label: 'avaliação média' },
  { value: '96%', label: 'dos clientes recomendam' },
];

const testimonials = [
  {
    quote:
      'O conforto, a tecnologia e a sensação de liberdade fazem tudo parecer mais simples no dia a dia.',
    name: 'Marina S.',
    role: 'Cliente BYD, São Paulo',
  },
  {
    quote:
      'A aceleração é surpreendente, e o design faz a diferença quando você chega em qualquer lugar.',
    name: 'Thiago C.',
    role: 'Cliente BYD, Curitiba',
  },
];

export default function SocialProof() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Prova social</p>
        <h2 className={styles.title}>Jornada que fala por si.</h2>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.testimonials}>
        {testimonials.map((item) => (
          <article key={item.name} className={styles.card}>
            <p className={styles.quote}>“{item.quote}”</p>
            <div className={styles.person}>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
