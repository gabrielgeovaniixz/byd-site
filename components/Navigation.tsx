'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';

const LINKS = ['Technology', 'Design', 'Experience'];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <a href="#top" className={styles.mark}>
        BYD
      </a>

      <nav className={styles.links} aria-label="Primary">
        {LINKS.map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className={styles.menu}>
          {LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
