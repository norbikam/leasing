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
            Potwierdzony track record w finansowaniu medycznym i kosmetologicznym
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.grid}
        >
          <StatItem end={200} label="Zrealizowanych projektów finansowych" suffix="+" />
          <StatItem end={1.5} label="Milionów zł finansowania na dyplom" suffix=" mln" />
          <StatItem end={0} label="Procent oprocentowania RRSO" suffix="%" />
          <StatItem end={24} label="Godziny na analizę finansową" suffix="h" />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.testimonialsSection}
        >
          <h3 className={styles.testimonialsTitle}>Opinie Lekarzy</h3>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Dzięki finansowaniu 0% mogłem wyposażyć gabinet w nowoczesną aparaturę zabiegową bez 
                obciążania budżetu praktyki. Profesjonalna obsługa i pełna transparentność.
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Dr med. Anna Kowalska</div>
                <div className={styles.authorTitle}>Dermatolog, Warszawa</div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Jako młody lekarz po specjalizacji otrzymałem 1,2 mln zł finansowania tylko na podstawie 
                dyplomu. Bez historii kredytowej uruchomiłem własny gabinet – to niesamowite!
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Lek. med. Marek Nowak</div>
                <div className={styles.authorTitle}>Chirurg plastyczny</div>
              </div>
            </div>

            <div className={styles.testimonial}>
              <div className={styles.quote}>"</div>
              <p className={styles.testimonialText}>
                Współpraca z gus-medic.pl i MedFinanse Pro pozwoliła mi na rozbudowę kliniki. 
                Zaliczka 500 zł, transparentne warunki i realizacja w ekspresowym tempie.
              </p>
              <div className={styles.author}>
                <div className={styles.authorName}>Dr n. med. Piotr Wiśniewski</div>
                <div className={styles.authorTitle}>Stomatolog, Kraków</div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Stats;
