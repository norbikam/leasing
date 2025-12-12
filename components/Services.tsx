import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🚗',
      title: 'Leasing Operacyjny',
      description: 'Finansowanie samochodów, maszyn i urządzeń bez obciążania bilansu firmy. Elastyczne warunki dopasowane do Twoich potrzeb.',
      features: ['Brak wkładu własnego', 'Pełne odliczenie VAT', 'Szybka akceptacja', 'Korzystne raty']
    },
    {
      icon: '💼',
      title: 'Leasing Finansowy',
      description: 'Idealne rozwiązanie dla firm chcących stać się właścicielami sprzętu. Korzystne warunki i możliwość wykupu.',
      features: ['Własność po leasingu', 'Odpisyw amortyzacyjne', 'Elastyczne okresy', 'Niskie opłaty końcowe']
    },
    {
      icon: '🎯',
      title: 'Dotacje Unijne',
      description: 'Pomożemy w pozyskaniu środków z UE na rozwój Twojej firmy. Profesjonalne wsparcie na każdym etapie.',
      features: ['Analiza możliwości', 'Przygotowanie wniosku', 'Obsługa projektu', 'Rozliczenie dotacji']
    },
    {
      icon: '💡',
      title: 'Dotacje Krajowe',
      description: 'Wsparcie w uzyskaniu dotacji z programów krajowych i regionalnych. Maksymalizujemy Twoje szanse.',
      features: ['Doradztwo', 'Dokumentacja', 'Monitoring', 'Pełne wsparcie']
    },
    {
      icon: '🏭',
      title: 'Finansowanie Inwestycji',
      description: 'Kompleksowe rozwiązania finansowe dla większych przedsięwzięć biznesowych i rozwoju firmy.',
      features: ['Duże kwoty', 'Długie okresy', 'Indywidualne warunki', 'Szybka decyzja']
    },
    {
      icon: '📊',
      title: 'Doradztwo Finansowe',
      description: 'Profesjonalne doradztwo w zakresie optymalizacji finansów i wyboru najlepszych rozwiązań dla firmy.',
      features: ['Analiza finansowa', 'Planowanie', 'Optymalizacja kosztów', 'Strategia rozwoju']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="uslugi" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Nasze Usługi</h2>
          <p className={styles.subtitle}>
            Kompleksowe rozwiązania finansowe dla Twojej firmy
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={styles.card}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
