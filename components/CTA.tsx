import React from 'react';
import { motion } from 'framer-motion';
import styles from './CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section id="kontakt" className={styles.cta}>
      <div className={styles.background}>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
      </div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <h2 className={styles.title}>
            Gotowy na Rozwój Swojej Firmy?
          </h2>
          <p className={styles.subtitle}>
            Umów się na bezpłatną konsultację i dowiedz się, jak możemy Ci pomóc
          </p>

          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                placeholder="Imię i nazwisko" 
                className={styles.input}
              />
              <input 
                type="email" 
                placeholder="Adres e-mail" 
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <input 
                type="tel" 
                placeholder="Numer telefonu" 
                className={styles.input}
              />
              <select className={styles.input}>
                <option>Wybierz usługę</option>
                <option>Leasing operacyjny</option>
                <option>Leasing finansowy</option>
                <option>Dotacje unijne</option>
                <option>Dotacje krajowe</option>
                <option>Finansowanie inwestycji</option>
                <option>Doradztwo finansowe</option>
              </select>
            </div>
            <textarea 
              placeholder="Opisz swoją potrzebę (opcjonalnie)" 
              className={styles.textarea}
              rows={4}
            ></textarea>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
            >
              Wyślij zapytanie
              <span className={styles.arrow}>→</span>
            </motion.button>
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <div className={styles.contactLabel}>Telefon</div>
                <div className={styles.contactValue}>+48 123 456 789</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>
                <div className={styles.contactLabel}>E-mail</div>
                <div className={styles.contactValue}>kontakt@finanspro.pl</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <div className={styles.contactLabel}>Adres</div>
                <div className={styles.contactValue}>ul. Przykładowa 123, Warszawa</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
