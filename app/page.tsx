'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MedFinanse Pro - Finansowanie Medyczne 0% dla Lekarzy</title>
        <meta name="description" content="Specjalistyczne finansowanie medyczne dla lekarzy i placówek. Do 1,5 mln zł na dyplom, 0% RRSO, leasing operacyjny, dotacje. Bez weryfikacji BIK/KRD." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="finansowanie medyczne, leasing aparatury medycznej, dotacje medyczne, finansowanie 0%, gus-medic, leasing dla lekarzy, kredyt dla lekarzy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
