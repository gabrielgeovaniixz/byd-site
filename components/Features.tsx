import styles from './Features.module.css';

const highlights = [
  {
    value: '480 km',
    label: 'Autonomia',
    description: 'Estimada em ciclo misto para deslocamentos urbanos e rodoviários.',
  },
  {
    value: '0–100 km/h',
    label: 'Aceleração',
    description: 'Performance eletrificada com resposta imediata em qualquer faixa.',
  },
  {
    value: '380 kW',
    label: 'Potência',
    description: 'Tração instantânea que entrega confiança em curvas e aceleração.',
  },
  {
    value: 'AI Drive',
    label: 'Tecnologia',
    description: 'Assistência inteligente com direção ativa e visão 360°.',
  },
  {
    value: '5 estrelas',
    label: 'Segurança',
    description: 'Estrutura reforçada com sensores e monitoramento constante.',
  },
  {
    value: '11 min',
    label: 'Carga rápida',
    description: 'Recarga até 80% em pouco tempo para uso diário e viagens.',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Especificações</p>
        <h2 className={styles.title}>Projetado para mover a vida com mais liberdade.</h2>
      </div>

      <div className={styles.grid}>
        {highlights.map((item) => (
          <article key={item.label} className={styles.card}>
            <span className={styles.value}>{item.value}</span>
            <h3 className={styles.label}>{item.label}</h3>
            <p className={styles.description}>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
