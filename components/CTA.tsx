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
            Gotowy na Rozwój Swojej Praktyki Medycznej?
          </h2>
          <p className={styles.subtitle}>
            Kompleksowa analiza możliwości finansowych w 24 godziny
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              marginTop: '2rem', 
              marginBottom: '2rem',
              padding: '1.5rem', 
              background: 'linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(102,126,234,0.3)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#667eea', textAlign: 'center' }}>
             Inicjacja Współpracy
            </h3>
            <p style={{ lineHeight: '1.8', color: '#555', textAlign: 'center', marginBottom: '0.5rem' }}>
              <strong>Zaliczka 500 zł</strong> – pierwszy krok ku realizacji Twojej wizji
            </p>
            <ul style={{ listStyle: 'none', padding: 0, color: '#666' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ Profesjonalna analiza finansowa i rekomendacje</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Gwarancja pełnego zwrotu przy negatywnej decyzji</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Formalne zobowiązanie do realizacji zakupu</li>
            </ul>
          </motion.div>

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
                <option>Finansowanie aparatury medycznej 0%</option>
                <option>Leasing operacyjny</option>
                <option>Dotacje i programy wsparcia</option>
                <option>Program dla młodych specjalistów</option>
                <option>Doradztwo finansowe</option>
              </select>
            </div>
            <textarea 
              placeholder="Opisz swoją potrzebę – jaka aparatura, jaki zakres finansowania (opcjonalnie)" 
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
              <div>
                <div className={styles.contactLabel}>Telefon</div>
                <div className={styles.contactValue}>+48 510 255 279</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div>
                <div className={styles.contactLabel}>E-mail</div>
                <div className={styles.contactValue}>kontakt@glowleasing.pl</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div>
                <div className={styles.contactLabel}>Partner</div>
                <div className={styles.contactValue}>
                  <a href="https://gus-medic.pl" target="_blank" rel="noopener noreferrer" 
                     style={{ color: '#667eea', textDecoration: 'none' }}>
                    gus-medic.pl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
