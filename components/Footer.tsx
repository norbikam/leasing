import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <span className={styles.logoText}>Glow Leasing</span>
            </div>
            <p className={styles.description}>
              Finanse medyczne bez granic – Twoja praktyka, nasze doświadczenie. 
              Specjalistyczne finansowanie dla lekarzy i placówek medycznych.
            </p>
            <div className={styles.badge} style={{ 
              marginTop: '1rem',
              padding: '0.75rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#667eea'
            }}>
              💰 Finansowanie 0% RRSO
            </div>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Finansowanie</h4>
            <ul className={styles.links}>
              <li><button onClick={() => scrollToSection('uslugi')} className={styles.link}>Aparatura medyczna 0%</button></li>
              <li><button onClick={() => scrollToSection('uslugi')} className={styles.link}>Leasing operacyjny</button></li>
              <li><button onClick={() => scrollToSection('uslugi')} className={styles.link}>Dotacje medyczne</button></li>
              <li><button onClick={() => scrollToSection('uslugi')} className={styles.link}>Program dla młodych lekarzy</button></li>
              <li><button onClick={() => scrollToSection('uslugi')} className={styles.link}>Doradztwo finansowe</button></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Informacje</h4>
            <ul className={styles.links}>
              <li><button onClick={() => scrollToSection('korzyści')} className={styles.link}>Przewagi konkurencyjne</button></li>
              <li><button onClick={() => scrollToSection('proces')} className={styles.link}>Proces współpracy</button></li>
              <li><button onClick={() => scrollToSection('kontakt')} className={styles.link}>Warunki zaliczki 500 zł</button></li>
              <li><a href="https://gus-medic.pl" target="_blank" rel="noopener noreferrer" className={styles.link}>Partner: gus-medic.pl</a></li>
              <li><button onClick={() => scrollToSection('kontakt')} className={styles.link}>Kontakt</button></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Kontakt</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span>📞</span> +48 510 255 279
              </li>
              <li className={styles.contactItem}>
                <span>✉️</span> kontakt@glowleasing.pl
              </li>
              <li className={styles.contactItem}>
                <span>🔗</span> Partner:<br/>
                <a href="https://gus-medic.pl" target="_blank" rel="noopener noreferrer" 
                   style={{ color: '#667eea', textDecoration: 'none' }}>
                  gus-medic.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 GlowLeasing Wszelkie prawa zastrzeżone.
          </p>
          <div className={styles.legal}>
            <a href="/polityka-prywatnosci" target='_blank' rel='noopener noreferrer' className={styles.legalLink}>Polityka prywatności</a>
            <a href="/regulamin" target='_blank' rel='noopener noreferrer' className={styles.legalLink}>Regulamin</a>
            <a href="/rodo" target='_blank' rel='noopener noreferrer' className={styles.legalLink}>RODO</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
