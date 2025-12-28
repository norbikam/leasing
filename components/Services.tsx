import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHospital, 
  FaHandHoldingUsd, 
  FaGift, 
  FaFileContract, 
  FaRocket, 
  FaChartLine 
} from 'react-icons/fa';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaHospital />,
      title: 'Finansowanie Aparatury Zabiegowej',
      description: 'Specjalizujemy się w strukturyzowaniu finansowania na profesjonalną aparaturę zabiegową we współpracy z renomowanym dostawcą gus-medic.pl.',
      features: [
        'Finansowanie 0% RRSO bez ukrytych kosztów', 
        'Do 1,5 mln zł na podstawie dyplomu', 
        'Bez weryfikacji BIK i KRD', 
        'Przyspieszona ścieżka dla młodych lekarzy'
      ]
    },
    {
      icon: <FaHandHoldingUsd />,
      title: 'Leasing Operacyjny',
      description: 'Optymalne rozwiązanie finansowe dla lekarzy dążących do rozwoju praktyki przy zachowaniu płynności finansowej.',
      features: [
        '0% oprocentowanie nominalne', 
        'Zachowanie rezerw kapitałowych', 
        'Korzyści podatkowe', 
        'Elastyczne harmonogramy spłat'
      ]
    },
    {
      icon: <FaGift />,
      title: 'Dotacje i Programy Wsparcia',
      description: 'Prowadzimy systematyczny monitoring wszystkich programów dotacyjnych dedykowanych branży medycznej.',
      features: [
        'Dotacje na technologie medyczne', 
        'Wsparcie cyfryzacji placówek', 
        'Granty badawczo-rozwojowe', 
        'Programy regionalne'
      ]
    },
    {
      icon: <FaFileContract />,
      title: 'Warunki Współpracy',
      description: 'Przejrzyste zasady – pełna transparentność procesu finansowania z gwarancją bezpieczeństwa.',
      features: [
        'Zaliczka 500 zł z gwarancją zwrotu', 
        'Pełna transparentność', 
        'Formalne zobowiązanie zakupu', 
        'Jasne warunki na każdym etapie'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Program dla Młodych Specjalistów',
      description: 'Dedykowane warunki preferencyjne dla absolwentów medycyny rozpoczynających praktykę.',
      features: [
        'Uproszczona weryfikacja', 
        'Finansowanie 0% na start', 
        'Bez historii kredytowej', 
        'Kompleksowa obsługa procesu'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Doradztwo Finansowe',
      description: 'Profesjonalna analiza możliwości finansowych i rekomendacja optymalnych instrumentów finansowania.',
      features: [
        'Analiza w 24 godziny', 
        'End-to-end obsługa', 
        'Głęboka specjalizacja branżowa', 
        'Potwierdzony track record'
      ]
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
          <h2 className={styles.title}>Specjalistyczne Finansowanie</h2>
          <p className={styles.subtitle}>
            Nowoczesna medycyna i kosmetologia wymaga zaawansowanych rozwiązań technologicznych i finansowych
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
