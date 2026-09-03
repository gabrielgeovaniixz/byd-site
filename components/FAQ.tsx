'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const items = [
  {
    question: 'Qual é a autonomia real do veículo?',
    answer:
      'A autonomia estimada varia de acordo com o uso e as condições climáticas, mas o modelo foi pensado para atender a rotina urbana e viagens de média distância com conforto e previsibilidade.',
  },
  {
    question: 'Como funciona a garantia?',
    answer:
      'A garantia inclui cobertura do veículo, componentes essenciais e assistência técnica especializada, com atendimento em rede credenciada para maior praticidade.',
  },
  {
    question: 'Existe financiamento e condições especiais?',
    answer:
      'Sim. O processo pode ser personalizado conforme sua renda, entrada e prazo desejado, com opções para pessoas físicas e empresas.',
  },
  {
    question: 'Quanto tempo leva para carregar?',
    answer:
      'Em carregamento rápido, o veículo pode atingir até 80% em poucos minutos, enquanto a recarga em casa permite uma rotina mais tranquila durante a noite.',
  },
  {
    question: 'Preciso de infraestrutura especial em casa?',
    answer:
      'A instalação de um ponto de recarga em casa depende do layout da sua residência, mas é totalmente viável em maioria dos projetos com suporte técnico.',
  },
  {
    question: 'O BYD atende às necessidades de família?',
    answer:
      'Sim. O interior foi pensado para conforto, espaço e navegação intuitiva, com uma experiência moderna para quem usa o carro todos os dias.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>FAQ</p>
        <h2 className={styles.title}>Perguntas frequentes antes do seu próximo passo.</h2>
      </div>

      <div className={styles.list}>
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <button
                type="button"
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && <p className={styles.answer}>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
