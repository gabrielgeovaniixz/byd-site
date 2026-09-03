'use client';

import { useEffect, useState } from 'react';
import styles from './StickyCTA.module.css';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('top')?.offsetHeight ?? 0;
      setVisible(window.scrollY > heroHeight * 0.75);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.content}>
        <p>Agende seu test drive hoje.</p>
        <a
          href="#test-drive"
          className={styles.primary}
          onClick={() => {
            // TODO: enviar evento pro GA4/Meta Pixel aqui
          }}
        >
          Agendar agora
        </a>
      </div>
    </div>
  );
}
