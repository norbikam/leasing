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
            ✨ Zaufało nam ponad 500 firm w Polsce
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={styles.title}
          >
            Rozwijaj Biznes z Leasingiem
            <span className={styles.highlight}> i Dotacjami</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.subtitle}
          >
            Kompleksowe wsparcie finansowe dla przedsiębiorców. 
            Pomożemy Ci uzyskać leasing oraz dotacje unijne na rozwój Twojej firmy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.buttons}
          >
            <button onClick={scrollToContact} className={styles.primaryButton}>
              Umów bezpłatną konsultację
              <span className={styles.arrow}>→</span>
            </button>
            <button onClick={() => {
              const element = document.getElementById('uslugi');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }} className={styles.secondaryButton}>
              Poznaj nasze usługi
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className={styles.stats}
          >
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Zadowolonych klientów</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50 mln+</div>
              <div className={styles.statLabel}>Pozyskanych dotacji</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Skuteczność wniosków</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
