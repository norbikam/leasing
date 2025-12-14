'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.legalContainer}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <h1 className={styles.mainTitle}>Polityka Prywatności</h1>
        <p className={styles.updateDate}>Ostatnia aktualizacja: 14 grudnia 2024</p>

        <section className={styles.section}>
          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
            przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej 
            Glow Leasing oraz świadczonych usług finansowych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Administrator Danych Osobowych</h2>
          <p>Administratorem Danych Osobowych (ADO) jest:</p>
          <div className={styles.infoBox}>
            <p><strong>Robert Morawski</strong> prowadzący działalność gospodarczą pod nazwą handlową 
            <strong>Glow Leasing</strong></p>
            <p><strong>Adres:</strong> ul. Perłowa 13a, 76-270 Ustka</p>
            <p><strong>NIP:</strong> 8392556623</p>
            <p><strong>REGON:</strong> 529440726</p>
            <p><strong>E-mail kontaktowy:</strong> kontakt@glowleasing.pl</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>3. Rodzaje przetwarzanych danych</h2>
          <p>Administrator przetwarza następujące kategorie danych osobowych:</p>
          <ul>
            <li><strong>Dane identyfikacyjne:</strong> imię, nazwisko, PESEL (w przypadku wniosków o finansowanie)</li>
            <li><strong>Dane kontaktowe:</strong> adres e-mail, numer telefonu, adres korespondencyjny</li>
            <li><strong>Dane zawodowe:</strong> miejsce pracy, specjalizacja medyczna, numer dyplomu</li>
            <li><strong>Dane finansowe:</strong> informacje o zdolności kredytowej, dochody, zobowiązania finansowe</li>
            <li><strong>Dane techniczne:</strong> adres IP, dane przeglądarki, pliki cookies</li>
            <li><strong>Dane dokumentacyjne:</strong> skany dokumentów tożsamości, dyplomów, dokumentów finansowych</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Cele i podstawy prawne przetwarzania</h2>
          
          <h3>4.1. Obsługa zapytań i konsultacje (Art. 6 ust. 1 lit. b RODO)</h3>
          <p>
            Przetwarzanie danych w celu udzielenia odpowiedzi na zapytania, przeprowadzenia 
            bezpłatnej konsultacji finansowej i analizy możliwości finansowania.
          </p>

          <h3>4.2. Realizacja umów finansowych (Art. 6 ust. 1 lit. b RODO)</h3>
          <p>
            Przetwarzanie danych w celu przygotowania, zawarcia i wykonania umów leasingu, 
            kredytów oraz umów o współpracy przy pozyskiwaniu dotacji.
          </p>

          <h3>4.3. Weryfikacja zdolności finansowej (Art. 6 ust. 1 lit. f RODO)</h3>
          <p>
            Przetwarzanie danych w ramach prawnie uzasadnionego interesu Administratora, 
            polegającego na weryfikacji wiarygodności finansowej Klienta przed udzieleniem 
            finansowania.
          </p>

          <h3>4.4. Marketing bezpośredni (Art. 6 ust. 1 lit. f RODO)</h3>
          <p>
            Przetwarzanie danych w celu prowadzenia marketingu bezpośredniego produktów 
            i usług Administratora, stanowiącego prawnie uzasadniony interes.
          </p>

          <h3>4.5. Wypełnienie obowiązków prawnych (Art. 6 ust. 1 lit. c RODO)</h3>
          <p>
            Przetwarzanie danych w celu wypełnienia obowiązków wynikających z przepisów 
            prawa, w tym podatkowych, rachunkowych i związanych z przeciwdziałaniem 
            praniu pieniędzy.
          </p>

          <h3>4.6. Newsletter i komunikacja marketingowa (Art. 6 ust. 1 lit. a RODO)</h3>
          <p>
            Przetwarzanie danych na podstawie zgody w celu wysyłki newslettera, 
            informacji handlowych i materiałów promocyjnych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Okres przechowywania danych</h2>
          <ul>
            <li><strong>Dane dotyczące zawartych umów:</strong> przez okres obowiązywania umowy oraz 
            przez okres wymagany przepisami prawa (min. 5 lat dla dokumentacji księgowej)</li>
            <li><strong>Dane dotyczące zapytań niezakończonych umową:</strong> 12 miesięcy od ostatniego kontaktu</li>
            <li><strong>Dane przetwarzane na podstawie zgody:</strong> do czasu wycofania zgody</li>
            <li><strong>Dane dotyczące roszczeń:</strong> przez okres przedawnienia roszczeń (do 10 lat)</li>
            <li><strong>Dane techniczne (logi, cookies):</strong> maksymalnie 12 miesięcy</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Udostępnianie danych osobowych</h2>
          <p>Administrator może udostępniać dane osobowe następującym kategoriom odbiorców:</p>
          <ul>
            <li><strong>Instytucje finansowe:</strong> banki, firmy leasingowe, instytucje kredytowe 
            – w celu realizacji procesów finansowania</li>
            <li><strong>Partnerzy biznesowi:</strong> gus-medic.pl oraz inni dostawcy aparatury medycznej 
            – w zakresie realizacji zamówień</li>
            <li><strong>Instytucje dotacyjne:</strong> Agencja Rozwoju Przedsiębiorczości, urzędy marszałkowskie, 
            fundusze europejskie – w celu realizacji wniosków o dotacje</li>
            <li><strong>Dostawcy usług IT:</strong> hosting, systemy CRM, narzędzia analityczne</li>
            <li><strong>Firmy obsługujące księgowość i prawo:</strong> biura rachunkowe, kancelarie prawne</li>
            <li><strong>Organy państwowe:</strong> sądy, organy ścigania, urzędy skarbowe 
            – na podstawie przepisów prawa</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Przekazywanie danych poza EOG</h2>
          <p>
            Administrator nie planuje przekazywania danych osobowych do państw trzecich 
            (poza Europejski Obszar Gospodarczy). W przypadku konieczności takiego przekazania, 
            Administrator zapewni odpowiedni poziom ochrony danych zgodnie z RODO.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Prawa osób, których dane dotyczą</h2>
          <p>Osobom, których dane są przetwarzane, przysługują następujące prawa:</p>
          
          <h3>8.1. Prawo dostępu do danych (Art. 15 RODO)</h3>
          <p>Prawo do uzyskania potwierdzenia, czy dane są przetwarzane oraz dostępu do tych danych.</p>

          <h3>8.2. Prawo do sprostowania danych (Art. 16 RODO)</h3>
          <p>Prawo do żądania poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.</p>

          <h3>8.3. Prawo do usunięcia danych (Art. 17 RODO)</h3>
          <p>
            Prawo do żądania usunięcia danych w przypadkach określonych w RODO, 
            z zastrzeżeniem obowiązków prawnych Administratora.
          </p>

          <h3>8.4. Prawo do ograniczenia przetwarzania (Art. 18 RODO)</h3>
          <p>Prawo do żądania ograniczenia przetwarzania danych w określonych przypadkach.</p>

          <h3>8.5. Prawo do przenoszenia danych (Art. 20 RODO)</h3>
          <p>
            Prawo do otrzymania danych w ustrukturyzowanym, powszechnie używanym formacie 
            oraz do przesłania ich innemu administratorowi.
          </p>

          <h3>8.6. Prawo do sprzeciwu (Art. 21 RODO)</h3>
          <p>
            Prawo do wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie 
            uzasadnionego interesu oraz wobec przetwarzania w celach marketingowych.
          </p>

          <h3>8.7. Prawo do cofnięcia zgody</h3>
          <p>
            W przypadku przetwarzania danych na podstawie zgody, przysługuje prawo 
            do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem 
            przetwarzania dokonanego przed cofnięciem zgody.
          </p>

          <h3>8.8. Prawo do wniesienia skargi</h3>
          <p>
            Prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych 
            (ul. Stawki 2, 00-193 Warszawa).
          </p>

          <div className={styles.infoBox}>
            <p><strong>Realizacja praw:</strong></p>
            <p>W celu realizacji powyższych praw należy skontaktować się z Administratorem:</p>
            <p>E-mail: kontakt@glowleasing.pl</p>
            <p>Adres korespondencyjny: ul. Perłowa 13a, 76-270 Ustka</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>9. Bezpieczeństwo danych osobowych</h2>
          <p>Administrator stosuje następujące środki techniczne i organizacyjne:</p>
          <ul>
            <li>Szyfrowanie połączeń SSL/TLS</li>
            <li>Ograniczenie dostępu do danych osobowych tylko dla upoważnionych pracowników</li>
            <li>Regularne kopie zapasowe danych</li>
            <li>Monitoring bezpieczeństwa systemów informatycznych</li>
            <li>Umowy powierzenia przetwarzania danych z podwykonawcami</li>
            <li>Szkolenia pracowników w zakresie ochrony danych osobowych</li>
            <li>Zabezpieczenia fizyczne pomieszczeń, w których przetwarzane są dane</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>10. Cookies i technologie śledzące</h2>
          
          <h3>10.1. Czym są pliki cookies?</h3>
          <p>
            Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika 
            przez przeglądarkę internetową podczas korzystania ze strony.
          </p>

          <h3>10.2. Rodzaje stosowanych cookies:</h3>
          <ul>
            <li><strong>Niezbędne cookies:</strong> umożliwiają podstawowe funkcje strony (sesje, zabezpieczenia)</li>
            <li><strong>Funkcjonalne cookies:</strong> zapamiętują preferencje użytkownika</li>
            <li><strong>Analityczne cookies:</strong> służą do analizy ruchu na stronie (Google Analytics)</li>
            <li><strong>Marketingowe cookies:</strong> umożliwiają personalizację reklam (Facebook Pixel, Google Ads)</li>
          </ul>

          <h3>10.3. Zarządzanie cookies</h3>
          <p>
            Użytkownik może w dowolnym momencie zmienić ustawienia dotyczące plików cookies 
            w ustawieniach przeglądarki. Wyłączenie cookies może wpłynąć na funkcjonalność strony.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
          <p>
            Administrator może stosować zautomatyzowane podejmowanie decyzji, w tym profilowanie, 
            w celu wstępnej oceny zdolności kredytowej. Ostateczne decyzje finansowe są zawsze 
            podejmowane przez człowieka. Użytkownik ma prawo do interwencji człowieka, wyrażenia 
            własnego stanowiska oraz zakwestionowania decyzji.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Zmiany w Polityce Prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce 
            Prywatności. O wszelkich zmianach użytkownicy zostaną poinformowani poprzez 
            publikację zaktualizowanej wersji na stronie internetowej z podaniem daty aktualizacji.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Kontakt w sprawach ochrony danych</h2>
          <div className={styles.infoBox}>
            <p><strong>W sprawach ochrony danych osobowych prosimy o kontakt:</strong></p>
            <p>E-mail: kontakt@glowleasing.pl</p>
            <p>Telefon: +48 123 456 789</p>
            <p>Adres korespondencyjny: ul. Perłowa 13a, 76-270 Ustka</p>
            <p>Odpowiedź na zapytania następuje w terminie do 30 dni od otrzymania zgłoszenia.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>14. Postanowienia końcowe</h2>
          <p>
            Niniejsza Polityka Prywatności wchodzi w życie z dniem 14 grudnia 2024 r. 
            i obowiązuje do momentu publikacji nowej wersji.
          </p>
          <p>
            W sprawach nieuregulowanych niniejszą Polityką Prywatności mają zastosowanie 
            przepisy Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 
            27 kwietnia 2016 r. (RODO) oraz przepisy prawa polskiego.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
