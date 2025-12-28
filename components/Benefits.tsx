import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPercentage, 
  FaMoneyBillWave, 
  FaShieldAlt, 
  FaBolt, 
  FaHospital, 
  FaLock 
} from 'react-icons/fa';
import { 
  MdPayment, 
  MdAssessment, 
  MdDescription, 
  MdAccountBalance, 
  MdCheckCircle 
} from 'react-icons/md';
import styles from './Benefits.module.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <FaPercentage />,
      title: 'Finansowanie 0% RRSO',
      description: 'Bez ukrytych kosztów, prowizji i opłat manipulacyjnych na naszą aparaturę zabiegową. Przejrzyste warunki kontraktowe.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Zaliczka 500 zł',
      description: 'Inicjacja procesu z gwarancją pełnego zwrotu przy negatywnej decyzji kredytowej. Mechanizm zabezpieczenia dla obu stron.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Gwarancja zwrotu kapitału',
      description: 'Pełna transparentność – w przypadku odmowy finansowania zaliczka podlega natychmiastowemu zwrotowi.'
    },
    {
      icon: <FaBolt />,
      title: 'End-to-end obsługa',
      description: 'Pełny zakres usług od analizy finansowej po finalizację transakcji. Minimalizacja czasu procesowania wniosków.'
    },
    {
      icon: <FaHospital />,
      title: 'Głęboka specjalizacja',
      description: 'Kompleksowe zrozumienie potrzeb sektora medycznego i współpraca z renomowanymi dostawcami aparatury.'
    },
    {
      icon: <FaLock />,
      title: 'Standardy transparentności',
      description: 'Jasne i czytelne zasady współpracy bez ukrytych klauzul. Potwierdzony track record – ponad 200 projektów.'
    }
  ];

  const process = [
    {
      step: '01',
      icon: <MdPayment />,
      title: 'Wpłata zaliczki',
      description: '500 zł na uruchomienie procedury – refundowana przy odmowie finansowania.'
    },
    {
      step: '02',
      icon: <MdAssessment />,
      title: 'Due diligence finansowe',
      description: 'Bezpłatna konsultacja i profesjonalna ocena zdolności finansowej w 24h.'
    },
    {
      step: '03',
      icon: <MdDescription />,
      title: 'Emisja faktury proforma',
      description: 'Przygotowanie dokumentacji zakupu aparatury medycznej zgodnie z Twoimi potrzebami.'
    },
    {
      step: '04',
      icon: <MdAccountBalance />,
      title: 'Strukturyzacja finansowania',
      description: 'Dobór optymalnego instrumentu finansowego 0% RRSO i kompletacja dokumentacji.'
    },
    {
      step: '05',
      icon: <MdCheckCircle />,
      title: 'Finalizacja transakcji',
      description: 'Podpisanie umów i realizacja zakupu zgodnie z fakturą proforma.'
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
            <h2 className={styles.title}>Nasze Przewagi Konkurencyjne</h2>
            <p className={styles.subtitle}>
              Doświadczenie i specjalizacja, które generują rezultaty
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.importantNote}
            style={{ 
              marginTop: '3rem', 
              padding: '2rem', 
              background: 'linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,87,34,0.1) 100%)',
              borderLeft: '4px solid #ff9800',
              borderRadius: '8px'
            }}
          >
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#ff9800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaShieldAlt /> Klauzula istotna
            </h3>
            <p style={{ lineHeight: '1.8', color: '#666' }}>
              Po uzyskaniu akceptacji finansowania i jednostronnym odstąpieniu od realizacji zakupu 
              określonego w fakturze proforma, zaliczka w wysokości 500 zł zostaje zatrzymana jako 
              uzasadniony koszt manipulacyjny.
            </p>
          </motion.div>
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
            <h2 className={styles.title}>Proces Obsługi Klienta</h2>
            <p className={styles.subtitle}>
              Prosty, przejrzysty proces w pięciu krokach
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
                <div className={styles.processIcon}>{item.icon}</div>
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
