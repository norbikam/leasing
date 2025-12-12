import React from 'react';
import { motion } from 'framer-motion';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Szybka realizacja',
      description: 'Decyzja w 24 godziny. Sprawnie przeprowadzimy cały proces od konsultacji do finalizacji.'
    },
    {
      icon: '🎯',
      title: 'Wysoka skuteczność',
      description: '98% naszych wniosków o dotacje zostaje zaakceptowanych dzięki doświadczeniu zespołu.'
    },
    {
      icon: '💰',
      title: 'Najlepsze warunki',
      description: 'Współpracujemy z wieloma instytucjami finansowymi, aby znaleźć najkorzystniejsze rozwiązanie.'
    },
    {
      icon: '🤝',
      title: 'Pełne wsparcie',
      description: 'Jesteśmy z Tobą na każdym etapie - od analizy potrzeb po finalne rozliczenie.'
    },
    {
      icon: '📋',
      title: 'Bez ukrytych kosztów',
      description: 'Transparentne warunki współpracy. Wiesz dokładnie, za co płacisz.'
    },
    {
      icon: '🔒',
      title: 'Bezpieczeństwo',
      description: 'Twoje dane są u nas bezpieczne. Działamy zgodnie z najwyższymi standardami.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Konsultacja',
      description: 'Bezpłatna analiza Twoich potrzeb i możliwości finansowych.'
    },
    {
      step: '02',
      title: 'Dobór rozwiązania',
      description: 'Przygotowanie oferty dopasowanej do specyfiki Twojej firmy.'
    },
    {
      step: '03',
      title: 'Dokumentacja',
      description: 'Pomoc w przygotowaniu niezbędnych dokumentów i formalności.'
    },
    {
      step: '04',
      title: 'Realizacja',
      description: 'Otrzymanie środków finansowych i zakończenie procesu.'
    }
  ];

  return (
    <div>
      <section id="korzyści" className={styles.benefits}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <h2 className={styles.title}>Dlaczego Warto z Nami Współpracować?</h2>
            <p className={styles.subtitle}>
              Profesjonalizm, doświadczenie i indywidualne podejście do każdego klienta
            </p>
          </motion.div>

          <div className={styles.grid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.benefitCard}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className={styles.process}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <h2 className={styles.title}>Jak Wygląda Współpraca?</h2>
            <p className={styles.subtitle}>
              Prosty, przejrzysty proces w czterech krokach
            </p>
          </motion.div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={styles.processCard}
              >
                <div className={styles.stepNumber}>{item.step}</div>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDescription}>{item.description}</p>
                {index < process.length - 1 && (
                  <div className={styles.connector}>→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
