'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.badge}
          >
            Ponad 200 skutecznie zrealizowanych projektów finansowych
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.title}
          >
            Finanse medyczne bez granic
            <span className={styles.highlight}> – Twoja praktyka, nasze doświadczenie</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.subtitle}
          >
            Wspieramy lekarzy i placówki medyczne w pozyskiwaniu finansowania na rozwój praktyki. 
            Leasing operacyjny, dotacje publiczne i kredyty specjalistyczne – kompleksowe rozwiązania 
            finansowe w jednym miejscu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={styles.badge}
            style={{ marginTop: '1.5rem', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', fontSize: '1.1rem', padding: '1rem 2rem', color: '#fff' }}
          >
            FINANSOWANIE 0% bez ukrytych kosztów na naszą aparaturę zabiegową
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.buttons}
          >
            <button onClick={scrollToContact} className={styles.primaryButton}>
              Bezpłatna konsultacja finansowa
              <span className={styles.arrow}>→</span>
            </button>
            <button onClick={() => {
              const element = document.getElementById('uslugi');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} className={styles.secondaryButton}>
              Zobacz możliwości
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={styles.stats}
          >
            <div className={styles.stat}>
              <div className={styles.statNumber}>Do 1,5 mln</div>
              <div className={styles.statLabel}>Finansowanie na dyplom</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>0% RRSO</div>
              <div className={styles.statLabel}>Na aparaturę zabiegową</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>Bez BIK/KRD</div>
              <div className={styles.statLabel}>Dla absolwentów medycyny</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
