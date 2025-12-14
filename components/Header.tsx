'use client';

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <button onClick={()=>scrollTo(0,0)} className={styles.logoButton}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Glow Leasing</span>
        </div>
        </button>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <button onClick={() => scrollToSection('uslugi')} className={styles.navLink}>
            Finansowanie
          </button>
          <button onClick={() => scrollToSection('korzyści')} className={styles.navLink}>
            Przewagi
          </button>
          <button onClick={() => scrollToSection('proces')} className={styles.navLink}>
            Proces
          </button>
          <button onClick={() => scrollToSection('kontakt')} className={styles.navLink}>
            Kontakt
          </button>
          <button onClick={() => scrollToSection('kontakt')} className={styles.ctaButton}>
            Bezpłatna konsultacja
          </button>
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
