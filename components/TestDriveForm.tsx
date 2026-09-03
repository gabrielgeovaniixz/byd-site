'use client';

import { FormEvent, useState } from 'react';
import styles from './TestDriveForm.module.css';

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      city: formData.get('city'),
    };

    console.log('Test drive request', payload);
    // TODO: enviar evento pro GA4/Meta Pixel aqui
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="test-drive" className={styles.section}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Agende um test drive</p>
          <h2 className={styles.title}>Experimente o futuro numa viagem de verdade.</h2>
          <p className={styles.lead}>
            Explore desempenho, conforto e tecnologia com a orientação de especialistas.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>

          <label>
            Telefone
            <input type="tel" name="phone" placeholder="(11) 99999-9999" required />
          </label>

          <label>
            Cidade
            <input type="text" name="city" placeholder="Sua cidade" required />
          </label>

          <button type="submit" className={styles.primary}>
            Solicitar agendamento
          </button>

          {submitted && <p className={styles.success}>Solicitação registrada. Em breve entraremos em contato.</p>}
        </form>
      </div>
    </section>
  );
}
