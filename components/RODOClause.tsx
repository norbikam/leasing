'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

const RODOClause: React.FC = () => {
  return (
    <div className={styles.legalContainer}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <h1 className={styles.mainTitle}>Klauzula Informacyjna RODO</h1>
        <p className={styles.updateDate}>Ostatnia aktualizacja: 14 grudnia 2024</p>

        <section className={styles.section}>
          <p className={styles.intro}>
            Zgodnie z art. 13 i 14 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 
            z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem 
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 
            95/46/WE (ogólne rozporządzenie o ochronie danych – RODO), informujemy o zasadach 
            przetwarzania Państwa danych osobowych oraz o przysługujących Państwu prawach.
          </p>
        </section>

        <section className={styles.section}>
          <h2>1. Administrator Danych Osobowych</h2>
          <div className={styles.infoBox}>
            <p><strong>Administratorem Państwa danych osobowych jest:</strong></p>
            <p><strong>Robert Morawski</strong></p>
            <p>prowadzący działalność gospodarczą pod nazwą handlową <strong>Glow Leasing</strong></p>
            <p><strong>Adres:</strong> ul. Perłowa 13a, 76-270 Ustka</p>
            <p><strong>NIP:</strong> 8392556623</p>
            <p><strong>REGON:</strong> 529440726</p>
            <p><strong>E-mail:</strong> kontakt@glowleasing.pl</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
          </div>
          <p>
            W sprawach dotyczących ochrony danych osobowych można kontaktować się 
            z Administratorem za pomocą powyższych danych kontaktowych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Cele i podstawy prawne przetwarzania danych</h2>
          
          <p><strong>Pani/Pana dane osobowe będą przetwarzane w następujących celach:</strong></p>

          <h3>2.1. Realizacja umowy (Art. 6 ust. 1 lit. b RODO)</h3>
          <ul>
            <li>Przeprowadzenie bezpłatnej konsultacji finansowej</li>
            <li>Przygotowanie oferty finansowania lub leasingu</li>
            <li>Przygotowanie i obsługa wniosków o dotacje</li>
            <li>Realizacja umowy o świadczenie usług finansowych</li>
            <li>Komunikacja związana z realizacją usług</li>
          </ul>

          <h3>2.2. Prawnie uzasadniony interes Administratora (Art. 6 ust. 1 lit. f RODO)</h3>
          <ul>
            <li>Weryfikacja zdolności finansowej przed udzieleniem finansowania</li>
            <li>Marketing bezpośredni usług finansowych</li>
            <li>Dochodzenie i obrona przed roszczeniami</li>
            <li>Analiza statystyczna i badanie satysfakcji klientów</li>
            <li>Archiwizacja dokumentacji w celach dowodowych</li>
          </ul>

          <h3>2.3. Wypełnienie obowiązku prawnego (Art. 6 ust. 1 lit. c RODO)</h3>
          <ul>
            <li>Rachunkowość i sprawozdawczość podatkowa</li>
            <li>Przeciwdziałanie praniu pieniędzy i finansowaniu terroryzmu (AML)</li>
            <li>Archiwizacja dokumentacji zgodnie z przepisami prawa</li>
          </ul>

          <h3>2.4. Zgoda (Art. 6 ust. 1 lit. a RODO)</h3>
          <ul>
            <li>Newsletter i komunikacja marketingowa drogą elektroniczną</li>
            <li>Analityka i remarketing (cookies marketingowe)</li>
            <li>Kontakt telefoniczny w celach marketingowych</li>
          </ul>
          <p className={styles.note}>
            <strong>Ważne:</strong> Zgodę można w każdej chwili wycofać bez wpływu na zgodność 
            z prawem przetwarzania, którego dokonano przed jej cofnięciem.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Kategorie przetwarzanych danych osobowych</h2>
          <p>Przetwarzamy następujące kategorie danych:</p>
          <ul>
            <li><strong>Dane identyfikacyjne:</strong> imię, nazwisko, PESEL, numer dowodu osobistego</li>
            <li><strong>Dane kontaktowe:</strong> adres zamieszkania, adres e-mail, numer telefonu</li>
            <li><strong>Dane zawodowe:</strong> miejsce pracy, stanowisko, specjalizacja medyczna, 
            numer dyplomu</li>
            <li><strong>Dane finansowe:</strong> dochody, zobowiązania finansowe, informacje 
            o zdolności kredytowej</li>
            <li><strong>Dane dotyczące wykształcenia:</strong> dyplomy, certyfikaty, specjalizacje</li>
            <li><strong>Dane techniczne:</strong> adres IP, dane logowania, informacje o urządzeniu</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Odbiorcy danych osobowych</h2>
          <p>Pani/Pana dane osobowe mogą być przekazywane następującym kategoriom odbiorców:</p>
          <ul>
            <li><strong>Instytucje finansowe:</strong> banki, firmy leasingowe, instytucje kredytowe 
            – w celu realizacji procesów finansowania</li>
            <li><strong>Partnerzy biznesowi:</strong> gus-medic.pl oraz inni dostawcy aparatury medycznej 
            – w zakresie realizacji zamówień</li>
            <li><strong>Instytucje dotacyjne:</strong> Polska Agencja Rozwoju Przedsiębiorczości, 
            urzędy marszałkowskie, fundusze europejskie – w celu realizacji wniosków o dotacje</li>
            <li><strong>Dostawcy usług IT:</strong> firmy hostingowe, systemy CRM, narzędzia analityczne</li>
            <li><strong>Podmioty świadczące usługi księgowe i prawne:</strong> biura rachunkowe, 
            kancelarie prawne</li>
            <li><strong>Organy publiczne:</strong> sądy, organy ścigania, urzędy skarbowe, Urząd Ochrony 
            Konkurencji i Konsumentów – na podstawie przepisów prawa</li>
          </ul>
          <p className={styles.note}>
            Wszystkie podmioty, którym przekazujemy dane, przetwarzają je wyłącznie zgodnie 
            z naszymi poleceniami lub na podstawie własnych obowiązków prawnych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Przekazywanie danych do państw trzecich</h2>
          <p>
            Administrator nie planuje przekazywać Pani/Pana danych osobowych do państw trzecich 
            (poza Europejski Obszar Gospodarczy). W przypadku konieczności takiego przekazania 
            (np. korzystanie z narzędzi analitycznych Google), Administrator zapewni odpowiedni 
            poziom ochrony danych poprzez:
          </p>
          <ul>
            <li>Stosowanie klauzul umownych zatwierdzonych przez Komisję Europejską</li>
            <li>Przekazywanie danych wyłącznie podmiotom posiadającym odpowiednie certyfikaty 
            (np. Privacy Shield)</li>
            <li>Uzyskanie Pani/Pana wyraźnej zgody na takie przekazanie</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Okres przechowywania danych</h2>
          <p>Pani/Pana dane osobowe będą przechowywane przez następujące okresy:</p>
          <ul>
            <li><strong>Dane dotyczące zawartych umów:</strong> przez okres obowiązywania umowy 
            oraz przez okres wymagany przepisami prawa (minimum 5 lat dla dokumentacji księgowej 
            zgodnie z ustawą o rachunkowości)</li>
            <li><strong>Dane dotyczące zapytań niezakończonych umową:</strong> 12 miesięcy 
            od ostatniego kontaktu</li>
            <li><strong>Dane przetwarzane na podstawie zgody:</strong> do momentu wycofania zgody 
            lub zgłoszenia sprzeciwu</li>
            <li><strong>Dane dotyczące roszczeń:</strong> przez okres przedawnienia roszczeń 
            wynikających z przepisów prawa (do 10 lat)</li>
            <li><strong>Dane w celach archiwizacyjnych:</strong> przez okres wynikający z przepisów 
            szczególnych (zgodnie z KPA, ustawą o rachunkowości)</li>
            <li><strong>Dane techniczne (logi serwera, cookies):</strong> maksymalnie 12 miesięcy</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Prawa osób, których dane dotyczą</h2>
          <p>Przysługują Pani/Panu następujące prawa:</p>

          <h3>7.1. Prawo dostępu do danych (Art. 15 RODO)</h3>
          <p>
            Prawo do uzyskania potwierdzenia, czy przetwarzamy Pani/Pana dane oraz dostępu do tych danych, 
            a także do otrzymania kopii danych.
          </p>

          <h3>7.2. Prawo do sprostowania danych (Art. 16 RODO)</h3>
          <p>
            Prawo do żądania niezwłocznego poprawienia nieprawidłowych danych lub uzupełnienia 
            niekompletnych danych.
          </p>

          <h3>7.3. Prawo do usunięcia danych - "prawo do bycia zapomnianym" (Art. 17 RODO)</h3>
          <p>
            Prawo do żądania usunięcia danych w przypadkach określonych w RODO, z zastrzeżeniem 
            wyjątków przewidzianych prawem (np. obowiązki archiwizacyjne).
          </p>

          <h3>7.4. Prawo do ograniczenia przetwarzania (Art. 18 RODO)</h3>
          <p>
            Prawo do żądania ograniczenia przetwarzania danych w sytuacjach określonych w RODO 
            (np. w przypadku kwestionowania prawidłowości danych).
          </p>

          <h3>7.5. Prawo do przenoszenia danych (Art. 20 RODO)</h3>
          <p>
            Prawo do otrzymania danych w ustrukturyzowanym, powszechnie używanym formacie 
            nadającym się do odczytu maszynowego oraz prawo do przesłania tych danych innemu 
            administratorowi.
          </p>

          <h3>7.6. Prawo do sprzeciwu (Art. 21 RODO)</h3>
          <p>
            Prawo do wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie 
            uzasadnionego interesu Administratora (Art. 6 ust. 1 lit. f RODO), w tym wobec 
            profilowania. W szczególności przysługuje Pani/Panu bezwarunkowe prawo sprzeciwu 
            wobec przetwarzania danych w celach marketingu bezpośredniego.
          </p>

          <h3>7.7. Prawo do cofnięcia zgody</h3>
          <p>
            W przypadku przetwarzania danych na podstawie zgody (Art. 6 ust. 1 lit. a RODO), 
            przysługuje Pani/Panu prawo do cofnięcia zgody w dowolnym momencie bez wpływu 
            na zgodność z prawem przetwarzania, którego dokonano przed cofnięciem zgody.
          </p>

          <h3>7.8. Prawo do wniesienia skargi do organu nadzorczego</h3>
          <p>
            Przysługuje Pani/Panu prawo do wniesienia skargi do organu nadzorczego zajmującego 
            się ochroną danych osobowych, którym w Polsce jest:
          </p>
          <div className={styles.infoBox}>
            <p><strong>Prezes Urzędu Ochrony Danych Osobowych (PUODO)</strong></p>
            <p>ul. Stawki 2, 00-193 Warszawa</p>
            <p>Telefon: +48 22 531 03 00</p>
            <p>E-mail: kancelaria@uodo.gov.pl</p>
            <p>Strona: www.uodo.gov.pl</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>8. Realizacja praw</h2>
          <p>
            W celu realizacji powyższych praw prosimy o kontakt z Administratorem:
          </p>
          <div className={styles.infoBox}>
            <p><strong>E-mail:</strong> kontakt@glowleasing.pl</p>
            <p><strong>Adres korespondencyjny:</strong> ul. Perłowa 13a, 76-270 Ustka</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
          </div>
          <p>
            Administrator odpowie na Pani/Pana żądanie <strong>niezwłocznie, nie później jednak 
            niż w ciągu miesiąca</strong> od otrzymania żądania. W przypadku skomplikowanych 
            żądań lub dużej liczby żądań, termin ten może zostać przedłużony o kolejne 2 miesiące, 
            o czym zostanie Pani/Pan poinformowany.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
          <p>
            Informujemy, że Administrator może stosować zautomatyzowane podejmowanie decyzji, 
            w tym profilowanie, w celu:
          </p>
          <ul>
            <li>Wstępnej oceny zdolności kredytowej</li>
            <li>Dopasowania oferty finansowej do Pani/Pana potrzeb</li>
            <li>Personalizacji treści marketingowych</li>
          </ul>
          <p>
            <strong>Ważne:</strong> Ostateczne decyzje dotyczące przyznania finansowania są zawsze 
            podejmowane przez człowieka (pracownika instytucji finansowej). Przysługuje Pani/Panu 
            prawo do interwencji człowieka, wyrażenia własnego stanowiska oraz zakwestionowania decyzji.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Wymóg podania danych</h2>
          
          <h3>10.1. Dane niezbędne do realizacji umowy</h3>
          <p>
            Podanie danych osobowych jest dobrowolne, jednak niezbędne do:
          </p>
          <ul>
            <li>Przeprowadzenia konsultacji finansowej</li>
            <li>Przygotowania oferty finansowania</li>
            <li>Zawarcia i wykonania umowy</li>
            <li>Złożenia wniosku o dotację</li>
          </ul>
          <p>
            Niepodanie danych uniemożliwi realizację powyższych usług.
          </p>

          <h3>10.2. Dane wymagane przepisami prawa</h3>
          <p>
            W przypadku danych wymaganych przepisami prawa (np. dane do celów księgowych, AML), 
            ich podanie jest obowiązkowe. Niepodanie tych danych uniemożliwi zawarcie umowy.
          </p>

          <h3>10.3. Dane opcjonalne</h3>
          <p>
            Dane przetwarzane na podstawie zgody (np. newsletter) są w pełni dobrowolne. 
            Odmowa ich podania nie wpływa na możliwość korzystania z usług.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Bezpieczeństwo danych</h2>
          <p>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
            bezpieczeństwo przetwarzanych danych osobowych, w tym ochronę przed ich udostępnieniem 
            osobom nieupoważnionym, utratą, zniszczeniem lub bezprawnym przetwarzaniem:
          </p>
          <ul>
            <li>Szyfrowanie połączeń (certyfikat SSL/TLS)</li>
            <li>Ograniczenie dostępu do danych wyłącznie dla upoważnionych pracowników</li>
            <li>Regularne kopie zapasowe danych</li>
            <li>Monitoring bezpieczeństwa systemów informatycznych</li>
            <li>Umowy powierzenia przetwarzania danych z podwykonawcami</li>
            <li>Szkolenia pracowników w zakresie ochrony danych osobowych</li>
            <li>Polityka haseł i kontrola dostępu do systemów</li>
            <li>Zabezpieczenia fizyczne pomieszczeń, w których przechowywane są dane</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>12. Pliki cookies</h2>
          <p>
            Strona internetowa wykorzystuje pliki cookies (ciasteczka) w celu:
          </p>
          <ul>
            <li>Zapewnienia prawidłowego działania strony (cookies niezbędne)</li>
            <li>Zapamiętania preferencji użytkownika (cookies funkcjonalne)</li>
            <li>Analizy ruchu na stronie (cookies analityczne - Google Analytics)</li>
            <li>Personalizacji treści reklamowych (cookies marketingowe - Facebook Pixel, Google Ads)</li>
          </ul>
          <p>
            Szczegółowe informacje o wykorzystywanych plikach cookies oraz sposobach ich zarządzania 
            dostępne są w <strong>Polityce Cookies</strong> oraz w ustawieniach przeglądarki.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. Aktualizacja klauzuli</h2>
          <p>
            Niniejsza klauzula informacyjna może być aktualizowana w przypadku zmian w zakresie 
            przetwarzania danych osobowych lub zmian przepisów prawa. Aktualna wersja jest zawsze 
            dostępna na stronie internetowej.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. Kontakt</h2>
          <div className={styles.infoBox}>
            <p><strong>W sprawach ochrony danych osobowych prosimy o kontakt:</strong></p>
            <p><strong>Administrator:</strong> Robert Morawski - Glow Leasing</p>
            <p><strong>Adres:</strong> ul. Perłowa 13a, 76-270 Ustka</p>
            <p><strong>E-mail:</strong> kontakt@glowleasing.pl</p>
            <p><strong>Telefon:</strong> +48 123 456 789</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Oświadczenie o zapoznaniu się z klauzulą</h2>
          <div className={styles.declarationBox}>
            <p>
              <strong>Oświadczam, że:</strong>
            </p>
            <ul>
              <li>Zapoznałem/łam się z powyższą klauzulą informacyjną RODO</li>
              <li>Zostałem/łam poinformowany/a o celu i sposobie przetwarzania moich danych osobowych</li>
              <li>Zostałem/łam poinformowany/a o przysługujących mi prawach związanych 
              z przetwarzaniem danych osobowych</li>
              <li>Rozumiem konsekwencje podania lub niepodania danych osobowych</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default RODOClause;
