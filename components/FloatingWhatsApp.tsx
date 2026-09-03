'use client';

import { useEffect, useState } from 'react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('top')?.offsetHeight ?? 0;
      setVisible(window.scrollY > heroHeight * 0.8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={styles.button}
      onClick={() => {
        // TODO: enviar evento pro GA4/Meta Pixel aqui
      }}
    >
      WhatsApp
    </a>
  );
}
