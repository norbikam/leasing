'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Stats.module.css';

interface StatItemProps {
  end: number;
  label: string;
  suffix: string;
  prefix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, suffix, prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return (
    <div ref={ref} className={styles.statItem}>
      <div className={styles.statNumber}>
        {prefix}{count}{suffix}
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Liczby Mówią Same Za Siebie</h2>
          <p className={styles.subtitle}>
            Nasze osiągnięcia i zaufanie klientów
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.grid}
        >
          <StatItem end={500} label="Zadowolonych klientów" suffix="+" />
          <StatItem end={50} label="Milionów złotych dotacji" suffix=" mln+" />
          <StatItem end={98} label="Skuteczność wniosków" suffix="%" />
          <StatItem end={10} label="Lat doświadczenia" suffix="+" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.testimonialsSection}
        >
          <h3 className={styles.testimonialsTitle}>Co Mówią Nasi Klienci</h3>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Dzięki FinansPro otrzymaliśmy dotację na rozwój firmy w rekordowym czasie. 
                Profesjonalna obsługa i pełne wsparcie na każdym etapie.
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Anna Kowalska</div>
                <div className={styles.authorTitle}>CEO, Tech Innovations Sp. z o.o.</div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Leasing floty samochodowej nigdy nie był tak prosty. Elastyczne warunki 
                i transparentna współpraca. Polecam każdemu przedsiębiorcy!
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Marek Nowak</div>
                <div className={styles.authorTitle}>Właściciel, Transport Express</div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Kompleksowe doradztwo i wsparcie w pozyskaniu środków unijnych. 
                Dzięki nim rozwinęliśmy naszą produkcję i zwiększyliśmy zatrudnienie.
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Piotr Wiśniewski</div>
                <div className={styles.authorTitle}>Dyrektor, Produkcja Plus</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
