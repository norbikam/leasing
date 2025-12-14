'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

const TermsOfService: React.FC = () => {
  return (
    <div className={styles.legalContainer}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <h1 className={styles.mainTitle}>Regulamin Świadczenia Usług</h1>
        <p className={styles.updateDate}>Ostatnia aktualizacja: 14 grudnia 2024</p>

        <section className={styles.section}>
          <h2>§ 1. Postanowienia ogólne</h2>
          
          <h3>1.1. Definicje</h3>
          <p>Użyte w Regulaminie pojęcia oznaczają:</p>
          <ul>
            <li><strong>Usługodawca/Administrator:</strong> Robert Morawski prowadzący działalność gospodarczą 
            pod nazwą handlową Glow Leasing, NIP: 8392556623, REGON: 529440726, 
            adres: ul. Perłowa 13a, 76-270 Ustka</li>
            <li><strong>Klient:</strong> osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca 
            osobowości prawnej, korzystająca z usług Usługodawcy</li>
            <li><strong>Usługi:</strong> usługi doradztwa finansowego, pośrednictwa w finansowaniu, wsparcia 
            w pozyskiwaniu dotacji świadczone przez Usługodawcę</li>
            <li><strong>Strona internetowa:</strong> strona internetowa prowadzona przez Usługodawcę pod adresem 
            www.glowleasing.pl</li>
            <li><strong>Finansowanie 0%:</strong> finansowanie aparatury medycznej z 0% RRSO (Rzeczywista Roczna 
            Stopa Oprocentowania) oferowane na wybraną aparaturę zabiegową</li>
            <li><strong>Zaliczka inicjująca:</strong> kwota 500 zł płatna przez Klienta w celu uruchomienia 
            procedury finansowania</li>
            <li><strong>Faktura proforma:</strong> dokument określający warunki zakupu aparatury medycznej</li>
          </ul>

          <h3>1.2. Zakres regulaminu</h3>
          <p>
            Niniejszy Regulamin określa zasady świadczenia usług przez Usługodawcę, prawa i obowiązki 
            Stron, zasady zawierania umów oraz tryb postępowania reklamacyjnego.
          </p>

          <h3>1.3. Akceptacja regulaminu</h3>
          <p>
            Korzystanie z usług Usługodawcy jest równoznaczne z akceptacją niniejszego Regulaminu. 
            Przed skorzystaniem z usług Klient zobowiązany jest do zapoznania się z treścią Regulaminu.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 2. Rodzaje świadczonych usług</h2>
          
          <h3>2.1. Finansowanie aparatury medycznej</h3>
          <p>
            Usługodawca specjalizuje się w strukturyzowaniu finansowania na profesjonalną aparaturę 
            zabiegową we współpracy z renomowanym dostawcą gus-medic.pl. Oferta obejmuje finansowanie 
            do 1,5 mln zł na podstawie dyplomu ukończenia studiów medycznych, bez weryfikacji historii 
            kredytowej w BIK i KRD.
          </p>

          <h3>2.2. Leasing operacyjny</h3>
          <p>
            Usługodawca pośredniczy w zawieraniu umów leasingu operacyjnego na sprzęt medyczny, 
            oferując elastyczne harmonogramy spłat dostosowane do specyfiki praktyki medycznej.
          </p>

          <h3>2.3. Dotacje i programy wsparcia</h3>
          <p>
            Usługodawca prowadzi monitoring programów dotacyjnych dedykowanych branży medycznej, 
            przygotowuje dokumentację aplikacyjną oraz prowadzi pełną procedurę od etapu wstępnego 
            po rozliczenie projektu.
          </p>

          <h3>2.4. Doradztwo finansowe</h3>
          <p>
            Usługodawca świadczy profesjonalne doradztwo w zakresie optymalizacji finansów, 
            analizy możliwości finansowych i rekomendacji optymalnych instrumentów finansowania.
          </p>

          <h3>2.5. Program dla młodych specjalistów</h3>
          <p>
            Dedykowane warunki preferencyjne dla absolwentów medycyny rozpoczynających praktykę, 
            z uproszczoną weryfikacją zdolności kredytowej.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 3. Warunki współpracy handlowej</h2>
          
          <h3>3.1. Zaliczka inicjująca</h3>
          <p>
            W celu uruchomienia procedury finansowania Klient zobowiązany jest do wpłaty zaliczki 
            w wysokości <strong>500 zł (słownie: pięćset złotych)</strong>.
          </p>

          <h3>3.2. Gwarancja zwrotu zaliczki</h3>
          <p>
            W przypadku negatywnej decyzji instytucji finansowej dotyczącej przyznania finansowania, 
            Usługodawca zobowiązuje się do <strong>pełnego zwrotu zaliczki</strong> w terminie 14 dni 
            roboczych od otrzymania odmownej decyzji.
          </p>

          <h3>3.3. Zobowiązanie do realizacji zakupu</h3>
          <p>
            Wpłata zaliczki stanowi formalne zobowiązanie Klienta do nabycia aparatury medycznej 
            zgodnie z wystawioną fakturą proforma, po uzyskaniu pozytywnej decyzji finansowej.
          </p>

          <h3>3.4. Klauzula o koszcie manipulacyjnym</h3>
          <div className={styles.warningBox}>
            <p><strong>⚠️ WAŻNE:</strong></p>
            <p>
              W przypadku uzyskania akceptacji finansowania przez instytucję finansową i <strong>jednostronnej 
              rezygnacji Klienta</strong> z realizacji zakupu określonego w fakturze proforma, 
              <strong>zaliczka zostaje zatrzymana jako uzasadniony koszt manipulacyjny</strong>.
            </p>
          </div>

          <h3>3.5. Transparentność procesu</h3>
          <p>
            Usługodawca zobowiązuje się do pełnej transparentności warunków współpracy na każdym 
            etapie procesu finansowania. Klient ma prawo do bieżącego wglądu w stan realizacji 
            swojego wniosku.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 4. Proces obsługi klienta</h2>
          
          <h3>Krok 1: Wpłata zaliczki</h3>
          <p>
            Klient dokonuje wpłaty zaliczki 500 zł na rachunek bankowy Usługodawcy. 
            Dane do przelewu są przekazywane po złożeniu zapytania.
          </p>

          <h3>Krok 2: Due diligence finansowe</h3>
          <p>
            Usługodawca przeprowadza bezpłatną konsultację i profesjonalną ocenę zdolności 
            finansowej Klienta w terminie do 24 godzin od otrzymania zaliczki.
          </p>

          <h3>Krok 3: Emisja faktury proforma</h3>
          <p>
            Na podstawie potrzeb Klienta Usługodawca przygotowuje dokumentację zakupu aparatury 
            medycznej w formie faktury proforma określającej model urządzenia, cenę i warunki dostawy.
          </p>

          <h3>Krok 4: Strukturyzacja finansowania</h3>
          <p>
            Usługodawca dokonuje doboru optymalnego instrumentu finansowego (finansowanie 0% RRSO, 
            leasing operacyjny lub inne rozwiązanie) oraz kompletuje niezbędną dokumentację.
          </p>

          <h3>Krok 5: Finalizacja transakcji</h3>
          <p>
            Po otrzymaniu pozytywnej decyzji finansowej następuje podpisanie umów i realizacja 
            zakupu aparatury medycznej zgodnie z fakturą proforma.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 5. Finansowanie 0% RRSO</h2>
          
          <h3>5.1. Charakterystyka oferty</h3>
          <p>
            Finansowanie 0% RRSO dotyczy wybranej aparatury zabiegowej oferowanej w ramach 
            współpracy z partnerem gus-medic.pl. Oznacza to brak jakichkolwiek kosztów 
            odsetkowych, prowizji i opłat manipulacyjnych.
          </p>

          <h3>5.2. Kryteria kwalifikacyjne</h3>
          <ul>
            <li>Posiadanie dyplomu ukończenia studiów medycznych</li>
            <li>Finansowanie do kwoty 1,5 mln zł</li>
            <li>Pominięcie standardowej weryfikacji w bazach BIK i KRD dla absolwentów medycyny</li>
            <li>Przyspieszona ścieżka akceptacji dla lekarzy rozpoczynających praktykę</li>
          </ul>

          <h3>5.3. Zakres aparatury</h3>
          <p>
            Finansowanie 0% dotyczy aparatury zabiegowej dostępnej w ofercie partnera gus-medic.pl. 
            Szczegółowy wykaz aparatury kwalifikującej się do finansowania 0% jest dostępny 
            po konsultacji z Usługodawcą.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 6. Wynagrodzenie Usługodawcy</h2>
          
          <h3>6.1. Struktura wynagrodzenia</h3>
          <p>
            Wynagrodzenie Usługodawcy za świadczone usługi może składać się z:
          </p>
          <ul>
            <li><strong>Zaliczki inicjującej</strong> – 500 zł (zatrzymywana jako koszt manipulacyjny 
            w przypadku rezygnacji po uzyskaniu finansowania)</li>
            <li><strong>Prowizji od instytucji finansowej</strong> – wypłacanej przez bank/firmę leasingową, 
            nieobciążającej Klienta</li>
            <li><strong>Wynagrodzenia za przygotowanie wniosku o dotację</strong> – ustalane indywidualnie 
            w zależności od zakresu usług</li>
            <li><strong>Wynagrodzenia success fee</strong> – w przypadku dotacji, wypłacanego po otrzymaniu 
            środków przez Klienta (% od kwoty dotacji)</li>
          </ul>

          <h3>6.2. Brak ukrytych kosztów</h3>
          <p>
            Usługodawca zapewnia pełną transparentność kosztów. Wszelkie dodatkowe opłaty 
            (jeśli występują) są uzgadniane z Klientem przed rozpoczęciem realizacji usługi.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 7. Obowiązki i prawa Klienta</h2>
          
          <h3>7.1. Obowiązki Klienta</h3>
          <ul>
            <li>Przekazanie kompletnych i prawdziwych informacji oraz dokumentów niezbędnych 
            do realizacji usługi</li>
            <li>Terminowa wpłata zaliczki inicjującej</li>
            <li>Współpraca z Usługodawcą w zakresie kompletowania dokumentacji</li>
            <li>Poinformowanie Usługodawcy o wszelkich zmianach mających wpływ na proces finansowania</li>
            <li>Realizacja zakupu aparatury zgodnie z fakturą proforma po uzyskaniu finansowania</li>
          </ul>

          <h3>7.2. Prawa Klienta</h3>
          <ul>
            <li>Prawo do bezpłatnej konsultacji finansowej</li>
            <li>Prawo do bieżącej informacji o statusie wniosku</li>
            <li>Prawo do pełnego zwrotu zaliczki w przypadku negatywnej decyzji finansowej</li>
            <li>Prawo do rezygnacji z usług przed wpłatą zaliczki bez ponoszenia kosztów</li>
            <li>Prawo do złożenia reklamacji zgodnie z § 9 Regulaminu</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>§ 8. Obowiązki Usługodawcy</h2>
          
          <h3>8.1. Zakres obowiązków</h3>
          <ul>
            <li>Profesjonalne doradztwo finansowe i dobór optymalnych rozwiązań</li>
            <li>Kompleksowa obsługa procesu finansowania od analizy do finalizacji</li>
            <li>Przygotowanie kompletnej dokumentacji wymaganej przez instytucje finansowe</li>
            <li>Bieżące informowanie Klienta o postępach w realizacji wniosku</li>
            <li>Zwrot zaliczki w terminie 14 dni w przypadku negatywnej decyzji finansowej</li>
            <li>Zachowanie poufności danych Klienta</li>
            <li>Działanie zgodnie z obowiązującymi przepisami prawa</li>
          </ul>

          <h3>8.2. Wyłączenia odpowiedzialności</h3>
          <p>
            Usługodawca nie ponosi odpowiedzialności za:
          </p>
          <ul>
            <li>Negatywną decyzję instytucji finansowej w sprawie przyznania finansowania</li>
            <li>Opóźnienia w procesie wynikające z przyczyn leżących po stronie Klienta 
            (np. brak dokumentów, nieprawdziwe informacje)</li>
            <li>Opóźnienia wynikające z procedur instytucji finansowych lub organów publicznych</li>
            <li>Zmiany warunków finansowania przez instytucje finansowe</li>
            <li>Szkody powstałe na skutek siły wyższej</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>§ 9. Reklamacje</h2>
          
          <h3>9.1. Składanie reklamacji</h3>
          <p>
            Klient ma prawo złożyć reklamację dotyczącą świadczonych usług. Reklamację należy 
            złożyć w formie:
          </p>
          <ul>
            <li><strong>Pisemnej:</strong> na adres: ul. Perłowa 13a, 76-270 Ustka</li>
            <li><strong>E-mailowej:</strong> na adres: kontakt@glowleasing.pl</li>
          </ul>

          <h3>9.2. Treść reklamacji</h3>
          <p>Reklamacja powinna zawierać:</p>
          <ul>
            <li>Imię, nazwisko i dane kontaktowe Klienta</li>
            <li>Opis zdarzenia będącego podstawą reklamacji</li>
            <li>Oczekiwania Klienta co do sposobu rozpatrzenia reklamacji</li>
            <li>Dokumenty potwierdzające zasadność reklamacji (jeśli są dostępne)</li>
          </ul>

          <h3>9.3. Rozpatrywanie reklamacji</h3>
          <p>
            Usługodawca rozpatruje reklamację w terminie <strong>14 dni roboczych</strong> 
            od daty jej otrzymania. Odpowiedź na reklamację jest przekazywana na adres 
            e-mail lub korespondencyjny wskazany przez Klienta.
          </p>

          <h3>9.4. Polubowne rozwiązywanie sporów</h3>
          <p>
            W przypadku negatywnego rozpatrzenia reklamacji, Klient może skorzystać z pozasądowych 
            sposobów rozpatrywania sporów, w tym mediacji lub postępowania przed stałym sądem 
            polubownym działającym przy Wojewódzkim Inspektorze Inspekcji Handlowej.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 10. Ochrona danych osobowych</h2>
          <p>
            Zasady przetwarzania danych osobowych Klientów określa odrębny dokument – 
            <strong> Polityka Prywatności</strong>, stanowiący integralną część niniejszego Regulaminu.
          </p>
          <p>
            Klient potwierdza, że zapoznał się z Polityką Prywatności i akceptuje zasady 
            przetwarzania swoich danych osobowych.
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 11. Postanowienia końcowe</h2>
          
          <h3>11.1. Zmiany regulaminu</h3>
          <p>
            Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie z ważnych 
            przyczyn (zmiany przepisów prawa, zmiany w ofercie usług). O zmianach Klienci 
            zostaną poinformowani poprzez publikację zaktualizowanego Regulaminu na stronie 
            internetowej z 14-dniowym wyprzedzeniem.
          </p>

          <h3>11.2. Prawo właściwe</h3>
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy 
            prawa polskiego, w szczególności:
          </p>
          <ul>
            <li>Ustawa z dnia 23 kwietnia 1964 r. Kodeks cywilny</li>
            <li>Ustawa z dnia 30 maja 2014 r. o prawach konsumenta</li>
            <li>Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną</li>
            <li>Rozporządzenie RODO</li>
          </ul>

          <h3>11.3. Rozstrzyganie sporów</h3>
          <p>
            Ewentualne spory wynikłe z realizacji umów zawartych na podstawie niniejszego 
            Regulaminu będą rozstrzygane przez sąd właściwy miejscowo dla siedziby Usługodawcy, 
            z zastrzeżeniem bezwzględnie obowiązujących przepisów prawa dotyczących właściwości 
            sądów w sprawach konsumenckich.
          </p>

          <h3>11.4. Wejście w życie</h3>
          <p>
            Niniejszy Regulamin wchodzi w życie z dniem <strong>14 grudnia 2024 r.</strong>
          </p>
        </section>

        <section className={styles.section}>
          <h2>§ 12. Kontakt</h2>
          <div className={styles.infoBox}>
            <p><strong>Robert Morawski - Glow Leasing</strong></p>
            <p>Adres: ul. Perłowa 13a, 76-270 Ustka</p>
            <p>NIP: 8392556623</p>
            <p>REGON: 529440726</p>
            <p>E-mail: kontakt@glowleasing.pl</p>
            <p>Telefon: +48 123 456 789</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
